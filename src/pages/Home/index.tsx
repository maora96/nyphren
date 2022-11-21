import ReleaseCard from "../../components/ReleaseCard";
import Header from "../../components/Header";
import {
  TiSocialTwitterCircular,
  TiSocialTumblerCircular,
  TiSocialInstagramCircular,
} from "react-icons/ti";
import styles from "./styles.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />

      <h2>fantasy writer, aspiring artist & full-stack developer</h2>

      <ReleaseCard />

      <div className={styles.links}>
        <a href="https://twitter.com/nyphren">
          <TiSocialTwitterCircular size={36} className={styles.icon} />
        </a>
        <a href="https://nyphren.tumblr.com/">
          <TiSocialTumblerCircular size={36} className={styles.icon} />
        </a>
        <a href="https://www.instagram.com/nyphren/">
          <TiSocialInstagramCircular size={36} className={styles.icon} />
        </a>
      </div>
    </div>
  );
}
