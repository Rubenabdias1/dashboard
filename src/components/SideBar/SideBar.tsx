import {
  faClipboardList,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styles from "./sidebar.module.scss";

export const SideBar = () => {
  return (
    <nav className={styles.sidebar}>
      <ul>
        <li>
          <Link to="/sales">
            <FontAwesomeIcon icon={faDollarSign} /> Sales
          </Link>
        </li>
        <li>
          <Link to="/inventory">
            <FontAwesomeIcon icon={faClipboardList} /> Inventory
          </Link>
        </li>
      </ul>
    </nav>
  );
};
