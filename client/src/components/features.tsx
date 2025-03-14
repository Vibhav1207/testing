import { motion } from "framer-motion";
import { Shield, Cloud, Zap, Lock } from "lucide-react";

const features = [
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Enterprise Security",
    description: "Military-grade encryption for all your sensitive data"
  },
  {
    icon: <Cloud className="h-8 w-8" />,
    title: "Cloud Storage",
    description: "Unlimited storage with instant access anywhere"
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: "Lightning Fast",
    description: "Optimized for speed with global CDN support"
  },
  {
    icon: <Lock className="h-8 w-8" />,
    title: "Access Control",
    description: "Granular permissions and sharing controls"
  }
];

export function Features() {
  return (
    <section id="features" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Future-Proof Features
          </h2>
          <p className="text-white/60">
            Experience the next generation of secure cloud storage
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-xl bg-black/30 border border-blue-500/30 backdrop-blur-lg hover:border-blue-500/60 transition-all duration-300"
            >
              <div className="text-blue-500 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-white/60">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
