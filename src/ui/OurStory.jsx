import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import imgDanar from "../assets/images/danar.PNG";
const OurStory = () => {
  const { t } = useTranslation();

  return (
    <div
      id="about"
      className="relative bg-white py-16 sm:py-24 overflow-hidden"
      dir={document.documentElement.dir}
    >
      <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
        <div className="relative sm:py-16 lg:py-0">
          <div
            aria-hidden="true"
            className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen"
          >
            <div className="absolute inset-y-0 right-1/2 w-full bg-slate-50 rounded-r-3xl lg:right-72" />
            <svg
              className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
              width={404}
              height={392}
              fill="none"
              viewBox="0 0 404 392"
            >
              <defs>
                <pattern
                  id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-slate-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={392}
                fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)"
              />
            </svg>
          </div>
          <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
            {/* Testimonial card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              className="relative pt-64 pb-10 rounded-2xl shadow-xl overflow-hidden"
            >
              <img
                className="absolute inset-0 h-full w-full object-cover"
                src={imgDanar}
                alt="Team working"
              />
              <div className="absolute inset-0 bg-cyan-500 mix-blend-multiply" />
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-600 via-cyan-600 opacity-90" />
              <div className="relative px-8">
                <blockquote className="mt-8">
                  <div className="relative text-lg font-medium text-white md:flex-grow">
                    <p className="relative">"{t("ourStory.quote")}"</p>
                  </div>

                  <footer className="mt-4">
                    <p className="text-base font-semibold text-cyan-200">
                      {t("ourStory.author")}
                    </p>
                  </footer>
                </blockquote>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
          {/* Content area */}
          <div className="pt-12 sm:pt-16 lg:pt-20">
            <h2 className="text-3xl text-slate-900 font-extrabold tracking-tight sm:text-4xl">
              {t("ourStory.title")}
            </h2>
            <div className="mt-6 text-slate-500 space-y-6">
              <p className="text-lg">{t("ourStory.p1")}</p>
              <p className="text-base leading-7">{t("ourStory.p2")}</p>
              <p className="text-base leading-7">{t("ourStory.p3")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
