// Base Cosmic object interface
export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
  status?: string;
  published_at?: string;
}

// Recipe interface
export interface Recipe extends CosmicObject {
  type: 'recipes';
  metadata: {
    recipe_name?: string;
    description?: string;
    ingredients?: string;
    instructions?: string;
    prep_time?: number;
    cook_time?: number;
    servings?: number;
    difficulty?: {
      key: DifficultyLevel;
      value: string;
    };
    featured_image?: {
      url: string;
      imgix_url: string;
    };
    author?: Author;
    categories?: Category[];
  };
}

// Author interface
export interface Author extends CosmicObject {
  type: 'authors';
  metadata: {
    name?: string;
    bio?: string;
    specialties?: string;
    profile_image?: {
      url: string;
      imgix_url: string;
    };
  };
}

// Category interface
export interface Category extends CosmicObject {
  type: 'categories';
  metadata: {
    name?: string;
    description?: string;
    category_image?: {
      url: string;
      imgix_url: string;
    };
  };
}

// Type literals for select-dropdown values
export type DifficultyLevel = 'easy' | 'medium' | 'hard';

// API response types
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit: number;
  skip?: number;
}

// Type guards for runtime validation
export function isRecipe(obj: CosmicObject): obj is Recipe {
  return obj.type === 'recipes';
}

export function isAuthor(obj: CosmicObject): obj is Author {
  return obj.type === 'authors';
}

export function isCategory(obj: CosmicObject): obj is Category {
  return obj.type === 'categories';
}

// Utility types for common patterns
export type RecipeCardData = Pick<Recipe, 'id' | 'title' | 'slug' | 'metadata'>;
export type CategoryCardData = Pick<Category, 'id' | 'title' | 'slug' | 'metadata'>;
export type AuthorCardData = Pick<Author, 'id' | 'title' | 'slug' | 'metadata'>;