import Placeholder from "../../assets/circle.png";
import styles from "./styles.module.scss";

export default function ReleaseCard() {
  return (
    <div className={styles.card}>
      <div className={styles["card-image"]}>
        <img src={Placeholder} alt="last release: briarheart" />
      </div>

      <h3>Last release</h3>

      <p>
        <strong>BRIARHEART:</strong> saving the world cost the briarheart their
        life - it was supposed to also claim your own. But you failed. Why?
      </p>

      <div className={styles.tags}>
        <span># interactive fiction</span>
        <span># post-apocalypse</span>
        <span># fantasy</span>
      </div>

      <a href="/games/briarheart">Play it</a>
    </div>
  );
}
