import AboutUsCoreValues from "../components/AboutUs/AboutUsCoreValues";
import AboutUsCraftingFuture from "../components/AboutUs/AboutUsCraftingFuture";
import AboutUsHero from "../components/AboutUs/AboutUsHero";
import AboutUsNewsletter from "../components/AboutUs/AboutUsNewsletter";
import AboutUsVisionaries from "../components/AboutUs/AboutUsVisionaries";
import useDocumentTitle from "../hooks/useDocumentTitle";

export default function AboutUs() {
  useDocumentTitle("LuxeRetail | About Us");

  return (
    <>
      <AboutUsHero />
      <AboutUsCraftingFuture />
      <AboutUsCoreValues />
      <AboutUsVisionaries />
      <AboutUsNewsletter />
    </>
  );
}
