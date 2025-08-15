import Link from 'next/link';
import type { Category } from '@/types';

interface CategoryGridProps {
  categories: Category[];
}

export default function CategoryGrid({ categories }: CategoryGridProps) {
  if (!categories || categories.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-secondary-600">No categories available at this time.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {categories.map((category) => {
        const categoryImage = category.metadata?.category_image;
        
        return (
          <Link
            key={category.id}
            href={`/categories/${category.slug}`}
            className="group"
          >
            <article className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
              {categoryImage && (
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={`${categoryImage.imgix_url}?w=400&h=300&fit=crop&auto=format,compress`}
                    alt={category.title}
                    width={200}
                    height={150}
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-secondary-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {category.title}
                </h3>
                
                {category.metadata?.description && (
                  <p className="text-secondary-600 text-sm line-clamp-3">
                    {category.metadata.description}
                  </p>
                )}
              </div>
            </article>
          </Link>
        );
      })}
    </div>
  );
}