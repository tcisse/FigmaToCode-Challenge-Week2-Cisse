import React from "react";
import Image from "next/image";

export function Footer() {
  return (
    <div className="bg-white pt-20">
      <footer className="footer mt-auto flex lg:flex-row md:flex-row flex-col justify-between mx-auto gap-10 lg:max-w-7xl md:max-w-2xl max-w-[360px] mb-10">
        <div>
          <Image
            src="/assets/logo/coral_logo.svg"
            width={180}
            height={34}
            alt=""
          />
          <p className="text-base text-black-75 font-open-sans pt-4 capitalize mb-4 lg:w-[392px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
          <div className="flex space-x-10">
            <Image
              src="/assets/icons/facebook.svg"
              width={25}
              height={25}
              alt=""
            />
            <Image src="/assets/icons/x.svg" width={25} height={25} alt="" />
            <Image
              src="/assets/icons/facebook.svg"
              width={25}
              height={25}
              alt=""
            />
            <Image src="/assets/icons/x.svg" width={25} height={25} alt="" />
          </div>
        </div>
        <div>
          <h1 className="uppercase font-open-sans font-semibold text-base mb-6">
            catalog
          </h1>
          <ul className="capitalize space-y-4 font-open-sans text-black-75">
            <li className="hover:text-primary">Necklaces</li>
            <li className="hover:text-primary">hoodies</li>
            <li className="hover:text-primary">Jewelry Box</li>
            <li className="hover:text-primary">t-shirt</li>
            <li className="hover:text-primary">jacket</li>
          </ul>
        </div>
        <div>
          <h1 className="uppercase font-open-sans font-semibold text-base mb-6">
            ABOUT US
          </h1>
          <ul className="capitalize space-y-4 font-open-sans text-black-75">
            <li className="hover:text-primary">Our Producers</li>
            <li className="hover:text-primary">Sitemap</li>
            <li className="hover:text-primary">FAQ</li>
            <li className="hover:text-primary">About Us</li>
            <li className="hover:text-primary">Terms & Conditions</li>
          </ul>
        </div>
        <div>
          <h1 className="uppercase font-open-sans font-semibold text-base mb-6">
            CUSTOMER SERVICES
          </h1>
          <ul className="capitalize space-y-4 font-open-sans text-black-75">
            <li className="hover:text-primary">Contact Us</li>
            <li className="hover:text-primary">Track Your Order</li>
            <li className="hover:text-primary">Product Care & Repair</li>
            <li className="hover:text-primary">Book an Appointment</li>
            <li className="hover:text-primary">Shipping & Returns</li>
          </ul>
        </div>
      </footer>
      <div className="bg-black py-4">
        <div className="flex lg:flex-row md:flex-row flex-col justify-between items-center lg:space-y-0 md:space-y-0 space-y-5 lg:max-w-7xl md:max-w-2xl mx-auto">
        <h5 className="text-white text-base font-open-sans">© 2022 Coral , Inc.</h5>
        <div>
          <Image
            src="/assets/icons/icons_payment.svg"
            width={283}
            height={24}
            alt=""
          />
        </div>
        <h5 className="text-white text-base font-open-sans">Scroll To top</h5>
        </div>
      </div>
    </div>
  );
}
