import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import AllRoutes from "./routers/AllRoutes";
import TopNavbar from "./ui/TopNavbar";
import Hero from "./ui/Hero";
import Gallery from "./ui/Gallery";
import WhyUs from "./ui/WhyUs";
import OurStory from "./ui/OurStory";
import Staff from "./ui/Staff";
import AboutUs from "./ui/AboutUs";
import ContactUs from "./ui/ContactUs";
import Footer from "./ui/Footer";
function App() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.title = t("nav.brand");
  }, [i18n.language, t]);

  return (
    <>
      <AllRoutes />
      <TopNavbar />
      <Hero />
      <Gallery />
      <WhyUs />
      <OurStory />
      <Staff />
      <AboutUs />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
