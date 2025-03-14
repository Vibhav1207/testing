import { useState } from "react";
import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function Signup() {
  const [, setLocation] = useLocation();
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    // Mock signup for now
    console.log("Signing up with:", formData);
    setLocation("/login");
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <div className="relative pt-20 px-4">
        {/* Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#080808_1px,transparent_1px),linear-gradient(to_bottom,#080808_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        
        {/* Neon Side Effects */}
        <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-transparent via-blue-500 to-transparent opacity-50" />
        <div className="absolute right-0 top-0 w-1 h-full bg-gradient-to-b from-transparent via-blue-500 to-transparent opacity-50" />
        
        <div className="max-w-md mx-auto py-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-black/30 p-8 rounded-xl border border-blue-500/30 backdrop-blur-lg"
          >
            <h2 className="text-2xl font-bold mb-6 text-center">Create Your Account</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-black/50 border border-blue-500/30 rounded-lg focus:outline-none focus:border-blue-500 text-white"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Username</label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-black/50 border border-blue-500/30 rounded-lg focus:outline-none focus:border-blue-500 text-white"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-black/50 border border-blue-500/30 rounded-lg focus:outline-none focus:border-blue-500 text-white"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-black/50 border border-blue-500/30 rounded-lg focus:outline-none focus:border-blue-500 text-white"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-2 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:shadow-[0_0_30px_rgba(59,130,246,0.8)] transition-all"
              >
                Create Account
              </button>
            </form>

            <p className="mt-4 text-center text-white/60">
              Already have an account?{" "}
              <a href="/login" className="text-blue-400 hover:text-blue-300">
                Login
              </a>
            </p>
          </motion.div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
