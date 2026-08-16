import Image from "next/image";
import Button from "@/components/Button";
import styles from "@/styles/Component.module.css";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.leftSide}>
        <span className={styles.badge}>Trusted Concrete Manufacturer</span>

        {/* <div className={styles.grid}></div>
        <div className={styles.lines}></div>

        <div className={styles.glowOne}></div>
        <div className={styles.glowTwo}></div> */}

        <h1 className={styles.title}>
          BUILDING THE
          <br />
          FUTURE WITH
          <br />
          QUALITY CONCRETE
        </h1>

        <p className={styles.description}>
          Central Beton delivers high-quality concrete products and construction
          solutions for residential, commercial, and industrial projects across
          Uzbekistan.
        </p>

        <div className={styles.actions}>
          <Button href="/contacts/">Order Concrete</Button>

          <Button href="/products/" variant="outline" variantIcon="topRight">
            View Products
          </Button>
        </div>

        <div className={styles.stats}>
          <div>
            <h3>10+</h3>
            <p>Years Experience</p>
          </div>

          <div>
            <h3>500+</h3>
            <p>Completed Projects</p>
          </div>

          <div>
            <h3>1M+</h3>
            <p>m³ Concrete Delivered</p>
          </div>

          <div>
            <h3>Working</h3>
            <p>24/7 Support</p>
          </div>
        </div>
        <div className={styles.contactBar}>
          <div className={styles.item}>
            <span>📞 +998 91 001 11 11</span>
            <small>24/7</small>
          </div>

          <div className={styles.divider} />

          <div className={styles.item}>
            <span>📍 Yunusabad, Tashkent</span>
            <small>Olmzor Street 4, 100030</small>
          </div>

          <div className={styles.divider} />

          <div className={styles.item}>
            <span>⏱ Working time</span>
            <small>24/7 / No weekends</small>
          </div>
        </div>
      </div>
      <div className={styles.rightSide}>
        <Image src="/images/hero.png" alt="rasm" width={650} height={600} />
      </div>
    </div>
  );
}
