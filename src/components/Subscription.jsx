import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';

const SubscriptionContainer = styled.section`
  padding: 4rem 2rem;
  position: relative;
  z-index: 3;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  background: linear-gradient(45deg, #fff, #0066ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 20px rgba(0, 100, 255, 0.3);
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const PlanCard = styled(motion.div)`
  background: rgba(0, 0, 0, 0.6);
  border: 1px solid rgba(0, 100, 255, 0.3);
  border-radius: 15px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at center, rgba(0, 100, 255, 0.1), transparent);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-5px);
    border-color: rgba(0, 100, 255, 0.8);
    box-shadow: 0 0 30px rgba(0, 100, 255, 0.2);

    &::before {
      opacity: 1;
    }
  }
`;

const PlanTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #fff, #0066ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Price = styled.div`
  font-size: 3rem;
  font-weight: bold;
  margin: 1rem 0;
  color: white;
  text-shadow: 0 0 10px rgba(0, 100, 255, 0.5);

  span {
    font-size: 1rem;
    opacity: 0.8;
  }
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 2rem 0;
  text-align: left;
`;

const Feature = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
  color: rgba(255, 255, 255, 0.8);

  svg {
    color: #0066ff;
    filter: drop-shadow(0 0 5px rgba(0, 100, 255, 0.5));
  }
`;

const Button = styled(motion.button)`
  background: linear-gradient(45deg, #0066ff, #00ffff);
  border: none;
  border-radius: 25px;
  padding: 1rem 2rem;
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 0 20px rgba(0, 100, 255, 0.3);

  &:hover {
    box-shadow: 0 0 30px rgba(0, 100, 255, 0.5);
  }
`;

const Subscription = () => {
  const plans = [
    {
      title: "Basic",
      price: "9.99",
      features: [
        "50GB Storage",
        "Basic Encryption",
        "2 Users",
        "Email Support"
      ]
    },
    {
      title: "Pro",
      price: "19.99",
      features: [
        "500GB Storage",
        "Advanced Encryption",
        "5 Users",
        "24/7 Support",
        "File Version History"
      ]
    },
    {
      title: "Enterprise",
      price: "49.99",
      features: [
        "Unlimited Storage",
        "Military-grade Encryption",
        "Unlimited Users",
        "Priority Support",
        "Advanced Analytics",
        "Custom Integration"
      ]
    }
  ];

  return (
    <SubscriptionContainer>
      <Title>Choose Your Plan</Title>
      <Grid>
        {plans.map((plan, index) => (
          <PlanCard
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <PlanTitle>{plan.title}</PlanTitle>
            <Price>${plan.price}<span>/month</span></Price>
            <FeatureList>
              {plan.features.map((feature, i) => (
                <Feature key={i}>
                  <FaCheck />
                  {feature}
                </Feature>
              ))}
            </FeatureList>
            <Button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </Button>
          </PlanCard>
        ))}
      </Grid>
    </SubscriptionContainer>
  );
};

export default Subscription;