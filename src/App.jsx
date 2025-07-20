import { Route, Routes } from "react-router-dom";
import { LoginPage } from "./components/login-page";
import TradingDashboard from "./components/DashboardPage";
import { Positions } from "./components/position-page";
import { Pending } from "./components/PendingPage";
import { History } from "./components/HistoryPage";

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard" element={<TradingDashboard />}>
        <Route index element={<Positions />} />
        <Route path="pending" element={<Pending />} />
        <Route path="history" element={<History />} />
      </Route>
    </Routes>
  );
};

export default App;
