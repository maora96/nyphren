import { Project } from "../../types";
import styles from "./styles.module.scss";

interface IProjectCard {
  project: Project;
}

export default function ProjectCard({ project }: IProjectCard) {
  return (
    <div className={styles.card}>
      <div className={styles["card-content"]}>
        <h3>{project.title}</h3>

        <p>{project.description}</p>

        <div className={styles.links}>
          {project.url ? (
            <a href={project.url}>Check it out</a>
          ) : (
            "Coming soon."
          )}
        </div>
      </div>
    </div>
  );
}
