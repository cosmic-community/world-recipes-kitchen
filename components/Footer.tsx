export default function Footer() {
  return (
    <footer className="bg-secondary-900 text-white py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">🍳 World Recipes</h3>
            <p className="text-secondary-300">
              Discover authentic recipes from around the world with professional chef guides and detailed cooking instructions.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-secondary-300">
              <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="/recipes" className="hover:text-white transition-colors">All Recipes</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">About</h4>
            <p className="text-secondary-300 text-sm">
              Built with Next.js and powered by Cosmic CMS for the best recipe browsing experience.
            </p>
          </div>
        </div>
        
        <div className="border-t border-secondary-700 mt-8 pt-8 text-center text-secondary-400">
          <p>&copy; 2024 World Recipes Kitchen. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}