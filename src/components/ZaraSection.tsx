/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";

export function ZaraSection() {
  return (
    <div className="relative flex justify-between">
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-[url('/assets/images/zara_background.svg')] bg-cover bg-no-repeat w-full h-[1000px]"></div>
      <div className="relative">
        <div className="absolute">
          <Image
            src="/assets/images/zara_logo.svg"
            width={100}
            height={20}
            alt=""
          />
          <div className="text-white">
            Lustrous yet understated. The new evening wear collection
            exclusively offered at the reopened Giorgio Armani boutique in Los
            Angeles.
          </div>
          <button className="bg-white px-3 py-2">See collection</button>
        </div>
      </div>
    </div>
  );
}
