import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
// 1. Add your gallery images to the `src/assets/images` folder.
// For example: gallery-1.jpg, gallery-2.jpg, etc.

import shirini2 from "../assets/images/shirini2.JPG";
import shirini3 from "../assets/images/shirini3.JPG";
import shirini4 from "../assets/images/shirini4.JPG";
import shirini5 from "../assets/images/shirni5.JPG";
import shirini6 from "../assets/images/shirini6.JPG";
import shirini7 from "../assets/images/shirni7.JPG";
import shirini8 from "../assets/images/shirni8.JPG";
import shirini9 from "../assets/images/shirini9.JPG";
import shirini10 from "../assets/images/shirini10.JPG";
import wshka from "../assets/images/wshka.JPG";
import doyKayfi from "../assets/images/doyKayfi.JPG";
import mast from "../assets/images/mast.JPG";
import panir from "../assets/images/panir.JPG";
import image3 from "../assets/images/3.JPG";
import image4 from "../assets/images/4.JPG";
import image5 from "../assets/images/5.JPG";
import image6 from "../assets/images/6.JPG";
import image7 from "../assets/images/7.JPG";

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
  hidden: { opacity: 0, scale: 0.8, y: 50 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

const GalleryItem = ({ src, title }) => (
  <motion.div
    className="relative overflow-hidden rounded-lg shadow-lg group"
    variants={itemVariants}
    whileHover={{ scale: 1.05 }}
    // transition={{ type: "spring", stiffness: 300 }}
  >
    <img
      src={src}
      alt={title}
      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
    />
    {/* Overlay with title at the bottom */}
    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent md:translate-y-full md:group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
      <h3 className="text-white text-xl font-bold">{title}</h3>
    </div>
  </motion.div>
);

const Gallery = () => {
  const { t } = useTranslation();

  // 2. Update this list with your images and titles.
  const galleryItems = [
    // Dairy Products
    { id: 1, src: mast, title: t("gallery.items.item7") }, // Mast & Panir
    { id: 2, src: panir, title: t("gallery.items.item7") }, // Mast & Panir
    { id: 3, src: doyKayfi, title: t("gallery.items.item3") }, // Do
    // Sweets & Cakes
    { id: 4, src: shirini2, title: t("gallery.items.item2") },
    { id: 5, src: shirini3, title: t("gallery.items.item2") },
    { id: 6, src: shirini4, title: t("gallery.items.item2") },
    { id: 7, src: shirini5, title: t("gallery.items.item8") }, // Changed to Dried Sweets & Cookies
    { id: 8, src: shirini6, title: t("gallery.items.item2") },
    // Dried Goods
    { id: 9, src: wshka, title: t("gallery.items.item8") }, // Wshka (Dried sweets/cookies)
    // Additional Images
    { id: 10, src: image3, title: t("gallery.items.item2") },
    { id: 11, src: image4, title: t("gallery.items.item2") },
    { id: 12, src: image5, title: t("gallery.items.item2") },
    { id: 13, src: image6, title: t("gallery.items.item2") },
    { id: 14, src: image7, title: t("gallery.items.item2") },
  ];

  return (
    <section className="bg-slate-100/30 py-16 sm:py-24" id="products">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible" // Animate when the element is in view
          viewport={{ once: true, amount: 0.2 }} // Trigger animation when 20% is visible for better mobile experience
          variants={containerVariants}
        >
          <motion.h2
            className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl"
            variants={itemVariants}
          >
            {t("gallery.title")}
          </motion.h2>
          <motion.p
            className="mt-4 text-lg text-slate-600"
            variants={itemVariants}
          >
            {t("gallery.subtitle")}
          </motion.p>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {galleryItems.map((item) => (
            <GalleryItem key={item.id} src={item.src} title={item.title} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
