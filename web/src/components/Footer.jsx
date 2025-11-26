const Footer = () => {
  return (
    <footer className="bg-brand-espresso text-brand-sand mt-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 sm:px-6 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-brand-sunset">Hours</p>
          <p className="mt-2 text-sm">Mon–Fri: 7a – 7p</p>
          <p className="text-sm">Sat–Sun: 8a – 6p</p>
        </div>
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-brand-sunset">Visit</p>
          <p className="mt-2 text-sm">123 Co.work.play Way</p>
          <p className="text-sm">Warm Modern District, Anywhere</p>
        </div>
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-brand-sunset">Connect</p>
          <a className="mt-2 block text-sm text-brand-sage" href="mailto:hello@co-work-play.test">
            Contact form
          </a>
          <div className="mt-3 flex items-center gap-3">
            {[
              { label: 'Instagram', href: 'https://instagram.com' },
              { label: 'Facebook', href: 'https://facebook.com' },
              { label: 'LinkedIn', href: 'https://linkedin.com' }
            ].map((item) => (
              <a
                key={item.label}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-sage/20 text-brand-sand transition hover:bg-brand-sage/40"
                href={item.href}
                aria-label={item.label}
              >
                <span className="text-xs font-semibold">{item.label[0]}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-brand-sand/30 px-4 py-4 text-center text-xs text-brand-sand/80 sm:px-6">
        Co.work.PLAY Café locations are locally owned and operated within a shared safety and brand framework.
      </div>
    </footer>
  );
};

export default Footer;
