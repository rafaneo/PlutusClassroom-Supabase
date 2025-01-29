import { TModularRichText } from "@/shared/types";

export default function RichText({ content }: TModularRichText["value"]) {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: content }}
      className="font-semibold text-base p-3 px-6 bg-gray-100 rounded-xl"
    />
  );
}
