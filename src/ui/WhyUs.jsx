import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  SparklesIcon,
  CurrencyDollarIcon,
  ChatBubbleLeftRightIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
};

const WhyUs = () => {
  const { t } = useTranslation();

  const features = [
    {
      name: t("whyUs.features.quality"),
      description: t("whyUs.features.quality_desc"),
      icon: SparklesIcon,
    },
    {
      name: t("whyUs.features.price"),
      description: t("whyUs.features.price_desc"),
      icon: CurrencyDollarIcon,
    },
    {
      name: t("whyUs.features.service"),
      description: t("whyUs.features.service_desc"),
      icon: ChatBubbleLeftRightIcon,
    },
    {
      name: t("whyUs.features.selection"),
      description: t("whyUs.features.selection_desc"),
      icon: ShoppingBagIcon,
    },
  ];

  return (
    <section id="services" className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-base font-semibold text-cyan-600 tracking-wide uppercase">
            {t("whyUs.tagline")}
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">
            {t("whyUs.title")}
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-500">
            {t("whyUs.subtitle")}
          </p>
        </div>

        <motion.div
          className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.name}
              className="text-center"
              variants={itemVariants}
            >
              <div className="flex items-center justify-center h-16 w-16 rounded-lg bg-cyan-500 text-white mx-auto">
                <feature.icon className="h-8 w-8" aria-hidden="true" />
              </div>
              <h3 className="mt-5 text-lg font-medium text-slate-900">
                {feature.name}
              </h3>
              <p className="mt-2 text-base text-slate-500">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUs;
