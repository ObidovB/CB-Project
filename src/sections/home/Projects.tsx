import ProjectsCard from "@/components/ProjectsCard";
import { projects } from "@/data/projects";
import styles from "@/styles/Project.module.css";

export default function Projects() {
  return (
    <section className={styles.section} id="projects">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.subtitle}>OUR PROJECTS</span>

          <h2 className={styles.title}>Building Uzbekistan{"'"}s Future</h2>

          <p className={styles.description}>
            Explore some of our successful residential, commercial and
            industrial concrete projects completed across Uzbekistan.
          </p>
        </div>

        <div className={styles.grid}>
          {projects.map((project) => (
            <ProjectsCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
