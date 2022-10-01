import { faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./navbar.module.scss";
import { Avatar } from "../Avatar/Avatar";
import { Button } from "../Button/Button";

export const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <a href="">
        <h1>Company Name</h1>
      </a>
      <div>
        <Button className={styles.navButton}>
          <FontAwesomeIcon icon={faBell} />
        </Button>
        <Button className={`${styles.avatarButton} ${styles.navButton}`}>
          Ruben Nunez
          <Avatar src="https://avatars.githubusercontent.com/u/37821608?v=4" />
        </Button>
      </div>
    </nav>
  );
};
