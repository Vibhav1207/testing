import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Clock, HardDrive } from "lucide-react";

const features = [
  {
    icon: <Shield className="h-12 w-12" />,
    title: "Secure File Encryption",
    description: "Military-grade encryption keeps your files safe and private"
  },
  {
    icon: <Clock className="h-12 w-12" />,
    title: "Timed Unlocking System",
    description: "Set custom unlock times for your sensitive data"
  },
  {
    icon: <HardDrive className="h-12 w-12" />,
    title: "Flexible Storage Plans",
    description: "Choose the perfect plan for your storage needs"
  }
];

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
        
        <div className="max-w-7xl mx-auto py-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-white">
              Welcome to EternaVaultX
            </h1>
            <motion.h2 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-2xl md:text-3xl text-white/80 mb-4"
            >
              The Future of Secure Storage
            </motion.h2>
          </motion.div>

          {/* Animated Description */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <p className="text-lg text-white/80 mb-6">
              EternaVaultX is an advanced encrypted cloud storage solution designed for maximum security and privacy.
            </p>
            <p className="text-lg text-white/80 mb-6">
              Store and lock your files with timed unlock features, ensuring full control over your data.
            </p>
            <p className="text-lg text-white/80">
              Our cutting-edge encryption technology protects your files from unauthorized access.
            </p>
          </motion.div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 + 1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="bg-black/30 border-blue-500/30 backdrop-blur-lg hover:border-blue-500/60 transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: index * 0.2 + 1.2 }}
                      className="text-blue-500 mb-4 flex justify-center"
                    >
                      {feature.icon}
                    </motion.div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-white/60">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Logo Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="inline-block p-8 rounded-full bg-blue-500/10 border border-blue-500/30">
              <span className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-white">
                EternaVaultX
              </span>
            </div>
          </motion.div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
