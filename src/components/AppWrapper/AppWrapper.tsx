import { NavBar } from "../NavBar/NavBar";
import { SideBar } from "../SideBar/SideBar";
import styles from "./appWrapper.module.scss";

interface Props {
  children: React.ReactNode;
}

export const AppWrapper: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <NavBar />
      <div>
        <SideBar />
        <main className={styles.main}>{children}</main>
        <h1>Dashboard</h1>
      </div>
    </div>
  );
};
