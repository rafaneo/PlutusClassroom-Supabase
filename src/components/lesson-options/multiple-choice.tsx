"use client";

import { useEffect, useMemo, useState } from "react";
import FancyBorderButton from "../buttons/fancy-border-button";
import Image from "next/image";
import { cx } from "class-variance-authority";
import { TModularMultipleChoice } from "@/shared/types";

type TMultipleChoiceProps = TModularMultipleChoice["value"] & {
  onChange: (v: boolean) => void;
};

export default function MultipleChoice({
  options,
  errorText,
  question,
  onChange,
}: TMultipleChoiceProps) {
  const correctValues = useMemo(
    () =>
      options
        .filter((option) => option.is_correct)
        .map((option) => option.option_text),
    [options]
  );

  const [selected, setSelected] = useState<string[]>([]);

  useEffect(() => setSelected([]), [options]);

  useEffect(() => {
    const isValid =
      selected.every((s) => correctValues.includes(s)) &&
      correctValues.every((c) => selected.includes(c));
    onChange(isValid);
  }, [selected]);

  return (
    <div className="flex flex-col items-center p-4">
      <div className="w-full h-auto rounded-xl flex items-center gap-x-4 mb-4">
        <Image
          height={32}
          width={32}
          src="/narrator-think.png"
          alt="Continue Learning"
        />
        <div>
          <p className="font-semibold text-xl text-gray-900 text-left">
            {question}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full">
        {options.map((option, index) => {
          // const isSelected = selectedOption === option.value;
          // const isCorrect = option.value === correctAnswer;
          // const isWrong = submitted && isSelected && !isCorrect;

          const isSelected = selected.includes(option.option_text);

          let backgroundColor = "#F4FBFF";
          let borderColor = "transparent";

          // if (submitted) {
          //   if (isCorrect && isSelected) {
          //     backgroundColor = "#EFFDD2";
          //     borderColor = "#BAFF29";
          //   } else if (isWrong) {
          //     backgroundColor = "#FFFAF2";
          //     borderColor = "#FF7643";
          //   } else if (isCorrect) {
          //     backgroundColor = "#EFFDD2";
          //     borderColor = "#BAFF29";
          //   }
          // }

          return (
            <FancyBorderButton
              key={index}
              className={cx(
                "py-4 px-2 w-full text-center cursor-pointer transition-all duration-300 flex justify-between items-center !text-dark-blue",
                isSelected && "!border-indigo-500"
              )}
              style={{
                backgroundColor,
                // border: `1px solid ${borderColor}`,
                borderRadius: "10px",
              }}
              onClick={() =>
                setSelected((curr) =>
                  curr.includes(option.option_text)
                    ? curr.filter((v) => v !== option.option_text)
                    : [...curr, option.option_text]
                )
              }
            >
              {option.option_text}
              <input
                type="checkbox"
                checked={selected.includes(option.option_text)}
                className="rounded-md text-dark-blue"
              />
            </FancyBorderButton>
          );
        })}
      </div>

      {/* {submitted && (
        <div className="flex flex-col gap-y-4 my-2 w-full">
          {selectedOption === correctAnswer ? (
            <div className="flex flex-col w-full">
              <p className="text-[#BAFF29] font-semibold">Congratulations</p>
              <p className="text-[#BAFF29]">
                Budgeting helps you track your expenses, save money, and
                prevents you from overspending.
              </p>
            </div>
          ) : (
            <div className="flex flex-col w-full">
              <p className="text-[#FF7643] font-semibold">Wrong answer</p>
              <p className="text-[#FF7643]">
                Budgeting helps you track your expenses, save money, and
                prevents you from overspending.
              </p>
            </div>
          )}
          <div className="w-full h-[1px] bg-[#044B6B]" />
          <div className="flex flex-col w-full">
            <p className="text-[#044B6B] font-semibold">Correct answer is:</p>
            <p className="text-[#044B6B]">{correctAnswer}</p>
          </div>
        </div>
      )}

      <div className="w-full flex gap-x-4 text-[16px] font-semibold pt-4">
        <button className="w-full h-12 border-[1px] text-[#052240] border-[#052240] rounded-[7px]">
          Back
        </button>
        <button className="w-full h-12 text-[#052240] bg-[#BAFF29] rounded-[7px]">
          Next
        </button>
      </div> */}
    </div>
  );
}

// "use client";

// import { useEffect, useState } from "react";
// import FancyBorderButton from "../buttons/fancy-border-button";
// import { cx } from "class-variance-authority";

// type TMultipleChoiceProps = {
//   options: { value: string; label: string }[];
//   onChange: (v: string | null) => void;
// };

// export default function MultipleChoice({
//   options,
//   onChange,
// }: TMultipleChoiceProps) {
//   const [value, setValue] = useState<string | null>(null);

//   useEffect(() => onChange(value), [value]);

//   return (
//     <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
//       {options.map((option, index) => (
//         <FancyBorderButton
//           key={`${option.label}:${index}`}
//           className={cx(
//             "py-4 px-2 w-full text-center",
//             value === option.value ? "!border-indigo-500" : ""
//           )}
//           onClick={() => setValue(option.value)}
//         >
//           {option.label}
//         </FancyBorderButton>
//       ))}
//     </div>
//   );
// }
