import { Route, Routes } from "react-router-dom";
import { LoginPage } from "./components/login-page";
import TradingDashboard from "./components/DashboardPage";
import { Positions } from "./components/position-page";
import { Pending } from "./components/PendingPage";
import { History } from "./components/HistoryPage";
import MarketPage from "./pages/MarketPage";

const App = () => {
  return (
    <div className= "text-white dark:text-black">  
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<TradingDashboard />}>
          <Route index element={<Positions />} />
          <Route path="/dashboard/pending" element={<Pending />} />
          <Route path="/dashboard/history" element={<History />} />
        </Route>
        <Route path="/market" element={<MarketPage />} />
      </Routes>
    </div>
  );
};

export default App;
