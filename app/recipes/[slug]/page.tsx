// app/recipes/[slug]/page.tsx
import { getRecipe } from '@/lib/cosmic';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';

interface RecipePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: RecipePageProps): Promise<Metadata> {
  const { slug } = await params;
  const recipe = await getRecipe(slug);

  if (!recipe) {
    return {
      title: 'Recipe Not Found',
    };
  }

  return {
    title: `${recipe.title} - World Recipes Kitchen`,
    description: recipe.metadata?.description || `Learn how to make ${recipe.title}`,
  };
}

export default async function RecipePage({ params }: RecipePageProps) {
  const { slug } = await params;
  const recipe = await getRecipe(slug);

  if (!recipe) {
    notFound();
  }

  const featuredImage = recipe.metadata?.featured_image;
  const author = recipe.metadata?.author;
  const categories = recipe.metadata?.categories || [];
  const difficulty = recipe.metadata?.difficulty;

  return (
    <div className="container py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            {recipe.title}
          </h1>
          
          {recipe.metadata?.description && (
            <p className="text-lg text-secondary-600 mb-6">
              {recipe.metadata.description}
            </p>
          )}

          {/* Recipe Meta */}
          <div className="flex flex-wrap items-center gap-6 mb-6">
            {recipe.metadata?.prep_time && (
              <div className="flex items-center text-secondary-600">
                <span className="font-medium">Prep:</span>
                <span className="ml-1">{recipe.metadata.prep_time} min</span>
              </div>
            )}
            
            {recipe.metadata?.cook_time && (
              <div className="flex items-center text-secondary-600">
                <span className="font-medium">Cook:</span>
                <span className="ml-1">{recipe.metadata.cook_time} min</span>
              </div>
            )}
            
            {recipe.metadata?.servings && (
              <div className="flex items-center text-secondary-600">
                <span className="font-medium">Serves:</span>
                <span className="ml-1">{recipe.metadata.servings}</span>
              </div>
            )}
            
            {difficulty && (
              <div className="flex items-center">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  difficulty.key === 'easy' 
                    ? 'bg-green-100 text-green-800'
                    : difficulty.key === 'medium'
                    ? 'bg-yellow-100 text-yellow-800' 
                    : 'bg-red-100 text-red-800'
                }`}>
                  {difficulty.value}
                </span>
              </div>
            )}
          </div>

          {/* Categories */}
          {categories.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {categories.map((category) => (
                <Link
                  key={category.id}
                  href={`/categories/${category.slug}`}
                  className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm hover:bg-primary-200 transition-colors"
                >
                  {category.title}
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Featured Image */}
        {featuredImage && (
          <div className="mb-8">
            <img
              src={`${featuredImage.imgix_url}?w=800&h=500&fit=crop&auto=format,compress`}
              alt={recipe.title}
              width={800}
              height={500}
              className="w-full h-64 md:h-96 object-cover rounded-lg"
            />
          </div>
        )}

        {/* Recipe Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Ingredients */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold text-secondary-900 mb-4">
              Ingredients
            </h2>
            {recipe.metadata?.ingredients && (
              <div 
                className="prose prose-sm"
                dangerouslySetInnerHTML={{ __html: recipe.metadata.ingredients }}
              />
            )}
          </div>

          {/* Instructions */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-secondary-900 mb-4">
              Instructions
            </h2>
            {recipe.metadata?.instructions && (
              <div 
                className="prose prose-sm"
                dangerouslySetInnerHTML={{ __html: recipe.metadata.instructions }}
              />
            )}
          </div>
        </div>

        {/* Author Info */}
        {author && (
          <div className="mt-12 p-6 bg-secondary-50 rounded-lg">
            <div className="flex items-start space-x-4">
              {author.metadata?.profile_image && (
                <img
                  src={`${author.metadata.profile_image.imgix_url}?w=80&h=80&fit=crop&auto=format,compress`}
                  alt={author.title}
                  width={80}
                  height={80}
                  className="w-16 h-16 rounded-full object-cover"
                />
              )}
              <div>
                <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                  {author.title}
                </h3>
                {author.metadata?.bio && (
                  <div 
                    className="prose prose-sm text-secondary-600"
                    dangerouslySetInnerHTML={{ __html: author.metadata.bio }}
                  />
                )}
                {author.metadata?.specialties && (
                  <p className="text-sm text-secondary-600 mt-2">
                    <span className="font-medium">Specialties:</span> {author.metadata.specialties}
                  </p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}