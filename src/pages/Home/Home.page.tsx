import { Line } from "react-chartjs-2";
import { AppWrapper } from "../../components/AppWrapper/AppWrapper";
import { Card } from "../../components/Card/Card";
import { CardBody } from "../../components/Card/CardBody";
import { CardFooter } from "../../components/Card/CardFooter";
import { CardHeader } from "../../components/Card/CardHeader";
import styles from "./home.page.module.scss";

export const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <AppWrapper>
        <div className="header">
          <h1>Dashboard</h1>
        </div>
        <div className={styles.columns}>
          <div className={styles.column}>
            <Card>
              <CardHeader>
                <h2>Sales</h2>
              </CardHeader>
              <CardBody>
                <Line
                  data={{
                    labels: ["Jun", "Jul", "Aug"],
                    datasets: [
                      {
                        label: "Jun",
                        data: [5, 6, 7],
                      },
                      {
                        label: "Jul",
                        data: [3, 2, 1],
                      },
                    ],
                  }}
                />
              </CardBody>
              <CardFooter>Up 72%</CardFooter>
            </Card>
          </div>
          <div className={styles.column}>
            <Card>
              <CardHeader>
                <h2>Losses</h2>
              </CardHeader>
              <CardBody>
                <Line
                  data={{
                    labels: ["Jun", "Jul", "Aug"],
                    datasets: [
                      {
                        label: "Jun",
                        data: [5, 6, 7],
                      },
                      {
                        label: "Jul",
                        data: [3, 2, 1],
                      },
                    ],
                  }}
                />
              </CardBody>
              <CardFooter>Up 72%</CardFooter>
            </Card>
          </div>
        </div>
        <Card>
          <CardHeader>
            <h2>Users</h2>
          </CardHeader>
          <CardBody>
            <table style={{ width: "100%" }}>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>E-Mail</th>
                  <th>Session</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>2</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>3</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>4</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>5</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan={3}>Random</td>
                  <td></td>
                  <td></td>
                </tr>
              </tfoot>
            </table>
          </CardBody>
          <CardFooter>Up 72%</CardFooter>
        </Card>
      </AppWrapper>
    </div>
  );
};
