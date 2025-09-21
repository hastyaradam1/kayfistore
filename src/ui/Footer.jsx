import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

// Placeholder icons for social media
const SocialIcon = ({ children, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-slate-400 hover:text-cyan-400 transition-colors duration-300"
  >
    {children}
  </a>
);

const Footer = () => {
  const { t } = useTranslation();

  const navLinks = [
    { name: t("nav.home"), href: "#home" },
    { name: t("nav.services"), href: "#products" },
    { name: t("nav.about"), href: "#about" },
    { name: t("nav.contact"), href: "#contact" },
  ];

  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-800 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">{t("nav.brand")}</h3>
            <p className="text-slate-400 leading-relaxed">
              {t("hero.subtitle").substring(0, 100)}...
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white tracking-wider uppercase">
              {t("footer.quickLinks")}
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-cyan-400 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white tracking-wider uppercase">
              {t("contact.title")}
            </h4>
            <ul className="space-y-3 text-slate-400">
              <li className="flex items-start gap-3">
                <MapPinIcon className="h-5 w-5 text-cyan-400 mt-1 flex-shrink-0" />
                <span>{t("contact.address")}</span>
              </li>
              <li className="flex items-start gap-3">
                <PhoneIcon className="h-5 w-5 text-cyan-400 mt-1 flex-shrink-0" />
                <a
                  href={`tel:${t("contact.phone")}`}
                  className="hover:text-cyan-400"
                >
                  {t("contact.phone")}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <EnvelopeIcon className="h-5 w-5 text-cyan-400 mt-1 flex-shrink-0" />
                <a
                  href={`mailto:${t("contact.email")}`}
                  className="hover:text-cyan-400"
                >
                  {t("contact.email")}
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white tracking-wider uppercase">
              {t("footer.followUs")}
            </h4>
            <div className="flex space-x-5">
              <SocialIcon href="https://www.facebook.com/share/1GjdvkSV8S/?mibextid=wwXIfr">
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </SocialIcon>
              <SocialIcon href="https://www.instagram.com/froshgay_kaefy.2?igsh=aHRweGtmZjRicTEx">
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.013-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.08 2.525c.636-.247 1.363-.416 2.427-.465C9.53 2.013 9.884 2 12.315 2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 8a3 3 0 110-6 3 3 0 010 6zm6.406-11.845a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </SocialIcon>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-700 pt-8 text-center text-slate-400">
          <p>
            &copy; {year} {t("nav.brand")}. {t("footer.rightsReserved")}
          </p>
          <p className="mt-4 text-sm">
            {t("footer.developedBy")}{" "}
            <a
              href="https://www.facebook.com/Marshallmm/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-slate-300 hover:text-cyan-400 transition-colors"
            >
              {t("footer.developerName")}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
