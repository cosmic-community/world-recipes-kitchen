import { getRecipes, getCategories } from '@/lib/cosmic';
import HeroSection from '@/components/HeroSection';
import FeaturedRecipes from '@/components/FeaturedRecipes';
import CategoryGrid from '@/components/CategoryGrid';

export default async function HomePage() {
  const [recipes, categories] = await Promise.all([
    getRecipes(),
    getCategories()
  ]);

  const featuredRecipes = recipes.slice(0, 3);

  return (
    <div>
      <HeroSection />
      
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Featured Recipes
            </h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              Discover our most popular dishes from around the world
            </p>
          </div>
          <FeaturedRecipes recipes={featuredRecipes} />
        </div>
      </section>

      <section className="py-16 bg-secondary-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Explore by Cuisine
            </h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              Browse recipes by your favorite cuisine types
            </p>
          </div>
          <CategoryGrid categories={categories} />
        </div>
      </section>
    </div>
  );
}