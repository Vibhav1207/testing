import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const SubscriptionSection = styled.section`
  padding: 4rem 2rem;
  background: rgba(0, 0, 0, 0.8);
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  background: linear-gradient(90deg, #fff, #00f, #fff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 20px rgba(0, 100, 255, 0.5);
`;

const PlansContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const PlanCard = styled(motion.div)`
  background: rgba(0, 0, 20, 0.6);
  border: 2px solid transparent;
  border-radius: 15px;
  padding: 2rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, #00f, #0ff);
    border-radius: 15px;
    z-index: -1;
    opacity: 0.7;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-5px);
    &::before {
      opacity: 1;
    }
  }
`;

const PlanTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: #fff;
`;

const PlanPrice = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  margin: 1rem 0;
  color: #fff;
  text-shadow: 0 0 10px rgba(0, 100, 255, 0.5);

  span {
    font-size: 1rem;
    opacity: 0.8;
  }
`;

const PlanFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin: 2rem 0;

  li {
    margin: 0.8rem 0;
    color: rgba(255, 255, 255, 0.8);
  }
`;

const CTAButton = styled.button`
  background: linear-gradient(90deg, #00f, #0066ff);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 25px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 0 15px rgba(0, 100, 255, 0.5);

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 20px rgba(0, 100, 255, 0.7);
  }
`;

function Subscription() {
  const plans = [
    {
      title: 'Basic',
      price: '9.99',
      features: [
        '50GB Storage',
        'Basic Encryption',
        'Email Support',
        '1 User'
      ]
    },
    {
      title: 'Pro',
      price: '19.99',
      features: [
        '500GB Storage',
        'Advanced Encryption',
        'Priority Support',
        '5 Users'
      ]
    },
    {
      title: 'Enterprise',
      price: '49.99',
      features: [
        'Unlimited Storage',
        'Military-grade Encryption',
        '24/7 Support',
        'Unlimited Users'
      ]
    }
  ];

  return (
    <SubscriptionSection>
      <SectionTitle>Choose Your Plan</SectionTitle>
      <PlansContainer>
        {plans.map((plan, index) => (
          <PlanCard
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <PlanTitle>{plan.title}</PlanTitle>
            <PlanPrice>
              ${plan.price}<span>/month</span>
            </PlanPrice>
            <PlanFeatures>
              {plan.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </PlanFeatures>
            <CTAButton>Get Started</CTAButton>
          </PlanCard>
        ))}
      </PlansContainer>
    </SubscriptionSection>
  );
}

export default Subscription;