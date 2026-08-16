import styles from "@/styles/FeatureCard.module.css";
import Button from "./Button";
import { Feature } from "@/types/features";

interface FeatureCardProps {
  feature: Feature;
}

export default function FeatureCard({ feature }: FeatureCardProps) {
  const Icon = feature.icon;
  return (
    <div className={styles.card}>
      <div className={styles.icon}>
        <Icon size={28} style={{ backgroundColor: "transparent" }} />
      </div>

      <h3 className={styles.title}>
        {feature.title}
      </h3>

      <p className={styles.description}>
        {feature.description}
      </p>

      <Button variant="outline" size="sm" href="/about/">
        Learn More
      </Button>
    </div>
  );
}