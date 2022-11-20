import { Submenu } from "../../types";
import styles from "./styles.module.scss";

interface IDropdown {
  submenus: Submenu[];
  dropdown: boolean;
  setDropdown: (dropdown: boolean) => void;
}

export default function Dropdown({
  submenus,
  dropdown,
  setDropdown,
}: IDropdown) {
  return (
    <ul className={`${styles.dropdown} ${dropdown ? styles.show : null}`}>
      {submenus?.map((submenu: Submenu, index: number) => {
        return (
          <li
            key={index}
            className={styles["menu-item"]}
            onMouseLeave={() => setDropdown(!dropdown)}
          >
            <a href={submenu.url}>{submenu.title}</a>
          </li>
        );
      })}
    </ul>
  );
}
