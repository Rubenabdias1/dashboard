import { faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./navbar.module.scss";
import { Avatar } from "../Avatar/Avatar";
import { Button } from "../Button/Button";

export const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <h1>Company Name</h1>
      <div>
        <Button>
          <FontAwesomeIcon icon={faBell} />
        </Button>
        <Button className={styles.avatarButton}>
          Ruben Nunez{" "}
          <Avatar src="https://avatars.githubusercontent.com/u/37821608?v=4" />
        </Button>
      </div>
    </nav>
  );
};
