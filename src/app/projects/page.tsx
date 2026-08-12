import Image from 'next/image';
import { projects } from '@/data/projects';
import styles from './projects.module.css';

export default function ProjectsPage() {
  return (
    <main className={styles.page}>
      <section className={styles.header}>
        <div className={styles.headerText}>
          <span className={styles.eyebrow}>Our work</span>
          <h1>Projects that speak for themselves</h1>
          <p>
            We deliver durable, high-performance concrete solutions for commercial,
            residential, and infrastructure projects across Uzbekistan.
          </p>
        </div>
      </section>

      <section className={styles.grid}>
        {projects.map((project) => (
          <article key={project.id} className={styles.card}>
            <div className={styles.imageWrap}>
              <Image
                src={project.image}
                alt={project.title}
                width={700}
                height={500}
                className={styles.image}
              />
            </div>

            <div className={styles.cardBody}>
              <span className={styles.badge}>{project.category}</span>
              <h2>{project.title}</h2>
              <div className={styles.meta}>
                <span>{project.location}</span>
                <span>{project.year}</span>
              </div>
            </div>
          </article>
        ))}
      </section>

      <div className={styles.border} />
    </main>
  );
}
