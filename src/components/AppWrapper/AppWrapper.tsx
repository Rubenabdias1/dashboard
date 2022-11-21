import { NavBar } from "../NavBar/NavBar";
import { SideBar } from "../SideBar/SideBar";
import styles from "./appWrapper.module.scss";
import { Outlet } from "react-router-dom";

interface Props {}

export const AppWrapper: React.FC<Props> = () => {
  console.log("rendering");
  return (
    <div>
      <NavBar />
      <div>
        <SideBar />
        <main className={styles.main}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};
