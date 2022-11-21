import ContentCard from "../../components/ContentCard";
import Header from "../../components/Header";
import { Content } from "../../types";
import { games } from "../../utils/content";
import styles from "./styles.module.scss";

export default function Games() {
  return (
    <div className={styles.container}>
      <Header />
      <h2>games</h2>

      <div className={styles.games}>
        {games?.map((content: Content, index: number) => {
          return <ContentCard content={content} key={index} />;
        })}
      </div>
    </div>
  );
}
