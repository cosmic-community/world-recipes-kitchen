import { getRecipes, getCategories, getHomePage } from '@/lib/cosmic';
import HeroSection from '@/components/HeroSection';
import FeaturedRecipes from '@/components/FeaturedRecipes';
import CategoryGrid from '@/components/CategoryGrid';

export default async function HomePage() {
  const [homeData, recipes, categories] = await Promise.all([
    getHomePage(),
    getRecipes(),
    getCategories()
  ]);

  const featuredRecipes = recipes.slice(0, 3);

  const featuredTitle = homeData?.metadata?.featured_section_title || "Featured Recipes";
  const featuredDescription = homeData?.metadata?.featured_section_description || "Discover our most popular dishes from around the world";
  
  const categoriesTitle = homeData?.metadata?.categories_section_title || "Explore by Cuisine";
  const categoriesDescription = homeData?.metadata?.categories_section_description || "Browse recipes by your favorite cuisine types";

  return (
    <div>
      <HeroSection homeData={homeData} />
      
      <section id="featured" className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              {featuredTitle}
            </h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              {featuredDescription}
            </p>
          </div>
          <FeaturedRecipes recipes={featuredRecipes} />
        </div>
      </section>

      <section className="py-16 bg-secondary-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              {categoriesTitle}
            </h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              {categoriesDescription}
            </p>
          </div>
          <CategoryGrid categories={categories} />
        </div>
      </section>
    </div>
  );
}