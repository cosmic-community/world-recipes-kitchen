import Link from 'next/link';
import type { HomePage } from '@/types';

interface HeroSectionProps {
  homeData?: HomePage | null;
}

export default function HeroSection({ homeData }: HeroSectionProps) {
  const heroTitle = homeData?.metadata?.hero_title || "Discover World Flavors";
  const heroSubtitle = homeData?.metadata?.hero_subtitle || "Authentic recipes from around the globe, crafted by professional chefs and shared with love";
  const heroImage = homeData?.metadata?.hero_image;

  return (
    <section className="relative bg-black text-white py-20 overflow-hidden">
      {/* Background Image */}
      {heroImage && (
        <div className="absolute inset-0 z-0">
          <img
            src={`${heroImage.imgix_url}?w=2000&h=1200&fit=crop&auto=format,compress`}
            alt="Hero background"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
      )}
      
      {/* Content */}
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
            {heroTitle}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 drop-shadow-md">
            {heroSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/recipes"
              className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Browse Recipes
            </Link>
            <Link
              href="#featured"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition-colors backdrop-blur-sm"
            >
              See Featured
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}