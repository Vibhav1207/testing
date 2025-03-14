import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="border-t border-blue-500/30 bg-black/30 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">EternaVaultX</h3>
            <p className="text-white/60">
              Securing your digital future with next-generation cloud storage.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about">
                  <a className="text-white/60 hover:text-blue-400 transition">About</a>
                </Link>
              </li>
              <li>
                <Link href="/careers">
                  <a className="text-white/60 hover:text-blue-400 transition">Careers</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="text-white/60 hover:text-blue-400 transition">Contact</a>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy">
                  <a className="text-white/60 hover:text-blue-400 transition">Privacy Policy</a>
                </Link>
              </li>
              <li>
                <Link href="/terms">
                  <a className="text-white/60 hover:text-blue-400 transition">Terms of Service</a>
                </Link>
              </li>
              <li>
                <Link href="/cookies">
                  <a className="text-white/60 hover:text-blue-400 transition">Cookie Policy</a>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/help">
                  <a className="text-white/60 hover:text-blue-400 transition">Help Center</a>
                </Link>
              </li>
              <li>
                <Link href="/status">
                  <a className="text-white/60 hover:text-blue-400 transition">System Status</a>
                </Link>
              </li>
              <li>
                <Link href="/docs">
                  <a className="text-white/60 hover:text-blue-400 transition">Documentation</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-blue-500/30 text-center text-white/60">
          <p>&copy; {new Date().getFullYear()} EternaVaultX. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
