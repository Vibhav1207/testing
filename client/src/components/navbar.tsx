import { Link } from "wouter";
import { useAuth } from "@/lib/auth";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { motion } from "framer-motion";

export function Navbar() {
  const { isAuthenticated, username, logout } = useAuth();

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full z-50 px-4 py-2"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between rounded-full bg-black/30 backdrop-blur-lg border border-blue-500/30 p-4">
        <Link href="/">
          <a className="text-2xl font-bold text-white flex items-center">
            <span className="text-blue-500">Eterna</span>VaultX
          </a>
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          <Link href="/">
            <a className="text-white hover:text-blue-400 transition">Home</a>
          </Link>
          <Link href="/dashboard">
            <a className="text-white hover:text-blue-400 transition">Dashboard</a>
          </Link>
          <Link href="/files">
            <a className="text-white hover:text-blue-400 transition">My Files</a>
          </Link>
          <Link href="/about">
            <a className="text-white hover:text-blue-400 transition">About</a>
          </Link>
          <Link href="/pricing">
            <a className="text-white hover:text-blue-400 transition">Pricing</a>
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          {isAuthenticated ? (
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar className="border-2 border-blue-500 cursor-pointer">
                  <AvatarFallback>{username?.charAt(0).toUpperCase()}</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem onClick={logout}>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex space-x-2">
              <Link href="/login">
                <Button variant="ghost" className="text-white hover:text-blue-400">
                  Login
                </Button>
              </Link>
              <Link href="/signup">
                <Button className="bg-blue-500 hover:bg-blue-600">
                  Sign Up
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </motion.nav>
  );
}
