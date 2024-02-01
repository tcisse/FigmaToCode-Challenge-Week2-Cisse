import React from "react";
import Image from "next/image";
import { HeroSection } from ".";

export function Header() {
  return (
    <header className="bg-stroke py-12">
      <div className="flex justify-between items-center max-w-7xl mx-auto py-8">
        <Image
          src="/assets/icons/search_icon.svg"
          width={25}
          height={25}
          alt=""
        />
        <Image
          src="/assets/logo/coral_logo.svg"
          width={180}
          height={34}
          alt="logo"
        />
        <div className="flex gap-10">
          <div className="flex items-center gap-2">
            <Image
              src="/assets/icons/account_icon.svg"
              width={25}
              height={25}
              alt="logo"
            />
            <span>Account</span>
          </div>
          <div className="flex items-center gap-2">
            <Image
              src="/assets/icons/shop_icon.svg"
              width={25}
              height={25}
              alt="logo"
            />
            <span>Shoping</span>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto">
        <hr className="mb-8 bg-black-5 border" />
        <div>
          <ul className="flex justify-between font-open-sans text-base font-normal text-dark">
            <li>Jewelry & Accessories</li>
            <li>Clothing & Shoes</li>
            <li>Home & Living</li>
            <li>Wedding & Party</li>
            <li>Toys & Entertainment</li>
            <li>Art & Collectibles</li>
            <li>Craft Supplies & Tools</li>
          </ul>
        </div>
      </div>
      <HeroSection />
    </header>
  );
}
