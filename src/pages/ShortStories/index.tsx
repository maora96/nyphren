import ContentCard from "../../components/ContentCard";
import Header from "../../components/Header";
import { Content } from "../../types";
import { stories } from "../../utils/content";
import styles from "./styles.module.scss";

export default function ShortStories() {
  return (
    <div className={styles.container}>
      <Header />

      <h2>short stories</h2>

      <div>
        {stories?.map((story: Content) => {
          return <ContentCard content={story} />;
        })}
      </div>
    </div>
  );
}
