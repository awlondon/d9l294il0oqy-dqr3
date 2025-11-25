"""Utility helpers to inspect franchise rollout and financial projections.

Run as a script to print summary views derived from the CSV inputs:

    python scripts/franchise_projection.py --data-dir data/franchise --view summary
"""

from __future__ import annotations

import argparse
import csv
from pathlib import Path
from typing import Dict, List, Tuple


def read_rollout(path: Path) -> List[Dict[str, str]]:
    with path.open(newline="", encoding="utf-8") as f:
        reader = csv.DictReader(f)
        return list(reader)


def read_financials(path: Path) -> List[Dict[str, str]]:
    with path.open(newline="", encoding="utf-8") as f:
        reader = csv.DictReader(f)
        return list(reader)


def summarize_stores_by_year(rollout_rows: List[Dict[str, str]]) -> List[Tuple[int, int]]:
    totals: Dict[int, int] = {}
    for row in rollout_rows:
        year = int(row["year"])
        totals[year] = max(totals.get(year, 0), int(row["total_system_stores_after_year"]))
    return sorted(totals.items())


def format_table(headers: List[str], rows: List[List[str]]) -> str:
    col_widths = [len(h) for h in headers]
    for row in rows:
        for idx, cell in enumerate(row):
            col_widths[idx] = max(col_widths[idx], len(cell))
    formatted_rows = []
    header_line = " | ".join(h.ljust(col_widths[i]) for i, h in enumerate(headers))
    formatted_rows.append(header_line)
    formatted_rows.append("-+-".join("-" * w for w in col_widths))
    for row in rows:
        formatted_rows.append(" | ".join(cell.ljust(col_widths[i]) for i, cell in enumerate(row)))
    return "\n".join(formatted_rows)


def print_summary(data_dir: Path) -> None:
    rollout_rows = read_rollout(data_dir / "rollout_by_year_and_metro.csv")
    financial_rows = read_financials(data_dir / "system_financials_by_year.csv")

    store_rows = [[str(year), str(total)] for year, total in summarize_stores_by_year(rollout_rows)]
    print("Total stores by year (from rollout schedule):")
    print(format_table(["Year", "Total stores"], store_rows))
    print()

    fin_rows = [
        [row["year"], row["system_revenue_millions"], row["royalties_millions"], row["marketing_fund_millions"]]
        for row in financial_rows
    ]
    print("System revenue and fees by year (in $M):")
    print(format_table(["Year", "Revenue", "Royalties", "Marketing"], fin_rows))


def print_revenue_chart(data_dir: Path) -> None:
    financial_rows = read_financials(data_dir / "system_financials_by_year.csv")
    bars = ["#" * int(float(row["system_revenue_millions"]) / 2) for row in financial_rows]
    chart_rows = [
        f"Y{row['year'].rjust(2)} | {bar} {row['system_revenue_millions']}M"
        for row, bar in zip(financial_rows, bars)
    ]
    print("System revenue by year (each # ≈ $2M):")
    print("\n".join(chart_rows))


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(description="Franchise rollout and financial projection helper")
    parser.add_argument("--data-dir", type=Path, default=Path("data/franchise"), help="Directory containing the CSV inputs")
    parser.add_argument(
        "--view",
        choices=["summary", "revenue"],
        default="summary",
        help="Choose 'summary' for tabular outputs or 'revenue' for a simple revenue bar chart",
    )
    return parser


def main() -> None:
    parser = build_parser()
    args = parser.parse_args()

    if args.view == "summary":
        print_summary(args.data_dir)
    elif args.view == "revenue":
        print_revenue_chart(args.data_dir)


if __name__ == "__main__":
    main()
