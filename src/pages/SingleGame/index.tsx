import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import { ExpandedContent } from "../../types";
import { fullGames } from "../../utils/content";
import styles from "./styles.module.scss";

export default function SingleGame() {
  const { slug } = useParams();
  const [game, setGame] = useState<ExpandedContent>();

  useEffect(() => {
    if (slug) {
      const currentGame = fullGames?.filter(
        (game: ExpandedContent) => game.slug === slug
      )?.[0];

      if (currentGame) {
        setGame(currentGame);
      }
    }
  }, [slug]);

  return (
    <div className={styles.container}>
      <Header />
      <h2>{game?.title}</h2>

      <div className={styles.game}>
        {game?.description?.map((paragraph: string) => (
          <p>{paragraph}</p>
        ))}
      </div>

      <div className={styles.links}>
        <a href={game?.devblog}>Dev Blog</a>
        <a href={game?.itch}>Play it now</a>
      </div>

      <div className={styles.gallery}>
        {game?.gallery?.map((photo: string) => (
          <img src={photo} />
        ))}
      </div>
    </div>
  );
}
