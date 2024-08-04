import {
  Bar,
  BarChart,
  CartesianGrid,
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
  XAxis,
} from "recharts";
import { ChartConfig, ChartContainer } from "../ui/chart";
import {
  radialChartData,
  headerChips,
  barChartData,
  menuItems,
  dataTable,
  customerFeedback,
  NonDeliveredStatus,
} from "./arrayOfItems";
import "./style.css";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import Cards from "../ui/Cards";

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
          <div className="layer-one">
            {headerChips?.map((item: any, index: number) => (
              <Cards className="header-card" key={index}>
                <div className="header-card-item">
                  <i
                    className={item?.icon}
                    style={{
                      backgroundColor: item?.iconBgColor,
                      color: item?.iconColor,
                    }}
                  ></i>
                  <p>{item?.label}</p>
                </div>
                <div className="header-card-count">
                  <h5>{item?.count}</h5>
                  <p
                    style={
                      item?.profit === "up"
                        ? { color: "#12d112" }
                        : { color: "#F25E5E" }
                    }
                  >
                    <i className={`fa-solid fa-caret-${item?.profit}`}></i>{" "}
                    {item?.percent}
                  </p>
                </div>
              </Cards>
            ))}
          </div>
          <Cards className="bar-chart">
            <div className="barChart-header">
              <h3>Activity</h3>
              <Select>
                <SelectTrigger
                  className="w-[150px]"
                  style={{ backgroundColor: "var(--shadow)" }}
                >
                  <SelectValue placeholder="Weekly" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Weekly</SelectItem>
                  <SelectItem value="dark">Monthly</SelectItem>
                  <SelectItem value="system">Yearly</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="barChart-body">
              <ChartContainer
                config={barChartConfig}
                className="barChart-container"
              >
                <BarChart
                  accessibilityLayer
                  data={barChartData}
                  barSize={20}
                  barCategoryGap="5%"
                  barGap={0}
                  margin={{ top: 20, right: 40, left: 40, bottom: 5 }}
                >
                  <CartesianGrid vertical={false} />
                  <XAxis
                    dataKey="xAxis"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    tickFormatter={(value) => value.slice(0, 3)}
                  />
                  <Bar dataKey="desktop" fill="#7194FF" radius={50} />
                </BarChart>
              </ChartContainer>
            </div>
          </Cards>
          <Cards className="data-table">
            <h3>Recent Orders</h3>
            <div className="table-body">
              <table>
                <thead>
                  <tr>
                    <th>Customer</th>
                    <th>Order No.</th>
                    <th>Amount</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {dataTable?.map((item: any, index: number) => (
                    <tr key={index}>
                      <td
                        className="dda"
                        style={{
                          display: "flex",
                          gap: "1rem",
                          alignItems: "center",
                        }}
                      >
                        <img src={item?.logo} alt="logo" />
                        {item?.customer}
                      </td>
                      <td>{item?.orderNo}</td>
                      <td>{item?.amount}</td>
                      <td>
                        <span
                          style={{
                            backgroundColor: NonDeliveredStatus.includes(
                              item?.status
                            )
                              ? "red"
                              : "green",
                          }}
                        >
                          {item?.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Cards>
        </div>
        <div className="right-content">
          <Cards className="net-profit">
            <div className="net-profit-count">
              <p>Net Profit</p>
              <h3>$ 6759.25</h3>
              <p style={{ color: "#12d112" }}>
                <i className="fa-solid fa-caret-up"></i> 3%
              </p>
            </div>
            <div className="net-profit-chart">
              <ChartContainer
                config={radialChartDataConfig}
                className="mx-auto aspect-square max-h-[250px] chart-container"
              >
                <RadialBarChart
                  data={radialChartData}
                  startAngle={0}
                  endAngle={250}
                  innerRadius={80}
                  outerRadius={110}
                >
                  <PolarGrid
                    gridType="circle"
                    radialLines={false}
                    stroke="none"
                    className="first:fill-muted last:fill-background"
                    polarRadius={[86, 74]}
                  />
                  <RadialBar dataKey="visitors" background cornerRadius={10} />
                  <PolarRadiusAxis
                    tick={false}
                    tickLine={false}
                    axisLine={false}
                  >
                    <Label
                      content={({ viewBox }) => {
                        if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                          return (
                            <text
                              x={viewBox.cx}
                              y={viewBox.cy}
                              textAnchor="middle"
                              dominantBaseline="middle"
                            >
                              <tspan
                                x={viewBox.cx}
                                y={viewBox.cy}
                                className="fill-foreground text-4xl font-bold"
                              >
                                {radialChartData[0].visitors.toLocaleString()}
                              </tspan>
                              <tspan
                                x={viewBox.cx}
                                y={(viewBox.cy || 0) + 24}
                                className="fill-muted-foreground"
                              >
                                Goal Completed
                              </tspan>
                            </text>
                          );
                        }
                      }}
                    />
                  </PolarRadiusAxis>
                </RadialBarChart>
              </ChartContainer>
            </div>
          </Cards>
          <Cards className="menu">
            {menuItems?.map((item: any, index: number) => (
              <div className="menu-items" key={index}>
                <h3>
                  <i
                    className={item?.icon}
                    style={{
                      backgroundColor: item?.iconBgColor,
                      color: item?.iconColor,
                    }}
                  ></i>{" "}
                  {item?.label}
                </h3>
                <i className="fa-solid fa-chevron-right"></i>
              </div>
            ))}
          </Cards>
          <Cards className="testimonial">
            <h3>Customer's Feedback</h3>
            {customerFeedback?.map((item: any, index: number) => (
              <div className="testimonial-body" key={index}>
                <div className="testimonial-header">
                  <img src={item?.logo} alt="logo" />
                  {item?.name}
                </div>
                <div className="ratings">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <i className="fa-solid fa-star" key={i}></i>
                  ))}
                </div>
                <p>{item?.comment}</p>
              </div>
            ))}
          </Cards>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
