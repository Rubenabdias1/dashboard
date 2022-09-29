import "./App.css";
import { AppWrapper } from "./components/AppWrapper/AppWrapper";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

function App() {
  return (
    <div className="App">
      <AppWrapper>
        <h1>Dashboard</h1>
      </AppWrapper>
    </div>
  );
}

export default App;
