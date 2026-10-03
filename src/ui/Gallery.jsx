import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
// 1. Add your gallery images to the `src/assets/images` folder.
// For example: gallery-1.jpg, gallery-2.jpg, etc.

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

const WhatsAppIcon = ({ className = "w-5 h-5" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
  </svg>
);

const GalleryItem = ({
  id,
  src,
  title,
  isHighlighted,
  onOpenWhatsApp,
  whatsappLabel,
}) => (
  <motion.div
    id={`product-${id}`}
    className={`relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer border transition-all duration-500 bg-white ${
      isHighlighted
        ? "ring-4 ring-cyan-400 ring-offset-4 ring-offset-slate-900 shadow-2xl scale-[1.04]"
        : "border-slate-200/60"
    }`}
    variants={itemVariants}
    whileHover={{ scale: 1.03 }}
    onClick={onOpenWhatsApp}
    role="button"
    tabIndex={0}
    onKeyDown={(e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        onOpenWhatsApp();
      }
    }}
  >
    <img
      src={src}
      alt={title}
      className={`w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110 ${
        isHighlighted ? "scale-105" : ""
      }`}
    />

    {/* Subtle gradient base */}
    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent transition-opacity duration-300" />

    {/* Highlight Indicator Badge if selected from WhatsApp link */}
    {isHighlighted && (
      <div className="absolute top-4 left-4 z-20">
        <span className="flex items-center gap-1.5 px-3 py-1 bg-cyan-500 text-slate-950 text-xs font-black rounded-full shadow-lg animate-pulse">
          ★ هەڵبژێردراو
        </span>
      </div>
    )}

    {/* Product ID Tag */}
    <div className="absolute top-4 right-4 z-10 flex items-center gap-2">
      <span className="px-2.5 py-1 bg-slate-900/80 text-cyan-300 border border-slate-700/80 text-xs font-mono font-bold rounded-lg shadow-sm">
        #{id}
      </span>
      <div className="hidden group-hover:flex items-center gap-1.5 px-3 py-1 bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-semibold rounded-full shadow-lg transition-all duration-300">
        <WhatsAppIcon className="w-3.5 h-3.5" />
        <span>WhatsApp</span>
      </div>
    </div>

    {/* Content overlay */}
    <div className="absolute bottom-0 left-0 right-0 p-5 flex flex-col justify-end">
      <h3 className="text-white text-xl font-bold mb-2 drop-shadow-md">{title}</h3>
      <div className="flex items-center gap-2 text-emerald-400 group-hover:text-emerald-300 text-sm font-semibold transition-colors duration-200">
        <WhatsAppIcon className="w-4 h-4 flex-shrink-0" />
        <span>{whatsappLabel}</span>
      </div>
    </div>
  </motion.div>
);

const Gallery = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [highlightedId, setHighlightedId] = useState(null);

  const phoneNumber = "9647510214540"; // Froshgay Kayfi contact number

  const galleryItems = [
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

  // Auto-scroll and highlight when URL contains item ID (e.g. ?item=2 or #product-2)
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const queryItemId = searchParams.get("item");
    const hash = location.hash;
    let targetId = null;

    if (queryItemId) {
      targetId = parseInt(queryItemId, 10);
    } else if (hash && hash.startsWith("#product-")) {
      targetId = parseInt(hash.replace("#product-", ""), 10);
    }

    if (targetId) {
      setHighlightedId(targetId);
      const timer = setTimeout(() => {
        const el = document.getElementById(`product-${targetId}`);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }, 400);

      return () => clearTimeout(timer);
    }
  }, [location]);

  const handleOpenWhatsApp = (itemId, itemTitle) => {
    const isKurdish = i18n.language === "ku";
    
    // Create website link with item ID that scrolls to and highlights this product
    const websiteProductUrl = `${window.location.origin}${window.location.pathname}?item=${itemId}#product-${itemId}`;

    const message = isKurdish
      ? `سڵاو! دەمەوێت داواکاری بکەم یان پرسیار بکەم دەربارەی ئەم بەرهەمە:\n📌 ناوی بەرهەم: ${itemTitle}\n🔢 ژمارەی بەرهەم (ID): #${itemId}\n🔗 بینینی بەرهەم لە وێبسایت:\n${websiteProductUrl}`
      : `Hello! I would like to order or inquire about this product:\n📌 Product Name: ${itemTitle}\n🔢 Product ID: #${itemId}\n🔗 View on Website:\n${websiteProductUrl}`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

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
            <GalleryItem
              key={item.id}
              id={item.id}
              src={item.src}
              title={item.title}
              isHighlighted={highlightedId === item.id}
              whatsappLabel={t("gallery.orderViaWhatsApp")}
              onOpenWhatsApp={() => handleOpenWhatsApp(item.id, item.title)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
