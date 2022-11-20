import { Menu } from "../../types";
import { menuItems } from "../../utils/menu-items";
import MenuItem from "../MenuItem";
import styles from "./styles.module.scss";

export default function Header() {
  return (
    <header className={styles.container}>
      <h1>nyphren</h1>
      <nav>
        <ul className={styles.menu}>
          {menuItems?.map((menu: Menu, index: number) => {
            return <MenuItem item={menu} key={index} />;
          })}
        </ul>
      </nav>
      <a href="/about">about + contact</a>
    </header>
  );
}
