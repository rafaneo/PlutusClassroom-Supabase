"use client";

import * as React from "react";
import { BarChart, BarChartProps } from "@mui/x-charts/BarChart";
import { cx } from "class-variance-authority";
import { useMemo } from "react";

type TInvestmentBarChart = Omit<
  BarChartProps,
  "xAxis" | "yAxis" | "series" | "dataset"
> & {
  initialInvestment: number;
  annualContribution: number;
  years: number;
  annualReturn: number;
};

export default function InvestmentBarChart({
  initialInvestment,
  annualContribution,
  years,
  annualReturn,
  ...props
}: TInvestmentBarChart) {
  const { startingAmounts, contributions, interests } = useMemo(() => {
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
    <BarChart
      {...props}
      width={600}
      height={300}
      className={cx("w-full h-auto")}
      series={[
        { data: startingAmounts, label: "Starting Amount", stack: "total" },
        { data: contributions, label: "Contributions", stack: "total" },
        { data: interests, label: "Interest", stack: "total" },
      ]}
    />
  );
}
