import { faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./navbar.module.scss";
import { Avatar } from "../Avatar/Avatar";

export const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <h1>Company Name</h1>
      <div>
        <button>
          <FontAwesomeIcon icon={faBell} />
        </button>
        <button className={styles.avatarButton}>
          Ruben Nunez{" "}
          <Avatar src="https://avatars.githubusercontent.com/u/37821608?v=4" />
        </button>
      </div>
    </nav>
  );
};
