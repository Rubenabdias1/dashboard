import {
  faGear,
  faHouse,
  faList,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./sidebar.module.scss";

export const SideBar = () => {
  return (
    <nav className={styles.sidebar}>
      <ul>
        <li>
          <a href="">
            <FontAwesomeIcon icon={faHouse} /> Dashboard
          </a>
        </li>
        <li>
          <a href="">
            <FontAwesomeIcon icon={faList} /> Companies
          </a>
        </li>
        <li>
          <a href="">
            <FontAwesomeIcon icon={faUsers} /> Users
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
