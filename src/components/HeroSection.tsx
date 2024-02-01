import React from "react";
import Image from "next/image";

export function HeroSection() {
  return (
    <div className="relative overflow-x-hidden">
      <Image
        src="/assets/images/flower_left.svg"
        width={133}
        height={66}
        className="absolute bottom-10 -left-4"
        alt=""
      />
      <Image
        src="/assets/images/flower.svg"
        width={133}
        height={66}
        className="absolute bottom-20 -right-4"
        alt=""
      />
      <div className="max-w-7xl mx-auto mt-20 flex lg:flex-row flex-col justify-between items-center">
        <div className="space-y-14">
          <h1 className="text-7xl font-roboto font-medium">Collections</h1>
          <p className=" text-3xl font-roboto font-semibold capitalize">
            you can explore ans shop many differnt collection <br /> from
            various barands here.
          </p>
          <button className="flex gap-3 text-white items-center py-4 bg-black px-7 w-44">
            <Image
              src="/assets/icons/shop_white_icon.svg"
              width={25}
              height={25}
              alt="logo"
            />
            Shop Now
          </button>
        </div>
        <Image
          src="/assets/images/hero_image.svg"
          width={424}
          height={778}
          alt="logo"
        />
      </div>
      
    </div>
  );
}
