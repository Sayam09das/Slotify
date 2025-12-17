import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Calendar, Clock, Zap } from 'lucide-react';

const OutcomeandBenefits = () => {
  const benefits = [
    {
      icon: ShieldCheck,
      title: 'No Overbooking',
      description: 'Slots are automatically locked once booked, eliminating conflicts.'
    },
    {
      icon: Calendar,
      title: 'Clear Scheduling',
      description: 'Daily schedules are easy to view and manage.'
    },
    {
      icon: Clock,
      title: 'Time Savings',
      description: 'Reduces manual coordination through calls or messages.'
    },
    {
      icon: Zap,
      title: 'Reliable Operations',
      description: 'Designed for consistent, real-world daily use.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const benefitVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  };

  return (
    <section className="w-full bg-gray-50 py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-3 sm:mb-4">
            What You Get with Slotify
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
            Experience seamless appointment management with benefits designed for efficiency and reliability
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 sm:p-8"
                variants={benefitVariants}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                {/* Icon Container */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg flex items-center justify-center mb-4 sm:mb-5"
                  style={{ backgroundColor: 'rgba(79, 57, 246, 0.1)' }}>
                  <IconComponent
                    className="w-6 h-6 sm:w-7 sm:h-7"
                    style={{ color: '#4f39f6' }}
                    strokeWidth={1.5}
                  />
                </div>

                {/* Benefit Title */}
                <h3 className="text-lg sm:text-xl font-semibold text-black mb-2 sm:mb-3">
                  {benefit.title}
                </h3>

                {/* Benefit Description */}
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default OutcomeandBenefits;