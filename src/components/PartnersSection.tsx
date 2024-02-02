import React from "react";
import Image from "next/image";

export function PartnersSection() {
  return (
    <div className="">
      <div className="grid lg:grid-cols-6 md:grid-cols-3 gap-4 grid-cols-2 py-10 lg:max-w-7xl mx-auto">
        <div>
          <Image src="/assets/logo/01.svg" width={200} height={70} alt="" />
        </div>
        <div>
          <Image src="/assets/logo/02.svg" width={200} height={70} alt="" />
        </div>
        <div>
          <Image src="/assets/logo/05.svg" width={200} height={70} alt="" />
        </div>
        <div>
          <Image src="/assets/logo/04.svg" width={200} height={70} alt="" />
        </div>
        <div>
          <Image src="/assets/logo/03.svg" width={200} height={70} alt="" />
        </div>
      </div>
    </div>
  );
}
