import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
// 1. Add your gallery images to the `src/assets/images` folder.
// For example: gallery-1.jpg, gallery-2.jpg, etc.

import img1 from "../assets/images/1.PNG";
import img2 from "../assets/images/2.PNG";
import img3 from "../assets/images/3.PNG";
import img4 from "../assets/images/4.PNG";
import img5 from "../assets/images/5.PNG";
import img6 from "../assets/images/6.PNG";
import img7 from "../assets/images/7.PNG";
import img8 from "../assets/images/8.PNG";
import img9 from "../assets/images/9.png";
import img10 from "../assets/images/10.png";
import img11 from "../assets/images/11.png";
import img12 from "../assets/images/12.png";

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
    <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/50 md:bg-gradient-to-t md:from-black/80 md:to-transparent translate-y-0 md:translate-y-full md:group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
      <h3 className="text-white text-xl font-bold">{title}</h3>
    </div>
  </motion.div>
);

const Gallery = () => {
  const { t } = useTranslation();

  const galleryItems = [
    { id: 1, src: img1, title: t("gallery.items.item2") },
    { id: 2, src: img2, title: t("gallery.items.item2") },
    { id: 3, src: img12, title: t("gallery.items.item3") },
    { id: 4, src: img4, title: t("gallery.items.item2") },
    { id: 5, src: img5, title: t("gallery.items.item2") },
    { id: 6, src: img6, title: t("gallery.items.item2") },
    { id: 7, src: img7, title: t("gallery.items.item2") },
    { id: 8, src: img8, title: t("gallery.items.item2") },
    { id: 9, src: img9, title: t("gallery.items.item8") },
    { id: 10, src: img10, title: t("gallery.items.item7") },
    { id: 11, src: img11, title: t("gallery.items.item7") },
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
