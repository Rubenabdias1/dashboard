import {
  faClipboardList,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./sidebar.module.scss";

export const SideBar = () => {
  return (
    <nav className={styles.sidebar}>
      <ul>
        <li>
          <a href="/sales">
            <FontAwesomeIcon icon={faDollarSign} /> Sales
          </a>
        </li>
        <li>
          <a href="/inventory">
            <FontAwesomeIcon icon={faClipboardList} /> Inventory
          </a>
        </li>
      </ul>
    </nav>
  );
};
