# World Recipes Kitchen

![App Preview](https://imgix.cosmicjs.com/98d2d9c0-79fc-11f0-a051-23c10f41277a-photo-1551504734-5ee1c4a1479b-1755278624955.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A modern recipe website showcasing world cuisine with professional chef profiles and organized categories. Built with Next.js 15 and powered by Cosmic CMS.

## Features

- 🍳 Browse recipes by cuisine categories (Mexican, Italian, Asian, Desserts)
- 👨‍🍳 Professional chef profiles with specialties and bios
- ⏱️ Detailed recipe information including prep time, cook time, and difficulty
- 📱 Fully responsive design optimized for all devices
- 🔍 Search and filter recipes by category
- 🖼️ Beautiful food photography with optimized images
- 🌍 Global cuisine from authentic traditional recipes

## Clone this Bucket and Code Repository

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Bucket and Code Repository](https://img.shields.io/badge/Clone%20this%20Bucket-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmic-staging.com/projects/new?clone_bucket=689f6c6ff45d4ab57d5fbc4a&clone_repository=689f6e73f45d4ab57d5fbc6d)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create a website for world food including recipes, authors, and categories"

### Code Generation Prompt

> Build a Next.js website that uses my existing objects in this bucket

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Cosmic CMS** - Headless content management
- **Vercel** - Deployment and hosting

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- A Cosmic account with the World Recipes bucket

### Installation

1. Clone this repository
2. Install dependencies:
   ```bash
   bun install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env.local
   ```
   
   Add your Cosmic credentials:
   ```
   COSMIC_BUCKET_SLUG=your-bucket-slug
   COSMIC_READ_KEY=your-read-key
   COSMIC_WRITE_KEY=your-write-key
   ```

4. Run the development server:
   ```bash
   bun dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Cosmic SDK Examples

### Fetching Recipes with Authors and Categories

```typescript
import { cosmic } from '@/lib/cosmic'

// Get all recipes with connected author and category data
const recipes = await cosmic.objects
  .find({ type: 'recipes' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)

// Filter recipes by category
const mexicanRecipes = await cosmic.objects
  .find({ 
    type: 'recipes',
    'metadata.categories': 'category-id-here'
  })
  .depth(1)
```

### Fetching Categories and Authors

```typescript
// Get all categories
const categories = await cosmic.objects
  .find({ type: 'categories' })
  .props(['id', 'title', 'slug', 'metadata'])

// Get author profile
const author = await cosmic.objects
  .findOne({ 
    type: 'authors',
    slug: 'chef-alessandro'
  })
  .props(['id', 'title', 'slug', 'metadata'])
```

## Cosmic CMS Integration

This application integrates with Cosmic using the following object types:

### Recipes
- Recipe name, description, and featured image
- Detailed ingredients and cooking instructions
- Prep time, cook time, servings, and difficulty level
- Connected to authors and categories

### Authors
- Chef profiles with names and professional photos
- Biographical information and specialties
- Connected to their published recipes

### Categories
- Cuisine categories (Mexican, Italian, Asian, Desserts)
- Category descriptions and representative images
- Used to organize and filter recipes

## Deployment Options

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/git)

1. Push to GitHub
2. Connect to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Deploy to Netlify

1. Connect your GitHub repository
2. Set build command: `bun run build`
3. Set publish directory: `out` or `.next`
4. Add environment variables
5. Deploy

Remember to set your environment variables (`COSMIC_BUCKET_SLUG`, `COSMIC_READ_KEY`, `COSMIC_WRITE_KEY`) in your deployment platform.

<!-- README_END -->