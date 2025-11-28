const FranchisePage = () => {
  return (
    <div className="bg-brand-sand">
      <section className="mx-auto max-w-5xl px-4 pt-10 sm:px-6 sm:pt-14">
        <p className="badge bg-white/90 text-brand-espresso">Franchise</p>
        <h1 className="mt-4 text-4xl font-heading font-extrabold text-brand-espresso">Own the story in your city</h1>
        <p className="mt-3 text-lg text-brand-espresso/80">
          Co.work.PLAY Cafe locations are locally owned and operated. We provide the system—brand, safety, operating model, training,
          and technology—so you can lead a trusted space for caregivers and kids in your community.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-12 sm:px-6">
        <div className="space-y-3">
          <h2 className="section-title">Own the story in your city</h2>
          <p className="section-subtitle">
            Local owners are the face of the brand. You’ll build relationships with caregivers, hire and coach your team, and create a
            warm, calm environment that reflects your neighborhood while following a proven framework.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-12 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl bg-white/90 p-6 shadow-soft">
            <h3 className="text-xl font-heading font-semibold text-brand-espresso">Guardrails</h3>
            <ul className="mt-4 space-y-3 text-brand-espresso/80">
              <li>• Safety and wellness standards for children and caregivers.</li>
              <li>• Brand basics, core services, and a hospitality-forward mindset.</li>
              <li>• Expectations for supervised play, cafe experience, and cleanliness.</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-white/90 p-6 shadow-soft">
            <h3 className="text-xl font-heading font-semibold text-brand-espresso">Freedom</h3>
            <ul className="mt-4 space-y-3 text-brand-espresso/80">
              <li>• Community partnerships and local programming that fit your market.</li>
              <li>• Hiring and team culture that reflect your leadership style.</li>
              <li>• Marketing tactics and member experiences tailored to your city.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-12 sm:px-6">
        <div className="rounded-2xl bg-white/90 p-6 shadow-soft">
          <h2 className="text-2xl font-heading font-semibold text-brand-espresso">What you can expect from corporate</h2>
          <ul className="mt-4 space-y-3 text-brand-espresso/80">
            <li>• Design and brand standards that keep the experience consistent.</li>
            <li>• Training, playbook materials, and onboarding for your team.</li>
            <li>• A tech platform for memberships, AI-GM tools, and daily operations.</li>
            <li>• Marketing support and guidance for launches and growth.</li>
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-16 sm:px-6">
        <div className="rounded-2xl bg-white/90 p-6 shadow-soft">
          <h2 className="text-2xl font-heading font-semibold text-brand-espresso">Your commitment as an owner</h2>
          <ul className="mt-4 space-y-3 text-brand-espresso/80">
            <li>• Own outcomes and steward the brand in your market.</li>
            <li>• Protect kids, uphold safety, and maintain calm, clean spaces.</li>
            <li>• Train and support a real team—no solo heroics.</li>
            <li>• Engage your community and adapt within the playbook.</li>
            <li>• Reference the Owner Manifesto as it becomes available for deeper guidance.</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default FranchisePage;
