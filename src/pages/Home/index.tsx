import ReleaseCard from "../../components/ReleaseCard";
import Header from "../../components/Header";
import styles from "./styles.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />

      <h2>fantasy writer, aspiring artist & full-stack developer</h2>

      <ReleaseCard />
    </div>
  );
}
