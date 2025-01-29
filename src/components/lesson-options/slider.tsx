"use client";

import { useEffect, useState } from "react";
import FancyBorderButton from "../buttons/fancy-border-button";
import { TModularSlider } from "@/shared/types";

type TSliderProps = TModularSlider["value"] & {
  onChange: (v: number) => void;
};

export default function Slider({
  label,
  rangeMin,
  rangeMax,
  initialValue = rangeMin,
  valuePrefix,
  valueSuffix,
  onChange,
}: TSliderProps) {
  const [value, setValue] = useState<number>(initialValue);

  useEffect(() => onChange(value), [value]);

  return (
    <FancyBorderButton className="flex flex-col space-y-4 py-4 px-2 w-full">
      <div className="w-full inline-flex items-center justify-between space-x-4 text-dark-blue">
        {label && <p>{label}</p>}
        <p className="text-xl text-dark-blue">
          {valuePrefix}
          {value}
          {valueSuffix}
        </p>
        {/* € */}
      </div>
      <input
        type="range"
        onChange={(e) => setValue(Number(e.target.value))}
        defaultValue={value.toString()}
        min={rangeMin.toString()}
        max={rangeMax.toString()}
        className="w-full cursor-pointer bg-transparent accent-dark-blue"
      />
    </FancyBorderButton>
  );
}
