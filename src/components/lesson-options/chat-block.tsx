import { MODULAR_BG_COLORS, MODULAR_TEXT_COLORS } from "@/shared/constants";
import { TModularChat } from "@/shared/types";
import { getMediaPath } from "@/shared/utils";
import { cx } from "class-variance-authority";
import Image from "next/image";
//
export default function ChatBlock({
  content,
  profileSrc,
  bgColor,
  textColor,
}: TModularChat["value"]) {
  return (
    <div className="flex mb-4 cursor-pointer gap-x-2 w-full">
      {/* {JSON.stringify({ bgColor, c: MODULAR_BG_COLORS[bgColor as any] })} */}
      <div className="min-w-20 h-20 rounded-full flex items-center justify-center bg-gray-100">
        <Image
          height={40}
          width={40}
          src={getMediaPath(profileSrc.file)}
          alt={profileSrc.title}
          className="min-w-20 min-h-20 rounded-full object-contain"
        />
      </div>
      <div
        style={{
          backgroundColor:
            MODULAR_BG_COLORS[bgColor as any] ?? MODULAR_BG_COLORS.black,
        }}
        className="flex rounded-lg p-3 gap-3"
      >
        <p
          style={{
            color:
              MODULAR_TEXT_COLORS[textColor as any] ??
              MODULAR_TEXT_COLORS.white,
          }}
          className="font-bold text-base"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </div>
  );
}
