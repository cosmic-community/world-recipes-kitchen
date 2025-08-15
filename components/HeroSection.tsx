import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-primary-600 to-primary-700 text-white py-20">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Discover World Flavors
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-100">
            Authentic recipes from around the globe, crafted by professional chefs and shared with love
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/recipes"
              className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
            >
              Browse Recipes
            </Link>
            <Link
              href="#featured"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors"
            >
              See Featured
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}