import Link from 'next/link';
import styles from './services.module.css';

const serviceSteps = [
  {
    number: '01',
    title: 'Consultation & Planning',
    description:
      'We assess your site conditions, volume needs, and technical requirements to recommend the best concrete mix and delivery schedule.',
  },
  {
    number: '02',
    title: 'Production & Quality Control',
    description:
      'Our plant uses controlled batching and testing procedures to ensure consistent strength, workability, and durability in every load.',
  },
  {
    number: '03',
    title: 'Delivery & On-Site Support',
    description:
      'We coordinate transport, pouring logistics, and practical guidance so your team can work smoothly from the first truck to the final pour.',
  },
  {
    number: '04',
    title: 'Long-Term Partnership',
    description:
      'After delivery, we stay available for follow-up advice, future orders, and scalable solutions for industrial, residential, and commercial projects.',
  },
];

const serviceHighlights = [
  'Concrete mixes tailored for strength, durability, and climate conditions',
  'Reliable production schedules with fast turnaround for urgent projects',
  'Expert support for residential, commercial, and infrastructure work',
];

const serviceCards = [
  {
    title: 'Ready-Mix Concrete',
    description:
      'High-quality concrete supplied in precise grades for foundations, slabs, columns, and structural applications.',
    features: ['Custom mix design', 'Fast dispatch', 'Consistent quality'],
  },
  {
    title: 'Concrete Delivery',
    description:
      'A dependable logistics service for large-scale pours, time-sensitive schedules, and continuous site supply.',
    features: ['Flexible scheduling', 'On-time volume planning', 'Site coordination'],
  },
  {
    title: 'Construction Support',
    description:
      'Technical guidance and practical recommendations to help teams choose the right material and placement method.',
    features: ['Project advice', 'Material selection', 'Usage recommendations'],
  },
  {
    title: 'Bulk Supply',
    description:
      'Efficient bulk concrete supply for industrial, infrastructure, and long-term construction programs.',
    features: ['Large volumes', 'Contract support', 'Repeat delivery plans'],
  },
];

export default function ServicePage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <span className={styles.eyebrow}>Our services</span>
          <h1>Concrete solutions built around your project.</h1>
          <p>
            Central Beton helps clients move from planning to execution with reliable
            concrete production, tailored mix design, and smooth delivery coordination.
          </p>

          <div className={styles.actions}>
            <Link href="/contacts" className={styles.primaryButton}>
              Request a quote
            </Link>
            <Link href="/products" className={styles.secondaryButton}>
              Explore products
            </Link>
          </div>
        </div>

        <div className={styles.heroPanel}>
          <div className={styles.panelItem}>
            <strong>24/7</strong>
            <span>Delivery coordination</span>
          </div>
          <div className={styles.panelItem}>
            <strong>100%</strong>
            <span>Quality-focused batching</span>
          </div>
          <div className={styles.panelItem}>
            <strong>Custom</strong>
            <span>Mix recommendations</span>
          </div>
        </div>
      </section>

      <div className={styles.border} />

      <section className={styles.introSection}>
        <div className={styles.sectionHeader}>
          <span className={styles.eyebrow}>Introduction</span>
          <h2>Smart service from the first idea to the final pour.</h2>
        </div>

        <div className={styles.introGrid}>
          <div className={styles.introContent}>
            <p>
              We combine engineering awareness, practical construction knowledge,
              and dependable logistics to support projects with the right concrete
              solution at the right time.
            </p>
            <p>
              Whether you are building a residential structure, a commercial space,
              or a large infrastructure project, our team works with you to maintain
              schedule, quality, and cost efficiency.
            </p>
          </div>

          <ul className={styles.highlightList}>
            {serviceHighlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <div className={styles.border} />

      <section className={styles.stepsSection}>
        <div className={styles.sectionHeader}>
          <span className={styles.eyebrow}>How we work</span>
          <h2>Step-by-step service process.</h2>
        </div>

        <div className={styles.stepsGrid}>
          {serviceSteps.map((step) => (
            <article key={step.number} className={styles.stepCard}>
              <span className={styles.stepNumber}>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <div className={styles.border} />

      <section className={styles.servicesSection}>
        <div className={styles.sectionHeader}>
          <span className={styles.eyebrow}>Core offerings</span>
          <h2>Solutions designed for every stage of construction.</h2>
        </div>

        <div className={styles.cardsGrid}>
          {serviceCards.map((service) => (
            <article key={service.title} className={styles.serviceCard}>
              <div className={styles.cardIcon}>•</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul>
                {service.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <div className={styles.border} />

      <section className={styles.ctaSection}>
        <div>
          <span className={styles.eyebrow}>Let’s talk</span>
          <h2>Need a concrete partner for your next build?</h2>
        </div>
        <a href="/contacts" className={styles.primaryButton}>
          Contact us
        </a>
      </section>

      <div className={styles.border} />
    </main>
  );
}

