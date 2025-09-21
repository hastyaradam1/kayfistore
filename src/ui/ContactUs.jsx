import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  MapPinIcon,
  EnvelopeIcon,
  PhoneIcon,
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

const ContactUs = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="bg-slate-100/30 py-16 sm:py-24">
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
            {t("contact.title")}
          </motion.h2>
          <motion.p
            className="mt-4 max-w-2xl mx-auto text-lg text-slate-600"
            variants={itemVariants}
          >
            {t("contact.subtitle")}
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            className="bg-slate-50 p-8 rounded-2xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={containerVariants}
          >
            <motion.h3
              className="text-2xl font-bold text-slate-800 mb-6"
              variants={itemVariants}
            >
              {t("contact.infoTitle")}
            </motion.h3>
            <motion.div className="space-y-6" variants={itemVariants}>
              <div className="flex items-start gap-4">
                <MapPinIcon className="h-6 w-6 text-cyan-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-700">
                    {t("contact.addressTitle")}
                  </h4>
                  <p className="text-slate-500">{t("contact.address")}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <PhoneIcon className="h-6 w-6 text-cyan-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-700">
                    {t("contact.phoneTitle")}
                  </h4>
                  <a
                    href={`tel:${t("contact.phone")}`}
                    className="text-slate-500 hover:text-cyan-600 transition-colors"
                  >
                    {t("contact.phone")}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <EnvelopeIcon className="h-6 w-6 text-cyan-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-700">
                    {t("contact.emailTitle")}
                  </h4>
                  <a
                    href={`mailto:${t("contact.email")}`}
                    className="text-slate-500 hover:text-cyan-600 transition-colors"
                  >
                    {t("contact.email")}
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Google Maps Embed */}
          <motion.div
            className="rounded-2xl overflow-hidden shadow-lg"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3221.16515506047!2d44.68583290000001!3d36.1625355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40013138284148f9%3A0x9f68494c6206ded4!2z2YHYsduG2LTar9in24wg2qnblduM2YHbjA!5e0!3m2!1sen!2siq!4v1758356934374!5m2!1sen!2siq"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={t("contact.mapTitle")}
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
