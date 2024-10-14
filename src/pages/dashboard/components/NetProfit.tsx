import Cards from "@/components/ui/Cards";
import { ChartContainer } from "@/components/ui/chart";
import {
  RadialBarChart,
  RadialBar,
  PolarGrid,
  PolarRadiusAxis,
  Label,
} from "recharts";
import { radialChartData } from "../arrayOfItems";

const NetProfit = ({ config }: { config: any }) => {
  return (
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
          config={config}
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
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
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
  );
};

export default NetProfit;
