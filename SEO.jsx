import React from "react";
import { Helmet } from "react-helmet";

const SEO = ({ title, description, keywords, image, url }) => {
  // زانیارییە گشتییەکانی وێبسایتەکەت
  const siteName = "فرۆشگای کەیفی";
  const defaultDescription =
    "فرۆشگای کەیفی بۆ فرۆشتنی باشترین کاڵاکان بە نرخێکی گونجاو. سەردانمان بکەن بۆ ئەزموونێکی کڕینی ناوازە.";
  const defaultKeywords =
    "کەیفی, فرۆشگا, کڕین, ئۆنڵاین, جلوبەرگ, کاڵا, kurdish, online shop";
  const siteUrl = "https://www.kayfistore.com";
  const defaultImage = `${siteUrl}/myLogo.svg`; // وێنەی دیفۆڵت

  // ئامادەکردنی زانیارییەکان بۆ تاگەکان
  const seo = {
    title: title ? `${title} | ${siteName}` : siteName,
    description: description || defaultDescription,
    keywords: keywords || defaultKeywords,
    image: image || defaultImage,
    url: url ? `${siteUrl}${url}` : siteUrl,
  };

  return (
    <Helmet>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keywords} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content="website" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
    </Helmet>
  );
};

export default SEO;
