import {
  faClipboardList,
  faDollarSign,
  faGear,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./sidebar.module.scss";
import { InlineIcon } from "@iconify/react";
import roundDashboard from "@iconify/icons-ic/round-dashboard";

export const SideBar = () => {
  return (
    <nav className={styles.sidebar}>
      <ul>
        <li>
          <a href="">
            <InlineIcon icon={roundDashboard} /> Dashboard
          </a>
        </li>
        <li>
          <a href="">
            <FontAwesomeIcon icon={faDollarSign} /> Sales
          </a>
        </li>
        <li>
          <a href="">
            <FontAwesomeIcon icon={faClipboardList} /> Inventory
          </a>
        </li>
        <li>
          <a href="">
            <InlineIcon icon="clarity:users-solid" /> Users
          </a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="">
            <FontAwesomeIcon icon={faGear} /> Settings
          </a>
        </li>
      </ul>
    </nav>
  );
};
