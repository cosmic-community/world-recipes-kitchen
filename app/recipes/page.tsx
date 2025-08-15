import { getRecipes, getCategories } from '@/lib/cosmic';
import RecipeCard from '@/components/RecipeCard';
import CategoryFilter from '@/components/CategoryFilter';

export const metadata = {
  title: 'All Recipes - World Recipes Kitchen',
  description: 'Browse all our recipes from around the world',
};

export default async function RecipesPage() {
  const [recipes, categories] = await Promise.all([
    getRecipes(),
    getCategories()
  ]);

  return (
    <div className="container py-8">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
          All Recipes
        </h1>
        <p className="text-lg text-secondary-600">
          Discover authentic recipes from around the world
        </p>
      </div>

      <CategoryFilter categories={categories} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>

      {recipes.length === 0 && (
        <div className="text-center py-12">
          <p className="text-secondary-600 text-lg">
            No recipes found. Please try again later.
          </p>
        </div>
      )}
    </div>
  );
}