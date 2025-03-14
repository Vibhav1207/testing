import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <div className="relative pt-20 px-4">
        {/* Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#080808_1px,transparent_1px),linear-gradient(to_bottom,#080808_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        
        {/* Neon Side Effects */}
        <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-transparent via-blue-500 to-transparent opacity-50" />
        <div className="absolute right-0 top-0 w-1 h-full bg-gradient-to-b from-transparent via-blue-500 to-transparent opacity-50" />
        
        <div className="max-w-7xl mx-auto py-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-white">
              Welcome to EternaVaultX
            </h1>
            <p className="text-xl text-white/80">
              The Future of Secure File Storage
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <p className="text-lg text-white/60">
              Store, encrypt, and manage your files with cutting-edge security.
              Set custom unlock times and access your data when you need it.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex justify-center space-x-4"
          >
            <a href="/signup" className="px-8 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:shadow-[0_0_30px_rgba(59,130,246,0.8)] transition-all">
              Get Started
            </a>
            <a href="/about" className="px-8 py-3 rounded-lg border border-blue-500/50 hover:border-blue-500 text-white font-semibold transition-all">
              Learn More
            </a>
          </motion.div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
