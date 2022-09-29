import "./App.css";
import { AppWrapper } from "./components/AppWrapper/AppWrapper";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function App() {
  return (
    <div className="App">
      <AppWrapper>
        <h1>Dashboard</h1>
        <Line
          data={{
            labels: ["Jun", "Jul", "Aug"],
            datasets: [
              {
                label: "",
                data: [5, 6, 7],
              },
              {
                label: "",
                data: [3, 2, 1],
              },
            ],
          }}
        />
        <Line
          data={{
            labels: ["Jun", "Jul", "Aug"],
            datasets: [
              {
                label: "",
                data: [5, 6, 7],
              },
              {
                label: "",
                data: [3, 2, 1],
              },
            ],
          }}
        />
      </AppWrapper>
    </div>
  );
}

export default App;
