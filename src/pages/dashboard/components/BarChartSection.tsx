import Cards from "@/components/ui/Cards";
import { BarChart, Bar, CartesianGrid, XAxis } from "recharts";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";
import { ChartContainer } from "@/components/ui/chart";
import { barChartData } from "../arrayOfItems";

const BarChartSection = ({ config }: { config: any }) => {
  return (
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
        <ChartContainer config={config} className="barChart-container">
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
  );
};

export default BarChartSection;
