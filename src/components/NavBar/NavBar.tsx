import styles from "./navbar.module.scss";
import { Avatar } from "../Avatar/Avatar";
import { Button } from "../Button/Button";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <Link to="/">
        <h1>Demo Company</h1>
      </Link>
      <div>
        <Button className={`${styles.avatarButton} ${styles.navButton}`}>
          Ruben Nunez
          <Avatar src="https://avatars.githubusercontent.com/u/37821608?v=4" />
        </Button>
      </div>
    </nav>
  );
};
