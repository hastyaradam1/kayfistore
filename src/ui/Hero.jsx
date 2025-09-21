import React from "react";
import img from "../assets/images/froshga_hero.jpg";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const BackgroundImage = () => (
  <img
    src={img}
    alt="A vibrant storefront display for Froshga Kayfi"
    className="absolute inset-0 w-full h-full object-cover"
    aria-hidden="true"
  />
);

const Overlay = () => <div className="absolute inset-0 bg-black/60" />;

const HeroContent = () => {
  const { t } = useTranslation();
  return (
    <motion.div
      className="relative z-10 flex flex-col items-center text-center p-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1
        className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
        variants={itemVariants}
      >
        <span className="block">{t("hero.welcome")}</span>
        <span className="block text-cyan-400 mt-2">{t("hero.storeName")}</span>
      </motion.h1>

      <motion.p
        className="mt-6 max-w-2xl mx-auto text-lg text-slate-200 sm:text-xl md:text-2xl lg:text-3xl"
        variants={itemVariants}
      >
        {t("hero.subtitle")}
      </motion.p>

      <motion.div className="mt-10" variants={itemVariants}>
        <motion.a
          href="#contact"
          className="inline-block px-8 py-3 border border-transparent text-base font-medium rounded-md text-slate-900 bg-cyan-400 md:text-lg"
          whileHover={{ scale: 1.05, backgroundColor: "#22d3ee" }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          {t("hero.cta")}
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

const Hero = () => {
  return (
    <div
      id="home"
      dir="rtl"
      className="relative text-white overflow-hidden min-h-screen flex items-center justify-center"
    >
      <BackgroundImage />
      <Overlay />
      <HeroContent />
    </div>
  );
};

export default Hero;
