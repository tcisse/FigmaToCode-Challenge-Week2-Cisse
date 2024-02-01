import React from "react";
import Image from "next/image";

export function Footer() {
  return (
    <div className="bg-white pt-20">
      <footer className="footer mt-auto flex justify-between mx-auto gap-10 max-w-7xl mb-10">
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
            <li>Necklaces</li>
            <li>hoodies</li>
            <li>Jewelry Box</li>
            <li>t-shirt</li>
            <li>jacket</li>
          </ul>
        </div>
        <div>
          <h1 className="uppercase font-open-sans font-semibold text-base mb-6">
            ABOUT US
          </h1>
          <ul className="capitalize space-y-4 font-open-sans text-black-75">
            <li>Our Producers</li>
            <li>Sitemap</li>
            <li>FAQ</li>
            <li>About Us</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div>
          <h1 className="uppercase font-open-sans font-semibold text-base mb-6">
            CUSTOMER SERVICES
          </h1>
          <ul className="capitalize space-y-4 font-open-sans text-black-75">
            <li>Contact Us</li>
            <li>Track Your Order</li>
            <li>Product Care & Repair</li>
            <li>Book an Appointment</li>
            <li>Shipping & Returns</li>
          </ul>
        </div>
      </footer>
      <div className="bg-black py-4">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
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
