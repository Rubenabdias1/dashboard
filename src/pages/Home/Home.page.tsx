import { Line } from "react-chartjs-2";
import { AppWrapper } from "../../components/AppWrapper/AppWrapper";
import { Card } from "../../components/Card/Card";
import { CardBody } from "../../components/Card/CardBody";
import { CardFooter } from "../../components/Card/CardFooter";
import { CardHeader } from "../../components/Card/CardHeader";
import { Table } from "../../components/Table/Table";
import { TableHeader } from "../../components/Table/TableHeader";
import { TableBody } from "../../components/Table/TableBody";
import { Button } from "../../components/Button/Button";
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
            <Table style={{ width: "100%" }}>
              <TableHeader>
                <tr>
                  <th>ID</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>E-Mail</th>
                  <th>Session</th>
                </tr>
              </TableHeader>
              <TableBody>
                <tr>
                  <td align="right">1</td>
                  <td>Ruben</td>
                  <td>Nunez</td>
                  <td>superclubanimal@gmail.com</td>
                  <td align="center">
                    <Button variant="contained" color="blue" size="sm">
                      Sign Out
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td align="right">2</td>
                  <td>Franklin</td>
                  <td>Torres</td>
                  <td>no@gmail.com</td>
                  <td align="center">
                    <Button variant="contained" color="red" size="sm">
                      Sign Out
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td align="right">3</td>
                  <td>Angel</td>
                  <td>Torres</td>
                  <td>que_no_dije@gmail.com</td>
                  <td align="center">
                    <Button variant="contained" size="sm">
                      Sign Out
                    </Button>
                  </td>
                </tr>
              </TableBody>
            </Table>
          </CardBody>
        </Card>
      </AppWrapper>
    </div>
  );
};
