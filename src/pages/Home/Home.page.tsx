import { Bar, Line } from "react-chartjs-2";
import { AppWrapper } from "../../components/AppWrapper/AppWrapper";
import { Card } from "../../components/Card/Card";
import { CardBody } from "../../components/Card/CardBody";
import { CardFooter } from "../../components/Card/CardFooter";
import { CardHeader } from "../../components/Card/CardHeader";
import { Table } from "../../components/Table/Table";
import { TableHeader } from "../../components/Table/TableHeader";
import { TableBody } from "../../components/Table/TableBody";
import styles from "./home.page.module.scss";
import { Input } from "../../components/Input/Input";
import { MONTHS } from "../../utils/months";

export const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <AppWrapper>
        <div className="header">
          <h1>Sales</h1>
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
                    labels: MONTHS.slice(0, 10),
                    datasets: [
                      {
                        label: "Yearly Sales to Date",
                        data: [
                          65000, 80000, 81000, 56000, 55000, 40000, 50500,
                          76250, 77000, 101384,
                        ],
                        fill: false,
                        borderColor: "rgb(75, 192, 192)",
                        tension: 0.1,
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
                <h2>Orders</h2>
              </CardHeader>
              <CardBody>
                <Bar
                  data={{
                    labels: MONTHS.slice(0, 11),
                    datasets: [
                      {
                        label: "Orders",
                        data: [
                          650, 590, 800, 810, 560, 550, 400, 762, 1770, 2013,
                          4025,
                        ],
                        backgroundColor: [
                          "rgba(255, 99, 132, 0.2)",
                          "rgba(255, 159, 64, 0.2)",
                          "rgba(255, 205, 86, 0.2)",
                          "rgba(75, 192, 192, 0.2)",
                          "rgba(54, 162, 235, 0.2)",
                          "rgba(153, 102, 255, 0.2)",
                          "rgba(201, 203, 207, 0.2)",
                        ],
                        borderColor: [
                          "rgb(255, 99, 132)",
                          "rgb(255, 159, 64)",
                          "rgb(255, 205, 86)",
                          "rgb(75, 192, 192)",
                          "rgb(54, 162, 235)",
                          "rgb(153, 102, 255)",
                          "rgb(201, 203, 207)",
                        ],
                        borderWidth: 1,
                      },
                    ],
                  }}
                  options={{
                    scales: {
                      y: {
                        beginAtZero: true,
                      },
                    },
                  }}
                />
              </CardBody>
              <CardFooter>Up 72%</CardFooter>
            </Card>
          </div>
        </div>
        <Card>
          <CardHeader>
            <h2>Top Sellers</h2>
          </CardHeader>
          <CardBody>
            <Table style={{ width: "100%" }}>
              <TableHeader>
                <tr>
                  <th></th>
                  <th>ID</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Sales</th>
                  <th>Goal</th>
                  <th>Progress</th>
                </tr>
              </TableHeader>
              <TableBody>
                <tr>
                  <td width="1rem">
                    <Input
                      type="checkbox"
                      variant="outlined"
                      disabled
                      checked
                    />
                  </td>
                  <td align="right">1</td>
                  <td>Ruben</td>
                  <td>Nunez</td>
                  <td align="right">$18,000.00</td>
                  <td align="right">$10,000.00</td>
                  <td>
                    <progress id="file" value="100" max="100">
                      100%
                    </progress>
                  </td>
                </tr>
                <tr>
                  <td width="1rem">
                    <Input type="checkbox" variant="outlined" disabled />
                  </td>
                  <td align="right">2</td>
                  <td>Franklin</td>
                  <td>Torres</td>
                  <td align="right">$8,000.00</td>
                  <td align="right">$10,000.00</td>
                  <td>
                    <progress id="file" value="80" max="100">
                      80%
                    </progress>
                  </td>
                </tr>
                <tr>
                  <td width="1rem">
                    <Input type="checkbox" variant="outlined" disabled />
                  </td>
                  <td align="right">3</td>
                  <td>Luke</td>
                  <td>Emia</td>
                  <td align="right">$7,500.00</td>
                  <td align="right">$10,000.00</td>
                  <td>
                    <progress id="file" value="75" max="100">
                      95%
                    </progress>
                  </td>
                </tr>
                <tr>
                  <td width="1rem">
                    <Input type="checkbox" variant="outlined" disabled />
                  </td>
                  <td align="right">4</td>
                  <td>Angel</td>
                  <td>Torres</td>
                  <td align="right">$9,500.00</td>
                  <td align="right">$10,000.00</td>
                  <td>
                    <progress id="file" value="95" max="100">
                      95%
                    </progress>
                  </td>
                </tr>
                <tr>
                  <td width="1rem">
                    <Input type="checkbox" variant="outlined" disabled />
                  </td>
                  <td align="right">5</td>
                  <td>John</td>
                  <td>Snow</td>
                  <td align="right">$6,800.00</td>
                  <td align="right">$10,000.00</td>
                  <td>
                    <progress id="file" value="68" max="100">
                      95%
                    </progress>
                  </td>
                </tr>
                <tr>
                  <td width="1rem">
                    <Input
                      type="checkbox"
                      variant="outlined"
                      disabled
                      checked
                    />
                  </td>
                  <td align="right">6</td>
                  <td>Arya</td>
                  <td>Stark</td>
                  <td align="right">$10,800.00</td>
                  <td align="right">$7,000.00</td>
                  <td>
                    <progress id="file" value="100" max="100">
                      95%
                    </progress>
                  </td>
                </tr>
                <tr>
                  <td width="1rem">
                    <Input type="checkbox" variant="outlined" disabled />
                  </td>
                  <td align="right">7</td>
                  <td>Peter</td>
                  <td>Quill</td>
                  <td align="right">$4,800.00</td>
                  <td align="right">$6,000.00</td>
                  <td>
                    <progress id="file" value={(4800 / 6000) * 100} max="100">
                      95%
                    </progress>
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
