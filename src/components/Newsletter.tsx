import React from "react";
import Image from "next/image";

function NewsletterCardHover() {
  return (
    <div className="absolute hidden top-0 left-0 w-full h-full hover:bg-dark-50 group-hover:flex justify-center items-center">
      <Image
        src="/assets/icons/instagram_logo.svg"
        alt=""
        width={40}
        height={40}
      />
    </div>
  );
}

export function Newsletter() {
  return (
    <div className="bg-black-5 py-32">
      <div className="lg:max-w-7xl md:max-w-4xl max-w-[378px] mx-auto mb-20">
        <h1 className="lg:text-5xl text-xl font-medium font-roboto uppercase text-center mb-10">
          Follow products and discounts on Instagram
        </h1>
        <div className="flex space-x-4">
          <div className="relative group">
            <Image
              src="/assets/images/insta_1.svg"
              width={200}
              height={200}
              alt=""
            />
            <NewsletterCardHover />
          </div>
          <div className="relative group">
            <Image
              src="/assets/images/insta_2.svg"
              width={200}
              height={200}
              alt=""
            />
            <NewsletterCardHover />
          </div>
          <div className="relative group">
            <Image
              src="/assets/images/insta_3.svg"
              width={200}
              height={200}
              alt=""
            />
            <NewsletterCardHover />
          </div>
          <div className="relative group">
            <Image
              src="/assets/images/insta_4.svg"
              width={200}
              height={200}
              alt=""
            />
            <NewsletterCardHover />
          </div>
          <div className="relative group">
            <Image
              src="/assets/images/insta_5.svg"
              width={200}
              height={200}
              alt=""
            />
            <NewsletterCardHover />
          </div>
          <div className="relative group">
            <Image
              src="/assets/images/insta_3.svg"
              width={200}
              height={200}
              alt=""
            />
            <NewsletterCardHover />
          </div>
        </div>
      </div>
      <div className="lg:max-w-3xl max-w-xs mx-auto">
        <h3 className="lg:text-5xl text-xl font-roboto font-medium text-center mb-10">
          Or subscribe to the newsletter
        </h3>
        <div className="flex items-center gap-4 font-open-sans">
          <input
            type="text"
            className="w-full p-2 border-b-2 bg-transparent text-black-50 border-black-50 focus:bg-none"
            placeholder="Email address..."
          />
          <input
            type="submit"
            value="SUBMIT"
            className="border-b-2 border-black-50 p-2"
          />
        </div>
      </div>
    </div>
  );
}
