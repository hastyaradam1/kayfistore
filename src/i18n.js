import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "./locales/en/translation.json";
import translationKU from "./locales/ku/translation.json";

const resources = {
    en: {
        translation: translationEN,
    },
    ku: {
        translation: translationKU,
    },
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "ku", // زمانی سەرەکی وێبسایتەکە
        fallbackLng: "ku", // زمانی بنەڕەت ئەگەر وەرگێڕان نەدۆزرایەوە
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
