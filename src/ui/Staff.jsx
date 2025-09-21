import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { UserCircleIcon, XMarkIcon } from "@heroicons/react/24/solid"; // Placeholder icon
import imgDanar from "../assets/images/danar.PNG";
import imgKayfi from "../assets/images/kayfihassan.JPG";

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
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

const modalBackdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalContentVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 250,
      damping: 25,
    },
  },
  exit: { scale: 0.8, opacity: 0 },
};

const Staff = () => {
  const { t } = useTranslation();
  const [selectedStaff, setSelectedStaff] = useState(null);

  const staffMembers = [
    {
      name: t("staff.owner_name"),
      role: t("staff.owner_role"),
      image: imgDanar,
      description: t("staff.owner_desc"),
    },
    {
      name: t("staff.supervisor_name"),
      role: t("staff.supervisor_role"),
      image: imgKayfi,
      description: t("staff.supervisor_desc"),
    },
  ];

  return (
    <section id="staff" className="bg-slate-100/30 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={containerVariants}
        >
          <motion.h2
            className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl"
            variants={itemVariants}
          >
            {t("staff.title")}
          </motion.h2>
          <motion.p
            className="mt-4 max-w-2xl mx-auto text-lg text-slate-600"
            variants={itemVariants}
          >
            {t("staff.subtitle")}
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {staffMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden text-center p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer"
              variants={itemVariants}
              onClick={() => setSelectedStaff(member)}
            >
              {member.image ? (
                <img
                  className="w-32 h-32 rounded-full mx-auto object-cover ring-4 ring-cyan-400"
                  src={member.image}
                  alt={member.name}
                />
              ) : (
                <UserCircleIcon className="w-32 h-32 text-slate-300 mx-auto" />
              )}
              <h3 className="mt-6 text-xl font-bold text-slate-900">
                {member.name}
              </h3>
              <p className="mt-1 text-md font-semibold text-cyan-600">
                {member.role}
              </p>
              <p className="mt-4 text-base text-slate-500">
                {member.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedStaff && selectedStaff.image && (
          <motion.div
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
            variants={modalBackdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={() => setSelectedStaff(null)} // Close on backdrop click
          >
            {/* Close button for the modal */}
            <button
              onClick={() => setSelectedStaff(null)}
              className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors z-50"
            >
              <XMarkIcon className="w-8 h-8" />
            </button>
            <motion.div
              className="relative w-96 h-96 sm:w-[32rem] sm:h-[32rem]" // Increased size for a larger view
              variants={modalContentVariants}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on content
            >
              <img
                className="w-full h-full object-cover rounded-full shadow-2xl ring-4 ring-white/20"
                src={selectedStaff.image}
                alt={selectedStaff.name}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Staff;
