import { LineChart, LineChartProps, areaElementClasses } from "@mui/x-charts/LineChart";

type TInvestmentLineChartProps = Omit<
  LineChartProps,
  "xAxis" | "yAxis" | "series" | "dataset"
> & {
  data: {
    label: string;
    value: number;
  }[];
};

export default function InvestmentLineChart({
  className,
  data,
  ...props
}: TInvestmentLineChartProps) {
  return (
    <LineChart
      xAxis={[{ data: data.map((_, i) => i), valueFormatter: (i) => data[i].label }]}
      series={[
        {
          data: data.map((v) => v.value),
          color: "#044B6B", // Line color (Blue)
          area: true,       // Enable area fill
        },
      ]}
      width={500}
      height={300}
      className={`w-full h-auto ${className}`}
      sx={{
        [`& .${areaElementClasses.root}`]: {
          fill: "#EAFFBE", // Solid light green fill
        },
      }}
      {...props}
    />
  );
}
