import Header from "../../components/Header";
import ProjectCard from "../../components/ProjectCard";
import { projects } from "../../utils/content";
import styles from "./styles.module.scss";

export default function Projects() {
  return (
    <div className={styles.container}>
      <Header />

      <h2>projects</h2>

      <div className={styles.projects}>
        {projects?.map((project: any) => (
          <ProjectCard project={project} />
        ))}
      </div>
    </div>
  );
}
