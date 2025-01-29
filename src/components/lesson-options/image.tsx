import { TModularImage } from "@/shared/types";
import { getMediaPath } from "@/shared/utils";
import Image from "next/image";
//
export default function LessonImage({ imageSrc }: TModularImage["value"]) {
  const { title, file, width, height } = imageSrc;
  return (
    <Image
      width={width}
      height={height}
      alt={title}
      src={getMediaPath(file)}
      priority
      className="w-full h-auto p-2 rounded-2xl"
    />
  );
}
