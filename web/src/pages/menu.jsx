import MenuList from '@/components/MenuList';

const coffee = [
  { name: 'Flat White', description: 'Velvety espresso with micro-foam milk.', price: '$4.75' },
  { name: 'Matcha Oat Latte', description: 'Ceremonial matcha, vanilla bean, and oat milk.', price: '$5.50' },
  { name: 'Cold Brew Tonic', description: 'Bright citrus tonic with a rosemary sprig.', price: '$5.00' }
];

const snacks = [
  { name: 'Mini Bento', description: 'Kid-friendly bites with fruit, cheese, and crunchy veggies.', price: '$7.50' },
  { name: 'Grain Bowl', description: 'Greens, roasted vegetables, and herb tahini.', price: '$11.00' },
  { name: 'Morning Pastry', description: 'Local bakery rotation — ask for today’s bake.', price: '$3.75' }
];

const kids = [
  { name: 'Build-a-Bite', description: 'DIY toast bar with jam, nut butter, and banana slices.', price: '$6.00' },
  { name: 'Mini Mac & Cheese', description: 'Cheesy goodness with hidden veggies.', price: '$6.50' }
];

const MenuPage = () => {
  return (
    <div className="bg-brand-sand">
      <section className="mx-auto max-w-5xl px-4 pt-10 sm:px-6 sm:pt-14">
        <p className="badge bg-white/90 text-brand-espresso">Menu</p>
        <h1 className="mt-4 text-4xl font-heading font-extrabold text-brand-espresso">Cafe fuel + kid joy</h1>
        <p className="mt-3 text-lg text-brand-espresso/80">
          Specialty coffee, hearty snacks, and playful kid plates crafted for caregivers on the go.
        </p>
      </section>
      <div className="mx-auto grid max-w-5xl gap-6 px-4 pb-14 sm:px-6 sm:grid-cols-2">
        <MenuList title="Coffee + Drinks" items={coffee} />
        <MenuList title="Plates + Snacks" items={snacks} />
        <MenuList title="Kids" items={kids} />
      </div>
      <div className="mx-auto max-w-5xl px-4 pb-16 sm:px-6">
        <a
          href="/assets/floorplan.pdf"
          className="inline-flex items-center justify-center rounded-full bg-brand-pine px-5 py-3 text-sm font-semibold text-brand-sand shadow-soft transition hover:bg-brand-espresso"
        >
          Download full menu PDF
        </a>
      </div>
    </div>
  );
};

export default MenuPage;
