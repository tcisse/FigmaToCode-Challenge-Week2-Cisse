import React from "react";
import Image from "next/image";

export function PartnersSection() {
  return (
    <div className="">
    <div className="flex lg:flex-row md:flex-row justify-center space-x-12 py-10 overflow-x-hidden">
      <Image src="/assets/logo/01.svg" width={200} height={70} alt="" />
      <Image src="/assets/logo/02.svg" width={200} height={70} alt="" />
      <Image src="/assets/logo/03.svg" width={200} height={70} alt="" />
      <Image src="/assets/logo/04.svg" width={200} height={70} alt="" />
      <Image src="/assets/logo/05.svg" width={200} height={70} alt="" />
    </div>

    </div>
  );
}
