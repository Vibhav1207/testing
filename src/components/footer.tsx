export const Footer = () => {
    return (
      <footer className="bg-black/80 backdrop-blur-lg border-t border-blue-500/30 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">EternaVaultX</h3>
              <p className="text-white/60">
                The future of secure storage.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-white/60">
                <li><a href="/pricing" className="hover:text-white">Pricing</a></li>
                <li><a href="/about" className="hover:text-white">About</a></li>
                <li><a href="/files" className="hover:text-white">Files</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-white/60">
                <li><a href="/help" className="hover:text-white">Help Center</a></li>
                <li><a href="/terms" className="hover:text-white">Terms of Service</a></li>
                <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-white/60">
                <li><a href="mailto:support@eternavaultx.com" className="hover:text-white">Email Us</a></li>
                <li><a href="/twitter" className="hover:text-white">Twitter</a></li>
                <li><a href="/discord" className="hover:text-white">Discord</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-blue-500/30 text-center text-white/60">
            <p>&copy; {new Date().getFullYear()} EternaVaultX. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  };
  