import { useState } from "react";
import { Menu } from "../../types";
import Dropdown from "../Dropdown";
import styles from "./styles.module.scss";

interface IMenuItem {
  item: Menu;
}

export default function MenuItem({ item }: IMenuItem) {
  const [dropdown, setDropdown] = useState(false);
  return (
    <li className={styles["menu-item"]}>
      {item.submenus ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            onMouseEnter={() => setDropdown((prev: boolean) => !prev)}
          >
            {item.title}
          </button>
          <Dropdown
            submenus={item.submenus}
            dropdown={dropdown}
            setDropdown={setDropdown}
          />
        </>
      ) : (
        <a href={item.url}>{item.title}</a>
      )}
    </li>
  );
}
