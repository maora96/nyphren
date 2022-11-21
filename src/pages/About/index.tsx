import Header from "../../components/Header";
import {
  TiSocialTwitterCircular,
  TiSocialTumblerCircular,
  TiSocialInstagramCircular,
} from "react-icons/ti";
import styles from "./styles.module.scss";

export default function About() {
  return (
    <div className={styles.container}>
      <Header />

      <h2>nyphren</h2>

      <div className={styles["card-image"]}>
        <img src="https://i.postimg.cc/8CSKvZ4D/Group-6-1.png" alt="icon" />
      </div>

      <h3>Ren Oliveira</h3>

      <div className={styles.bio}>
        <p>
          Hey there! I'm Ren (or Rain or nyphren and similars), a Brazilian
          nonbinary aroace queer creator. I love coming up with weird fantasy
          worlds, be it through interactive fiction games, linear storytelling
          or art. You might have also noticed that I have an ungodly obssession
          with creepy forests, post apocalyptic magic settings and either fey or
          elves. That isn't changing any time soon.
        </p>

        <p>
          I also a web developer by day and enjoy building stuff on my (very
          limited, unfortunately) time off.
        </p>

        <p>You can find me on the links below!</p>
      </div>

      <div className={styles.links}>
        <span>
          <strong>Email:</strong> renoliveira96@gmail.com
        </span>
        <div>
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
    </div>
  );
}
