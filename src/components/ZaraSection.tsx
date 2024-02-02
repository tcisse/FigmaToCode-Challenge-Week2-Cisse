/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";

export function ZaraSection() {
  return (
    <div className="relative lg:mt-16 overflow-hidden h-[30vh] sm:h-[60vh] lg:h-[70vh] w-full lg:mb-10">
      <img src="/assets/images/zara_background.svg" className="w-full" alt="" />
      <Image
        src="/assets/images/zara_logo.svg"
        width={676}
        height={309}
        alt=""
        className="absolute top-8 right-10 opacity-10"
      />
      <div className="text-white flex flex-col xl:gap-8 gap-4 2xl:gap-16 justify-end pb-16 lg:pb-8 xl:pb-16 absolute bottom-0 2xl:w-1/4 xl:w-[35%] lg:w-[40%] md:w-[50%] right-0 lg:-translate-x-2/4 lg:mx-0 mx-4">
        <img
          src="/assets/logo/zara_logo_white.svg"
          className="lg:w-[191px] w-[50px]"
          alt=""
        />
        <p className="lg:leading-loose lg:text-2xl">
          Lustrous yet understated. The new evening wear collection exclusively
          offered at the reopened Giorgio Armani boutique in Los Angeles.
        </p>
        <div>
          <button className="bg-white text-black hover:bg-primary lg:py-4 py-2 px-7 font-roboto mb-3">
            See Collection
          </button>
        </div>
      </div>
    </div>
  );
}
