import styles from "./navbar.module.scss";
import { Avatar } from "../Avatar/Avatar";
import { Button } from "../Button/Button";

export const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <a href="/">
        <h1>Demo Company</h1>
      </a>
      <div>
        <Button className={`${styles.avatarButton} ${styles.navButton}`}>
          Ruben Nunez
          <Avatar src="https://avatars.githubusercontent.com/u/37821608?v=4" />
        </Button>
      </div>
    </nav>
  );
};
