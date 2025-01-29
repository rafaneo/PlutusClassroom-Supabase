"use client";

import { useEffect, useMemo, useState } from "react";
import FancyBorderButton from "../buttons/fancy-border-button";
import { cx } from "class-variance-authority";
import Image from "next/image";
import { TModularBudgetMultiselect } from "@/shared/types";
import { getMediaPath } from "@/shared/utils";

type TBudgetMultiselectProps = TModularBudgetMultiselect["value"] & {
  onChange: (isValid: boolean) => void;
};
//
export default function BudgetMultiselect({
  budget,
  label,
  options,
  currencyPrefix,
  onChange,
}: TBudgetMultiselectProps) {
  const correctValues = useMemo(
    () =>
      options
        .filter((option) => option.is_correct)
        .map((option) => option.label),
    [options]
  );

  const [selected, setSelected] = useState<string[]>([]);

  useEffect(() => {
    const isValid =
      selected.every((s) => correctValues.includes(s)) &&
      correctValues.every((c) => selected.includes(c));
    onChange(isValid);
  }, [selected]);

  return (
    <div className="flex flex-col space-y-3 p-4 rounded-lg w-full">
      {/* <pre>{(JSON.stringify({ options }), null, 2)}</pre> */}
      <p className="font-bold text-lg text-dark-blue">{label}</p>
      <div className="flex-flex-col space-y-2">
        {options.map((option, index) => (
          <FancyBorderButton
            key={`${option.label}:${index}`}
            className={cx(
              "py-4 px-2 w-full flex gap-x-1",
              selected.includes(option.label) ? "!border-indigo-500" : ""
            )}
            onClick={() =>
              setSelected((curr) =>
                curr.includes(option.label)
                  ? curr.filter((v) => v !== option.label)
                  : [...curr, option.label]
              )
            }
          >
            <Image
              width={60}
              height={60}
              src={getMediaPath((option.iconSrc as any).file)}
              alt={option.label}
            />
            <p className="font-bold text-lg text-dark-blue">{option.label}</p>
            <div className="grow" />
            <p className="font-bold text-xl text-dark-blue">
              {currencyPrefix}
              {option.value}
            </p>
            <input
              type="checkbox"
              checked={selected.includes(option.label)}
              className="rounded-md text-dark-blue"
            />
          </FancyBorderButton>
        ))}
      </div>
      <div className="flex justify-between items-center">
        <p className="font-bold text-lg text-dark-blue">
          Budget: {currencyPrefix}
          {budget}
        </p>
        <p className="font-bold text-lg text-dark-blue">
          Total: {currencyPrefix}
          {selected.reduce(
            (sum, curr) =>
              sum + Number(options.find((o) => o.label === curr)?.value ?? 0),
            0
          )}
        </p>
      </div>
    </div>
  );
}
