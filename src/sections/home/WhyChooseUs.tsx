import styles from "@/styles/WhyChooseUs.module.css";
import { features } from "@/data/features";
import FeatureCard from "@/components/FeatureCard";

export default function WhyChooseUs() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        <div className={styles.header}>

          <span className={styles.subtitle}>
            WHY CHOOSE US
          </span>

          <h2 className={styles.title}>
            Building Strong Foundations
            <br />
            for Every Great Project
          </h2>

          <p className={styles.description}>
            Central Beton combines modern production,
            reliable logistics, and premium quality to
            deliver concrete solutions trusted by
            residential, commercial, and industrial
            projects across Uzbekistan.
          </p>

        </div>

        <div className={styles.cards}>
          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              feature={feature}
            />
          ))}
        </div>

      </div>
    </section>
  );
}