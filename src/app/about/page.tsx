import styles from './aboutus.module.css';
import WhyChooseUs from '@/sections/home/WhyChooseUs';
import {
  ArrowRight,
  BadgeCheck,
  Factory,
  ShieldCheck,
  Truck,
} from 'lucide-react';

const companyValues = [
  {
    icon: ShieldCheck,
    title: 'Quality first',
    text: 'Every batch is produced to strict standards to ensure strength, durability, and consistency.',
  },
  {
    icon: Factory,
    title: 'Modern production',
    text: 'Advanced equipment and automated systems help us deliver reliable concrete solutions at scale.',
  },
  {
    icon: Truck,
    title: 'Fast logistics',
    text: 'Our delivery network keeps projects moving smoothly across residential, commercial, and industrial sites.',
  },
  {
    icon: BadgeCheck,
    title: 'Trusted partnership',
    text: 'We work closely with contractors and builders to support every stage of construction with confidence.',
  },
];

const metrics = [
  { value: '12+', label: 'Years of experience' },
  { value: '30K+', label: 'Cubic meters delivered' },
  { value: '250+', label: 'Projects completed' },
];

export default function AboutPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.content}>
          <span className={styles.eyebrow}>About Central Beton</span>
          <h1>Concrete solutions built for lasting performance.</h1>
          <p>
            We help businesses and developers build stronger foundations with dependable
            concrete mixes, efficient delivery, and a service approach built around quality.
          </p>

          <div className={styles.actions}>
            <a href="/contacts" className={styles.primaryButton}>
              Contact us
              <ArrowRight size={18} />
            </a>
            <a href="/products" className={styles.secondaryButton}>
              Our products
            </a>
          </div>

          <div className={styles.stats}>
            {metrics.map((item) => (
              <div key={item.label} className={styles.statItem}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.visual}>
          <div className={styles.visualPanel}>
            <div className={styles.visualBadge}>Reliable supply</div>
            <h2>Built for strength, speed, and trust.</h2>
            <ul>
              <li>Premium ready-mix concrete</li>
              <li>On-time logistics and dispatch</li>
              <li>Consistent quality control</li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.story}>
        <div className={styles.storyIntro}>
          <span className={styles.sectionLabel}>Our story</span>
          <h2>Delivering smarter construction materials since day one.</h2>
        </div>

        <div className={styles.storyGrid}>
          {companyValues.map(({ icon: Icon, title, text }) => (
            <article key={title} className={styles.valueCard}>
              <div className={styles.iconWrap}>
                <Icon size={26} />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <div className={styles.border} />

      <WhyChooseUs />

      <div className={styles.border} />
    </main>
  );
}