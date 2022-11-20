import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu } from "../../types";
import Dropdown from "../Dropdown";
import styles from "./styles.module.scss";

interface IMenuItem {
  item: Menu;
}

export default function MenuItem({ item }: IMenuItem) {
  const [dropdown, setDropdown] = useState(false);
  const navigate = useNavigate();
  return (
    <li className={styles["menu-item"]}>
      {item.submenus ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            onMouseEnter={() => setDropdown((prev: boolean) => !prev)}
            onClick={() => navigate(`${item.url}`)}
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
