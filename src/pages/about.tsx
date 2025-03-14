import React from 'react';
import { motion } from "framer-motion";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <div className="relative pt-20 px-4">
        {/* Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#080808_1px,transparent_1px),linear-gradient(to_bottom,#080808_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        
        {/* Neon Side Effects */}
        <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-transparent via-blue-500 to-transparent opacity-50" />
        <div className="absolute right-0 top-0 w-1 h-full bg-gradient-to-b from-transparent via-blue-500 to-transparent opacity-50" />
        
        <div className="max-w-4xl mx-auto py-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-white">
              About EternaVaultX
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Your Gateway to Future-Proof File Security
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="prose prose-invert mx-auto px-4"
          >
            <p className="text-lg text-white/70 leading-relaxed mb-8">
              EternaVaultX represents the pinnacle of secure file storage technology. 
              Built with cutting-edge encryption and innovative time-lock mechanisms, 
              we provide a platform where your files aren't just stored – they're safeguarded 
              for the future.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="bg-black/30 p-6 rounded-xl border border-blue-500/30 backdrop-blur-lg">
                <h3 className="text-xl font-semibold mb-4 text-blue-400">Advanced Security</h3>
                <p className="text-white/70">
                  State-of-the-art encryption ensuring your files remain private and secure, 
                  with customizable access controls and time-based unlocking mechanisms.
                </p>
              </div>

              <div className="bg-black/30 p-6 rounded-xl border border-blue-500/30 backdrop-blur-lg">
                <h3 className="text-xl font-semibold mb-4 text-blue-400">Time-Lock Technology</h3>
                <p className="text-white/70">
                  Revolutionary time-lock feature allowing you to secure files until a 
                  specific future date, perfect for time-sensitive documents and digital assets.
                </p>
              </div>

              <div className="bg-black/30 p-6 rounded-xl border border-blue-500/30 backdrop-blur-lg">
                <h3 className="text-xl font-semibold mb-4 text-blue-400">Cloud Integration</h3>
                <p className="text-white/70">
                  Seamless cloud storage integration with automatic backups and 
                  synchronization across all your devices.
                </p>
              </div>

              <div className="bg-black/30 p-6 rounded-xl border border-blue-500/30 backdrop-blur-lg">
                <h3 className="text-xl font-semibold mb-4 text-blue-400">24/7 Support</h3>
                <p className="text-white/70">
                  Round-the-clock customer support and monitoring ensuring your files 
                  are always accessible when you need them.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
