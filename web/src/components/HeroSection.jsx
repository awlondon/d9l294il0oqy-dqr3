import VideoPlayer from './VideoPlayer';

const featureCallouts = [
  {
    title: 'Work that actually gets done',
    description: 'Focus pods, comfortable seating, and steady Wi-Fi built for real deadlines.',
    icon: '💻'
  },
  {
    title: 'Calm, supervised play',
    description: 'Trusted team members keep kids engaged with safe, joyful play moments.',
    icon: '🧸'
  },
  {
    title: 'Coffee + bites for real life',
    description: 'Espresso, tea, snacks, and meals paced to support caregivers and kids.',
    icon: '☕'
  }
];

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 20%, rgba(243, 227, 210, 0.7), transparent 35%), radial-gradient(circle at 80% 10%, rgba(202, 222, 210, 0.65), transparent 32%), linear-gradient(180deg, #f7f1e9 0%, #f2e6d8 60%, #f2ede6 100%)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-brand-sand/90" />
      </div>
      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:flex-row lg:items-center lg:gap-16">
        <div className="max-w-2xl space-y-6">
          <p className="badge w-fit bg-white/70 text-brand-espresso shadow-soft">Cowork + cafe + supervised play</p>
          <h1 className="text-4xl font-heading font-extrabold text-brand-espresso sm:text-5xl lg:text-6xl">
            Work, coffee, and play — together.
          </h1>
          <p className="text-lg text-brand-espresso/80">
            A calm, supervised play space and cafe where caregivers can get real work done while their little ones explore nearby. Built
            for remote and hybrid life, without the founder spotlight.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {featureCallouts.map((item) => (
              <div key={item.title} className="card flex gap-3 bg-white/90 backdrop-blur">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-sage/70 text-2xl">{item.icon}</div>
                <div>
                  <p className="font-heading font-semibold text-brand-espresso">{item.title}</p>
                  <p className="text-sm text-brand-espresso/80">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full max-w-xl rounded-3xl bg-white/80 p-4 shadow-soft backdrop-blur">
          <div className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand-pine">Peek inside</div>
          <VideoPlayer src="/assets/play-area.mp4" title="Play area teaser" autoPlay muted loop />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
