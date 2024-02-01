import React from "react";
import Image from "next/image";

export function CardHover() {
  return (
    <div className="absolute bottom-0 left-0 right-0 hidden group-hover:flex justify-between px-3 py-4 bg-black">
      <div className="flex gap-4">
        <Image
          src="/assets/icons/like_icon.svg"
          width={25}
          height={25}
          alt=""
        />
        <Image
          src="/assets/icons/search_white_icon.svg"
          width={25}
          height={25}
          alt=""
        />
      </div>
      <button className="flex items-end gap-3 text-white bg-black">
        <Image
          src="/assets/icons/shop_white_icon.svg"
          width={25}
          height={25}
          alt="logo"
        />
        Shop Now
      </button>
    </div>
  );
}
