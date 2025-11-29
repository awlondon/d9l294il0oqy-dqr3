import { useState } from 'react';

const samplePosts = [
  {
    id: 1,
    author: 'Maya (parent)',
    category: 'offering',
    content: 'Piano teacher offering 30-minute intro lessons for kids after school.',
    createdAt: 'Today'
  },
  {
    id: 2,
    author: 'Neighborhood co-op',
    category: 'announcement',
    content: 'Community swap this Sunday: bring gently used books and puzzles.',
    createdAt: 'Yesterday'
  },
  {
    id: 3,
    author: 'Jordan',
    category: 'seeking',
    content: 'Looking for a part-time sitter comfortable with toddlers + light meal prep.',
    createdAt: '2 days ago'
  }
];

const categories = ['offering', 'seeking', 'event', 'announcement'];

const CommunityBoardPage = () => {
  const [categoryFilter, setCategoryFilter] = useState('all');

  const visiblePosts = samplePosts.filter((post) => categoryFilter === 'all' || post.category === categoryFilter);

  return (
    <div className="bg-brand-sand min-h-screen px-4 pb-14 pt-10 sm:px-6 sm:pt-14">
      <p className="badge bg-white/90 text-brand-espresso">Community board</p>
      <h1 className="mt-4 text-4xl font-heading font-extrabold text-brand-espresso">Neighborly posts with real moderation</h1>
      <p className="mt-3 max-w-3xl text-lg text-brand-espresso/80">
        Anyone can submit. Posts go live after admin approval—no algorithms or pressure, just chronological listings by category.
      </p>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <div className="card bg-white/90">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-pine">Submit a post</p>
          <p className="mt-2 text-brand-espresso/80">Include your contact info only if you want it displayed.</p>
          <form className="mt-4 space-y-3">
            <div>
              <label className="block text-sm font-semibold text-brand-espresso" htmlFor="author">
                Name
              </label>
              <input
                id="author"
                className="mt-1 w-full rounded-lg border border-brand-sage/60 bg-white px-3 py-2 text-brand-espresso focus:border-brand-pine focus:outline-none"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-brand-espresso" htmlFor="contact">
                Email or phone (optional)
              </label>
              <input
                id="contact"
                className="mt-1 w-full rounded-lg border border-brand-sage/60 bg-white px-3 py-2 text-brand-espresso focus:border-brand-pine focus:outline-none"
                placeholder="Add only if you want it shown"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-brand-espresso">Category</label>
              <select className="mt-1 w-full rounded-lg border border-brand-sage/60 bg-white px-3 py-2 text-brand-espresso focus:border-brand-pine focus:outline-none">
                {categories.map((cat) => (
                  <option key={cat}>{cat}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-brand-espresso" htmlFor="content">
                Content
              </label>
              <textarea
                id="content"
                rows={4}
                className="mt-1 w-full rounded-lg border border-brand-sage/60 bg-white px-3 py-2 text-brand-espresso focus:border-brand-pine focus:outline-none"
                placeholder="What are you offering, seeking, or announcing?"
              />
            </div>
            <button
              type="button"
              className="w-full rounded-full bg-brand-pine px-4 py-3 text-sm font-semibold uppercase tracking-wide text-brand-sand shadow-soft transition hover:bg-brand-espresso"
            >
              Submit for approval
            </button>
            <p className="text-sm text-brand-espresso/70">
              Moderators approve posts for safety and clarity. QR codes near the physical board link here so families can post from their phones.
            </p>
          </form>
        </div>

        <div className="card bg-white/90">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-pine">Live posts</p>
              <p className="text-brand-espresso/80">Chronological inside each category; no ranking algorithms.</p>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setCategoryFilter('all')}
                className={`rounded-full border px-3 py-2 text-xs font-semibold uppercase tracking-wide transition ${
                  categoryFilter === 'all'
                    ? 'border-brand-pine bg-brand-pine text-brand-sand'
                    : 'border-brand-sage/70 bg-white text-brand-espresso hover:border-brand-pine'
                }`}
              >
                All
              </button>
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setCategoryFilter(cat)}
                  className={`rounded-full border px-3 py-2 text-xs font-semibold uppercase tracking-wide transition ${
                    categoryFilter === cat
                      ? 'border-brand-pine bg-brand-pine text-brand-sand'
                      : 'border-brand-sage/70 bg-white text-brand-espresso hover:border-brand-pine'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-4 space-y-3">
            {visiblePosts.map((post) => (
              <div key={post.id} className="rounded-xl border border-brand-sage/60 bg-white/70 p-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-pine">{post.category}</p>
                  <p className="text-xs text-brand-espresso/60">{post.createdAt}</p>
                </div>
                <p className="mt-1 font-semibold text-brand-espresso">{post.author}</p>
                <p className="text-brand-espresso/80">{post.content}</p>
                <p className="mt-2 text-xs text-brand-espresso/70">Approved by admin — no MLMs, politics, or unsafe content.</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityBoardPage;
