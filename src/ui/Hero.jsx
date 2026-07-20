import React from "react";
import img from "../assets/images/hero.jpg";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div
      id="home"
      dir="rtl"
      className="relative bg-slate-950 text-white overflow-hidden min-h-screen flex items-center"
    >
      {/* Ambient background patterns and gradients */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      
      {/* Decorative Blur Spheres */}
      <div className="absolute top-[-10%] right-[10%] w-[35rem] h-[35rem] bg-cyan-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] left-[10%] w-[30rem] h-[30rem] bg-teal-500/10 rounded-full blur-[120px]" />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-36 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Side: Rich text content */}
          <motion.div
            className="lg:col-span-7 flex flex-col text-right"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            dir={document.documentElement.dir}
          >
            {/* Pulsing Intro Badge */}
            <motion.div 
              variants={itemVariants}
              className="inline-flex self-start items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-400 text-sm font-semibold mb-6 shadow-inner"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
              </span>
              ١٠٠٪ بەرهەمی خۆماڵی و کوالێتی بەرز
            </motion.div>

            {/* Main Gradient Typography Title */}
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15]"
              variants={itemVariants}
            >
              <span className="block text-slate-100">{t("hero.welcome")}</span>
              <span className="block bg-gradient-to-l from-cyan-400 via-teal-300 to-blue-500 bg-clip-text text-transparent drop-shadow-md">
                {t("hero.storeName")}
              </span>
            </motion.h1>

            {/* Description Subtitle */}
            <motion.p
              className="mt-6 text-lg text-slate-300 sm:text-xl leading-relaxed max-w-2xl"
              variants={itemVariants}
            >
              {t("hero.subtitle")}
            </motion.p>

            {/* Premium CTA Buttons */}
            <motion.div 
              className="mt-10 flex flex-wrap gap-4 items-center" 
              variants={itemVariants}
            >
              <motion.a
                href="#contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-teal-400 hover:from-cyan-400 hover:to-teal-300 text-slate-950 font-extrabold rounded-2xl shadow-xl shadow-cyan-500/20 transition-all duration-300 md:text-lg flex items-center gap-2"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                {t("hero.cta")}
              </motion.a>
              <motion.a
                href="#products"
                className="px-8 py-4 bg-slate-900/60 hover:bg-slate-800/80 text-slate-200 border border-slate-800 hover:border-slate-700 font-extrabold rounded-2xl transition-all duration-300 md:text-lg backdrop-blur-sm"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                سەیری بەرهەمەکان بکە
              </motion.a>
            </motion.div>

            {/* Trust and Key Stats Grid */}
            <motion.div 
              className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-slate-900"
              variants={itemVariants}
            >
              <div>
                <div className="text-cyan-400 font-black text-2xl sm:text-3xl">١٠٠٪</div>
                <div className="text-slate-400 text-xs sm:text-sm mt-1">کوالیتی بەرز</div>
              </div>
              <div className="border-r border-slate-900 pr-6">
                <div className="text-teal-400 font-black text-2xl sm:text-3xl">خێرا</div>
                <div className="text-slate-400 text-xs sm:text-sm mt-1">خزمەتگوزاری نایاب</div>
              </div>
              <div className="border-r border-slate-900 pr-6">
                <div className="text-blue-400 font-black text-2xl sm:text-3xl">گونجاو</div>
                <div className="text-slate-400 text-xs sm:text-sm mt-1">باشترین نرخەکان</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side: Image containerized with floating modern badges */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md md:max-w-lg">
              {/* Outer soft shadow and rotating border glow background */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-cyan-500 to-teal-500 rounded-[2rem] blur-xl opacity-30 animate-pulse" />
              
              {/* Image Border Wrapper */}
              <div className="relative p-1 rounded-[2rem] bg-gradient-to-tr from-cyan-500/30 via-slate-800/50 to-teal-500/30 shadow-2xl">
                {/* Image Glass Frame */}
                <div className="relative bg-slate-950/90 p-4 rounded-[1.8rem] overflow-hidden group">
                  <div className="relative overflow-hidden rounded-2xl">
                    <img
                      src={img}
                      alt="A vibrant storefront display for Froshga Kayfi"
                      className="w-full h-auto object-cover aspect-square shadow-inner transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60" />
                  </div>
                </div>
              </div>

              {/* Floating Badge 1 */}
              <motion.div 
                className="absolute -top-4 -right-4 bg-slate-900/90 backdrop-blur-md border border-slate-800 p-4 rounded-2xl shadow-2xl flex items-center gap-3 z-20"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-xl font-bold">
                  ⭐
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 font-medium">دڵنیاکراوە لە کوالیتی</div>
                  <div className="text-sm text-white font-extrabold">سروشتی و تەندروست</div>
                </div>
              </motion.div>

              {/* Floating Badge 2 */}
              <motion.div 
                className="absolute -bottom-4 -left-4 bg-slate-900/90 backdrop-blur-md border border-slate-800 p-4 rounded-2xl shadow-2xl flex items-center gap-3 z-20"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
              >
                <div className="w-10 h-10 rounded-xl bg-teal-500/20 flex items-center justify-center text-teal-400 text-xl font-bold">
                  🥗
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 font-medium">باشترین پێشنیار</div>
                  <div className="text-sm text-white font-extrabold">بەرهەمی خۆماڵی</div>
                </div>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
