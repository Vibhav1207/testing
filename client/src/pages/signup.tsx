import { useState } from "react";
import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Navbar } from "@/components/navbar";

export default function Signup() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Error",
        description: "Passwords do not match",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Success",
      description: "Account created successfully! Please login.",
    });
    setLocation("/login");
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <div className="flex items-center justify-center min-h-screen px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md"
        >
          <div className="p-8 rounded-xl bg-black/30 border border-blue-500/30 backdrop-blur-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Create Account</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="text-sm font-medium mb-2 block">
                  Full Name
                </label>
                <Input
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="bg-black/50 border-blue-500/30 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">
                  Email
                </label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-black/50 border-blue-500/30 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">
                  Username
                </label>
                <Input
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="bg-black/50 border-blue-500/30 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">
                  Password
                </label>
                <Input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="bg-black/50 border-blue-500/30 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">
                  Confirm Password
                </label>
                <Input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="bg-black/50 border-blue-500/30 focus:border-blue-500"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 shadow-[0_0_20px_rgba(59,130,246,0.5)]"
              >
                Sign Up
              </Button>
            </form>

            <p className="text-center mt-6 text-white/60">
              Already have an account?{" "}
              <a
                href="/login"
                className="text-blue-400 hover:text-blue-300"
              >
                Login
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
