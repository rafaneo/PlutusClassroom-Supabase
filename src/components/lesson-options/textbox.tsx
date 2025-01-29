import { MODULAR_BG_COLORS, MODULAR_TEXT_COLORS } from "@/shared/constants";
import { cx } from "class-variance-authority";

export type TTextboxProps = {
  bgColor: string;
  textColor: string;
  content: string;
};

export default function Textbox({
  bgColor,
  textColor,
  content,
}: TTextboxProps) {
  return (
    <div
      className={cx(
        MODULAR_BG_COLORS[bgColor] ?? "bg-black",
        MODULAR_TEXT_COLORS[textColor] ?? "text-white",
        "w-full h-auto p-2"
      )}
    >
      <span dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}
