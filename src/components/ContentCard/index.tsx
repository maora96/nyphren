import { Content } from "../../types";
import styles from "./styles.module.scss";

interface IBookCard {
  content: Content;
}

export default function ContentCard({ content }: IBookCard) {
  return (
    <div className={styles.card}>
      <div className={styles["card-image"]}>
        <img src={content.cover} alt="book cover" />
      </div>

      <div className={styles["card-content"]}>
        <h3>{content.title}</h3>

        <p>{content.description}</p>

        <div className={styles.tags}>
          {content.tags.map((tag: string) => (
            <span># {tag}</span>
          ))}
        </div>

        <div className={styles.links}>
          {content.goodreads && <a href={content.goodreads}>Goodreads</a>}
          {content.amazon && <a href={content.amazon}>Amazon</a>}
          {content.itch && <a href={content.itch}>Itch.io</a>}
          {content.more && <a href={content.more}>More {"->"}</a>}
        </div>
      </div>
    </div>
  );
}
