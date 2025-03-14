import React from 'react';
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";

const PricingPage = () => {
  const plans = [
    { 
      name: "Free",
      price: "$0",
      storage: "5GB",
      features: [
        "Basic encryption",
        "24-hour file locking",
        "Email support"
      ]
    },
    {
      name: "Pro",
      price: "$9.99",
      storage: "50GB",
      features: [
        "Advanced encryption",
        "Custom file locking",
        "Priority support",
        "File versioning"
      ]
    },
    {
      name: "Enterprise",
      price: "$29.99",
      storage: "Unlimited",
      features: [
        "Military-grade encryption",
        "Team collaboration",
        "24/7 support",
        "Custom solutions"
      ]
    }
  ];

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#000", color: "#fff" }}>
      <Navbar />
      <main style={{ padding: "2rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
          <h1 style={{ fontSize: "2.5rem", marginBottom: "3rem" }}>Choose Your Plan</h1>
          
          <div style={{ 
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "2rem"
          }}>
            {plans.map((plan, index) => (
              <div key={index} style={{
                padding: "2rem",
                border: "1px solid rgba(59, 130, 246, 0.3)",
                borderRadius: "0.5rem",
                backgroundColor: "rgba(0, 0, 0, 0.3)",
                transition: "transform 0.2s ease, border-color 0.2s ease",
                cursor: "pointer"
              }}>
                <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>{plan.name}</h3>
                <p style={{ fontSize: "2rem", marginBottom: "1rem" }}>{plan.price}<span style={{ fontSize: "1rem" }}>/month</span></p>
                <p style={{ color: "rgba(59, 130, 246, 1)", marginBottom: "2rem" }}>{plan.storage} Storage</p>
                <ul style={{ listStyle: "none", padding: 0 }}>
                  {plan.features.map((feature, idx) => (
                    <li key={idx} style={{ margin: "0.5rem 0", color: "rgba(255, 255, 255, 0.8)" }}>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button style={{
                  marginTop: "2rem",
                  padding: "0.75rem 2rem",
                  backgroundColor: "rgb(59, 130, 246)",
                  border: "none",
                  borderRadius: "0.25rem",
                  color: "white",
                  cursor: "pointer"
                }}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PricingPage;
