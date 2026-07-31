"use client";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { IProject } from "@/types/project";
import styles from "@/styles/Project.module.css";
import Link from "next/link";

interface ProjectCardProps {
  project: IProject;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href="/projects" className={styles.card}>
      <Image
        src={project.image}
        alt={project.title}
        width={700}
        height={500}
        className={styles.image}
      />

      <div className={styles.overlay}>
        <span className={styles.badge}>{project.category}</span>

        <div className={styles.content}>
          <div>
            <h3>{project.title}</h3>

            <p>
              {project.location} • {project.year}
            </p>
          </div>

          <button className={styles.iconButton}>
            <ArrowUpRight size={22} style={{ backgroundColor: "transparent" }} />
          </button>
        </div>
      </div>
    </Link>
  );
}
