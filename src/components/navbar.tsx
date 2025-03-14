import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";

export const Navbar = () => {
  const [location] = useLocation();

  const links = [
    { href: "/", label: "Home" },
    { href: "/dashboard", label: "Dashboard" },
    { href: "/files", label: "Files" },
    { href: "/pricing", label: "Pricing" },
    { href: "/about", label: "About" }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-blue-500/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/">
              <a className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-white">
                EternaVaultX
              </a>
            </Link>
          </div>
          
          <div className="flex space-x-4">
            {links.map((link) => (
              <Link key={link.href} href={link.href}>
                <a className="relative px-3 py-2">
                  {location === link.href && (
                    <motion.div
                      layoutId="navbar-active"
                      className="absolute inset-0 bg-blue-500/20 rounded-lg"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className={`relative ${location === link.href ? 'text-blue-400' : 'text-white/60 hover:text-white'}`}>
                    {link.label}
                  </span>
                </a>
              </Link>
            ))}
          </div>
          
          <div className="flex items-center space-x-4">
            <Link href="/login">
              <a className="text-white/60 hover:text-white">Login</a>
            </Link>
            <Link href="/signup">
              <a className="px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                Sign Up
              </a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
