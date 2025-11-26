import { useState } from 'react';
import Link from 'next/link';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/zones', label: 'Visit' },
  { href: '/menu', label: 'Menu' },
  { href: '/franchise', label: 'Own a Café' },
  { href: '/careers', label: 'Careers' },
  { href: '/party', label: 'Party' },
  { href: '/staff', label: 'Staff Portal' }
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/90 backdrop-blur border-b border-brand-sage/60">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-2 text-lg font-heading font-extrabold text-brand-espresso">
          <span className="h-3 w-3 rounded-full bg-brand-sunset" aria-hidden />
          Co.work.play
        </Link>
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-brand-espresso transition hover:bg-brand-sage sm:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          <span className="block h-0.5 w-6 bg-brand-espresso" />
          <span className="mt-1 block h-0.5 w-6 bg-brand-espresso" />
          <span className="mt-1 block h-0.5 w-6 bg-brand-espresso" />
        </button>
        <nav className="hidden gap-6 text-sm font-semibold text-brand-espresso sm:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-brand-pine">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
      {open && (
        <div className="border-t border-brand-sage/60 bg-white sm:hidden">
          <div className="flex flex-col space-y-2 px-4 py-3 text-brand-espresso">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="py-1" onClick={() => setOpen(false)}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
