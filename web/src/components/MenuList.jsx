const MenuList = ({ title, items }) => {
  return (
    <div className="card bg-white/90">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-pine">{title}</p>
        </div>
      </div>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item.name} className="flex items-start justify-between gap-3">
            <div>
              <p className="font-heading text-lg text-brand-espresso">{item.name}</p>
              <p className="text-sm text-brand-espresso/70">{item.description}</p>
            </div>
            {item.price && <span className="text-sm font-semibold text-brand-espresso">{item.price}</span>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuList;
