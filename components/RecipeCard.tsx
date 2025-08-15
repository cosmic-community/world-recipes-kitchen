import Link from 'next/link';
import type { Recipe } from '@/types';

interface RecipeCardProps {
  recipe: Recipe;
}

export default function RecipeCard({ recipe }: RecipeCardProps) {
  const featuredImage = recipe.metadata?.featured_image;
  const author = recipe.metadata?.author;
  const difficulty = recipe.metadata?.difficulty;
  const prepTime = recipe.metadata?.prep_time;
  const cookTime = recipe.metadata?.cook_time;

  return (
    <Link href={`/recipes/${recipe.slug}`} className="group">
      <article className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
        {featuredImage && (
          <div className="aspect-w-16 aspect-h-9 mb-4">
            <img
              src={`${featuredImage.imgix_url}?w=600&h=400&fit=crop&auto=format,compress`}
              alt={recipe.title}
              width={300}
              height={200}
              className="w-full h-48 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
        
        <div className="p-6">
          <h3 className="text-xl font-semibold text-secondary-900 mb-2 group-hover:text-primary-600 transition-colors">
            {recipe.title}
          </h3>
          
          {recipe.metadata?.description && (
            <p className="text-secondary-600 mb-4 line-clamp-2">
              {recipe.metadata.description}
            </p>
          )}

          <div className="flex items-center justify-between text-sm text-secondary-500">
            <div className="flex items-center space-x-4">
              {prepTime && (
                <span>Prep: {prepTime}min</span>
              )}
              {cookTime && (
                <span>Cook: {cookTime}min</span>
              )}
            </div>
            
            {difficulty && (
              <span className={`px-2 py-1 rounded text-xs font-medium ${
                difficulty.key === 'easy' 
                  ? 'bg-green-100 text-green-800'
                  : difficulty.key === 'medium'
                  ? 'bg-yellow-100 text-yellow-800' 
                  : 'bg-red-100 text-red-800'
              }`}>
                {difficulty.value}
              </span>
            )}
          </div>

          {author && (
            <div className="flex items-center mt-4 pt-4 border-t border-secondary-100">
              {author.metadata?.profile_image && (
                <img
                  src={`${author.metadata.profile_image.imgix_url}?w=64&h=64&fit=crop&auto=format,compress`}
                  alt={author.title}
                  width={32}
                  height={32}
                  className="w-8 h-8 rounded-full mr-2"
                />
              )}
              <span className="text-sm text-secondary-600">
                by {author.title}
              </span>
            </div>
          )}
        </div>
      </article>
    </Link>
  );
}