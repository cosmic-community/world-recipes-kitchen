import RecipeCard from './RecipeCard';
import type { Recipe } from '@/types';

interface FeaturedRecipesProps {
  recipes: Recipe[];
}

export default function FeaturedRecipes({ recipes }: FeaturedRecipesProps) {
  if (!recipes || recipes.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-secondary-600">No featured recipes available at this time.</p>
      </div>
    );
  }

  return (
    <div id="featured" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
}