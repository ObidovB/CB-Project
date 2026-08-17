import Hero from "@/sections/home/Hero";
import styles from "./page.module.css";
import ProductsSection from "@/sections/home/Products";
import WhyChooseUs from "@/sections/home/WhyChooseUs";
import CalculatorSection from "@/sections/home/CalculatorSection";
import Projects from "@/sections/home/Projects";
import ContactCard from "@/components/ContactCard";
// import Footer from "@/components/Footer";
import Banner from "@/components/Banner";

export default function Home() {
  return (
    <div className={styles.page}>
      <Hero />
      <div className={styles.border} />
      <ProductsSection />
      <div className={styles.border} />
      <WhyChooseUs />
      <div className={styles.border} />
      <CalculatorSection />
      <div className={styles.border} />
      <Projects />
      <div className={styles.border} />
      <ContactCard />
      <div className={styles.border} />
      <Banner />
      <div className={styles.border} />
      {/* <Footer /> */}
    </div>
  );
}
// 1) Dark and Light mode toggle
// 2) Translator language toggle
// 3) Transition ANIMATIONS for sections