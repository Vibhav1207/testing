import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Basic",
    price: "Free",
    features: ["5GB Storage", "Basic Security", "Email Support", "1 User"]
  },
  {
    name: "Pro",
    price: "$9.99",
    features: ["50GB Storage", "Advanced Security", "24/7 Support", "5 Users"]
  },
  {
    name: "Enterprise",
    price: "$29.99",
    features: ["Unlimited Storage", "Military-grade Security", "Priority Support", "Unlimited Users"]
  }
];

export function Pricing() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Choose Your Plan
          </h2>
          <p className="text-white/60">
            Select the perfect plan for your storage needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="p-8 rounded-xl bg-black/30 border border-blue-500/30 backdrop-blur-lg hover:border-blue-500/60 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-white mb-2">
                {plan.name}
              </h3>
              <div className="text-4xl font-bold text-blue-500 mb-6">
                {plan.price}
                {plan.price !== "Free" && <span className="text-lg">/mo</span>}
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-white">
                    <Check className="h-5 w-5 text-blue-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-blue-500 hover:bg-blue-600 shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                Get Started
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
