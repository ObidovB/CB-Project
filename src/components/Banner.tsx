import { bannerItems } from "@/data/banners";
import styles from "@/styles/Component.module.css";

export default function Banner() {
  return (
    <section className={styles.banner}>
      {bannerItems.map((item, index) => {
        const Icon = item.icon;

        return (
          <div key={index} className={styles.bannerContent}>
            <div className={styles.iconBanner}>
              <Icon size={28} style={{ backgroundColor: "transparent" }} />
            </div>

            <div className={styles.bannerTexts}>
              <h3>{item.value}</h3>
              <p>{item.text}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
}
