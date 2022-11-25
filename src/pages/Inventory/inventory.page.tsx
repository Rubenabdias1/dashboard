import { Bar, Doughnut } from "react-chartjs-2";
import { Card } from "../../components/Card/Card";
import { CardBody } from "../../components/Card/CardBody";
import { CardFooter } from "../../components/Card/CardFooter";
import { CardHeader } from "../../components/Card/CardHeader";
import { Table } from "../../components/Table/Table";
import { TableHeader } from "../../components/Table/TableHeader";
import { TableBody } from "../../components/Table/TableBody";
import { Input } from "../../components/Input/Input";
import { MONTHS } from "../../utils/months";
import styles from "./inventory.page.module.scss";
const data = {
  labels: ["Fulfilled"],
  datasets: [
    {
      label: "Deliveries",
      data: [75000, 25000],
      backgroundColor: ["rgb(255, 99, 132)", "rgb(255, 205, 86, 0)"],
      hoverOffset: 4,
    },
  ],
};

const stockData = [
  { id: 1, name: "Gucci Bag", sold: 10000, stock: 18000, max: 20000 },
  { id: 2, name: "Adidas", sold: 10000, stock: 10000, max: 30000 },
  { id: 3, name: "Gucci Bag", sold: 10000, stock: 18000, max: 20000 },
  { id: 4, name: "Adidas", sold: 10000, stock: 1000, max: 2000 },
  { id: 5, name: "Gucci Bag", sold: 10000, stock: 27, max: 100 },
  { id: 6, name: "Adidas", sold: 10000, stock: 10000, max: 30000 },
  { id: 7, name: "Gucci Bag", sold: 10000, stock: 18000, max: 20000 },
  { id: 8, name: "Adidas", sold: 10000, stock: 18000, max: 30000 },
];

export const InventoryPage = () => {
  return (
    <div className={styles.inventoryPage}>
      <div className="header">
        <h1>Inventory</h1>
      </div>
      <div className={styles.columns}>
        <div className={styles.column}>
          <Card>
            <CardHeader>
              <h2>Dispatch Orders</h2>
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
          </Card>
        </div>
        <div className={styles.column}>
          <Card>
            <CardHeader>
              <h2>Deliveries</h2>
            </CardHeader>
            <CardBody>
              <Doughnut data={data} style={{ maxHeight: 200 }} />
            </CardBody>
            <CardFooter>75%</CardFooter>
          </Card>
        </div>
      </div>
      <Card>
        <CardHeader>
          <h2>Stock</h2>
        </CardHeader>
        <CardBody>
          <Table style={{ width: "100%" }}>
            <TableHeader>
              <tr>
                <th>ID</th>
                <th>Item</th>
                <th>Sales</th>
                <th colSpan={3}>Stock</th>
              </tr>
            </TableHeader>
            <TableBody>
              {stockData.map((item) => (
                <tr>
                  <td align="right">{item.id}</td>
                  <td>{item.name}</td>
                  <td align="right">{item.sold}</td>
                  <td align="right">{item.stock}</td>
                  <td>
                    <progress id="file" value={item.stock} max={item.max} />
                  </td>
                  <td>
                    {parseInt(((item.stock / item.max) * 100).toString())}%
                  </td>
                </tr>
              ))}
            </TableBody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
};
