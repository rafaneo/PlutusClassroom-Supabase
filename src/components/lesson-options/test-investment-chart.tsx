"use client";

import * as React from "react";
import { BarChart, BarChartProps } from "@mui/x-charts/BarChart";
import { cx } from "class-variance-authority";
import { TextField } from "@mui/material";

type TInvestmentBarChart = Omit<
  BarChartProps,
  "xAxis" | "yAxis" | "series" | "dataset"
>;

export default function InvestmentBarChart() {
  const [initialInvestment, setInitialInvestment] = React.useState(1000);
  const [annualContribution, setAnnualContribution] = React.useState(100);
  const [years, setYears] = React.useState(10);
  const [annualReturn, setAnnualReturn] = React.useState(5);

  const { startingAmounts, contributions, interests } = React.useMemo(() => {
    const startingAmounts = Array(years + 1).fill(initialInvestment);
    const contributions = [];
    const interests = [];

    let totalContribution = 0;
    let currentAmount = initialInvestment;

    for (let year = 0; year <= years; year++) {
      if (year > 0) {
        totalContribution += annualContribution;
      }
      contributions.push(totalContribution);

      const interest =
        (currentAmount + totalContribution) * (annualReturn / 100);
      interests.push(interest);

      currentAmount =
        (currentAmount + annualContribution) * (1 + annualReturn / 100);
    }

    return { startingAmounts, contributions, interests };
  }, [years, initialInvestment, annualContribution, annualReturn]);

  return (
    <div>
      <BarChart
        width={600}
        height={300}
        className={cx("w-full h-auto")}
        series={[
          { data: startingAmounts, label: "Starting Amount", stack: "total" },
          { data: contributions, label: "Contributions", stack: "total" },
          { data: interests, label: "Interest", stack: "total" },
        ]}
      />
      <div className="flex flex-col space-y-4">
        <TextField
          className="!border-none !ring-0 !outline-none focus:!border-none focus:!ring-0 focus:!outline-none"
          fullWidth
          label="Initial Investment"
          variant="outlined"
          value={initialInvestment}
          onChange={(e) => setInitialInvestment(Number(e.target.value))}
        />
        <TextField
          className="!border-none !ring-0"
          fullWidth
          label="Annual Contribution"
          variant="outlined"
          value={annualContribution}
          onChange={(e) => setAnnualContribution(Number(e.target.value))}
        />
        <TextField
          className="!border-none !ring-0"
          fullWidth
          label="Years"
          variant="outlined"
          value={years}
          onChange={(e) => setYears(Number(e.target.value))}
        />
        <TextField
          className="!border-none !ring-0"
          fullWidth
          label="Annual Return"
          variant="outlined"
          value={annualReturn}
          onChange={(e) => setAnnualReturn(Number(e.target.value))}
        />
      </div>
    </div>
  );
}
