import "./style.css";
import { ChartConfig } from "@/components/ui/chart";
import HeaderChips from "./components/HeaderChips";
import BarChartSection from "./components/BarChartSection";
import DataTable from "./components/DataTable";
import NetProfit from "./components/NetProfit";
import Menu from "./components/Menu";
import CustomerFeedback from "./components/CustomerFeedback";

const Dashboard = () => {
  const radialChartDataConfig = {
    visitors: {
      label: "Visitors",
    },
    safari: {
      label: "Safari",
      color: "hsl(var(--chart-2))",
    },
  } satisfies ChartConfig;

  const barChartConfig = {
    desktop: {
      label: "Desktop",
      color: "hsl(var(--chart-1))",
    },
  } satisfies ChartConfig;

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="dashboard-wrapper">
        <div className="left-content">
          <HeaderChips />
          <BarChartSection config={barChartConfig} />
          <DataTable />
        </div>
        <div className="right-content">
          <NetProfit config={radialChartDataConfig} />
          <Menu />
          <CustomerFeedback />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
