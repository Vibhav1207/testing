import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    storage: "5GB",
    features: [
      "Basic File Encryption",
      "Standard Upload Speed",
      "Email Support",
      "1 Active Device"
    ]
  },
  {
    name: "Pro",
    price: "$9.99",
    storage: "50GB",
    features: [
      "Advanced Encryption",
      "Priority Upload Speed",
      "24/7 Support",
      "5 Active Devices",
      "File Version History"
    ]
  },
  {
    name: "Enterprise",
    price: "$29.99",
    storage: "Unlimited",
    features: [
      "Military-grade Encryption",
      "Maximum Upload Speed",
      "Dedicated Support",
      "Unlimited Devices",
      "Advanced Analytics",
      "Custom Integration"
    ]
  }
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <div className="relative pt-20 px-4">
        {/* Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#080808_1px,transparent_1px),linear-gradient(to_bottom,#080808_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        
        {/* Neon Side Effects - Orange theme */}
        <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-transparent via-orange-500 to-transparent opacity-50" />
        <div className="absolute right-0 top-0 w-1 h-full bg-gradient-to-b from-transparent via-orange-500 to-transparent opacity-50" />
        
        <div className="max-w-7xl mx-auto py-16 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-white">
              Choose Your Plan
            </h1>
            <p className="text-xl text-white/80">
              Select the perfect storage solution for your needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
                className="relative p-8 rounded-xl bg-black/30 border border-orange-500/30 backdrop-blur-lg hover:border-orange-500/60 transition-all duration-300 overflow-hidden group"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/5 to-orange-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <h3 className="text-2xl font-bold text-white mb-2">
                  {plan.name}
                </h3>
                <div className="text-4xl font-bold text-orange-500 mb-2">
                  {plan.price}
                  <span className="text-lg">/mo</span>
                </div>
                <p className="text-xl text-white/80 mb-6">{plan.storage} Storage</p>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + featureIndex * 0.1 }}
                      className="flex items-center text-white/80"
                    >
                      <Check className="h-5 w-5 text-orange-500 mr-2" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                <Button 
                  className="w-full bg-orange-500 hover:bg-orange-600 shadow-[0_0_20px_rgba(249,115,22,0.5)] hover:shadow-[0_0_30px_rgba(249,115,22,0.8)] transition-all duration-300"
                >
                  Get Started
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
