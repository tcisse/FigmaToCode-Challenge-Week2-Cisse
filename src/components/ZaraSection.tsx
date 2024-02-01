/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";

export function ZaraSection() {
  return (
    <div className="relative mt-16 overflow-hidden hidden md:block mb-10">
      <img src="/assets/images/zara_background.svg" className="w-full" alt="" />
      <Image
        src="/assets/images/zara_logo.svg"
        width={676}
        height={309}
        alt=""
        className="absolute top-8 right-10 opacity-10"
      />
      <div className="text-white flex flex-col xl:gap-8 gap-4 2xl:gap-16 justify-end pb-4 lg:pb-8 xl:pb-16 absolute bottom-0 m 2xl:w-1/4 xl:w-[35%] lg:w-[40%] md:w-[50%] right-0 -translate-x-2/4">
        <img
          src="/assets/logo/zara_logo_white.svg"
          className="w-[191px]"
          alt=""
        />
        <p className="leading-loose text-2xl">
          Lustrous yet understated. The new evening wear collection exclusively
          offered at the reopened Giorgio Armani boutique in Los Angeles.
        </p>
        <div>
          <button className="bg-white text-black hover:bg-primary py-4 px-7 font-roboto">
            See Collection
          </button>
        </div>
      </div>
    </div>
  );
}
