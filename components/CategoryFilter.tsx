'use client';

import { useState } from 'react';
import type { Category } from '@/types';

interface CategoryFilterProps {
  categories: Category[];
}

export default function CategoryFilter({ categories }: CategoryFilterProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  if (!categories || categories.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-wrap gap-2 mb-8">
      <button
        onClick={() => setSelectedCategory('all')}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
          selectedCategory === 'all'
            ? 'bg-primary-600 text-white'
            : 'bg-secondary-100 text-secondary-700 hover:bg-secondary-200'
        }`}
      >
        All Recipes
      </button>
      
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => setSelectedCategory(category.id)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            selectedCategory === category.id
              ? 'bg-primary-600 text-white'
              : 'bg-secondary-100 text-secondary-700 hover:bg-secondary-200'
          }`}
        >
          {category.title}
        </button>
      ))}
    </div>
  );
}