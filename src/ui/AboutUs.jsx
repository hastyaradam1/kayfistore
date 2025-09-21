import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  EyeIcon,
  HeartIcon,
  ScaleIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100 },
  },
};

const AboutUs = () => {
  const { t } = useTranslation();

  const values = [
    {
      name: t("aboutUs.vision.title"),
      description: t("aboutUs.vision.desc"),
      icon: EyeIcon,
    },
    {
      name: t("aboutUs.mission.title"),
      description: t("aboutUs.mission.desc"),
      icon: HeartIcon,
    },
    {
      name: t("aboutUs.values.title"),
      description: t("aboutUs.values.desc"),
      icon: ScaleIcon,
    },
    {
      name: t("aboutUs.community.title"),
      description: t("aboutUs.community.desc"),
      icon: UserGroupIcon,
    },
  ];

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={containerVariants}
        >
          <motion.h2
            className="text-3xl font-extrabold text-slate-900 sm:text-4xl"
            variants={itemVariants}
          >
            {t("aboutUs.title")}
          </motion.h2>
          <motion.p
            className="mt-4 max-w-3xl mx-auto text-lg text-slate-600"
            variants={itemVariants}
          >
            {t("aboutUs.subtitle")}
          </motion.p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {values.map((value) => (
            <motion.div
              key={value.name}
              className="text-center"
              variants={itemVariants}
            >
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-cyan-500 text-white mx-auto">
                <value.icon className="h-7 w-7" aria-hidden="true" />
              </div>
              <div className="mt-5">
                <h3 className="text-lg leading-6 font-bold text-slate-900">
                  {value.name}
                </h3>
                <p className="mt-2 text-base text-slate-500">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
