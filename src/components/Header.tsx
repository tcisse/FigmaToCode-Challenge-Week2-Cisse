import React from "react";
import Image from "next/image";
import { HeroSection } from ".";

export function Header() {
  return (
    <header className="bg-stroke py-12">
      <div className="flex justify-between items-center lg:max-w-7xl max-w-[378px] mx-auto py-8">
        <Image
          src="/assets/icons/search_icon.svg"
          width={25}
          height={25}
          alt=""
          className="hidden lg:block"
        />
        <Image
          src="/assets/logo/coral_logo.svg"
          width={180}
          height={34}
          alt="logo"
        />
        <div className="flex gap-10">
          <div className="hidden lg:block">
            <div className="flex items-center gap-2">
              <Image
                src="/assets/icons/account_icon.svg"
                width={25}
                height={25}
                alt="logo"
              />
              <span>Account</span>
            </div>
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
        <hr className="lg:mb-8 mb-3 bg-black-5 border" />
        <ul className="grid grid-cols-2 lg:grid-cols-7 gap-4 lg:gap-0 justify-between font-open-sans text-base font-normal text-dark lg:mx-0 mx-4">
          <li className="hover:text-primary cursor-pointer">
            Jewelry & Accessories
          </li>
          <li className="hover:text-primary cursor-pointer">
            Clothing & Shoes
          </li>
          <li className="hover:text-primary cursor-pointer">Home & Living</li>
          <li className="hover:text-primary cursor-pointer">Wedding & Party</li>
          <li className="hover:text-primary cursor-pointer">
            Toys & Entertainment
          </li>
          <li className="hover:text-primary cursor-pointer">
            Art & Collectibles
          </li>
          <li className="hover:text-primary cursor-pointer">
            Craft Supplies & Tools
          </li>
        </ul>
      </div>
      <HeroSection />
    </header>
  );
}
