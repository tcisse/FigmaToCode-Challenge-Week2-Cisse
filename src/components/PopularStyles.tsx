import React from "react";
import Image from "next/image";
import { ProductList } from "./ProductList";

function PopularStylesHover() {
  return (
    <div className="absolute bottom-0 left-0 right-0 hidden group-hover:flex justify-between bg-black px-3 py-4">
      <h1 className="text-white font-open-sans lg:text-base text-xs">Jacket</h1>
      <h1 className="text-white font-open-sans lg:text-base text-xs">
        103 products
      </h1>
    </div>
  );
}

export function PopularStyles() {
  return (
    <div className="mb-20">
      <div className="lg:max-w-7xl max-w-[350px] mx-auto py-10 mb-20">
        <div className="flex lg:flex-row flex-col gap-6">
          <div className="relative group">
            <div className="relative">
              <h1 className="-rotate-90 absolute flex-shrink-0 uppercase font-roboto font-normal lg:text-3xl -left-[45%] top-1/2 -translate-y-1/2">
                Explore new and popular styles
              </h1>
              <Image
                src="/assets/images/card.svg"
                width={648}
                height={728}
                alt=""
              />
            </div>
            <PopularStylesHover />
          </div>
          <div className="space-y-6">
            <div className="flex gap-6">
              <div className="relative group">
                <Image
                  src="/assets/images/card_1.svg"
                  width={312}
                  height={312}
                  alt=""
                />
                <PopularStylesHover />
              </div>
              <div className="relative group">
                <Image
                  src="/assets/images/card_4.svg"
                  width={312}
                  height={312}
                  alt=""
                />
                <PopularStylesHover />
              </div>
            </div>
            <div className="flex gap-6">
              <div className="relative group">
                <Image
                  src="/assets/images/card_2.svg"
                  width={312}
                  height={312}
                  alt=""
                />
                <PopularStylesHover />
              </div>
              <div className="relative group">
                <Image
                  src="/assets/images/card_3.svg"
                  width={312}
                  height={312}
                  alt=""
                />
                <PopularStylesHover />
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-roboto font-medium capitalize text-center mb-9">
          Products
        </h1>
        <div className="flex lg:flex-row gap-5 flex-col justify-between items-center mb-6">
          <ul className="flex gap-3 font-open-sans text-dark-50 font-semibold">
            <li className="hover:text-dark">All Products</li>
            <li className="hover:text-dark">T-Shirt</li>
            <li className="hover:text-dark">Hoodies</li>
            <li className="hover:text-dark">Jacket</li>
          </ul>
          <button className="bg-black flex items-center gap-3 text-white px-4 py-2">
            <Image
              src="/assets/icons/filter_icon.svg"
              width={20}
              height={20}
              alt="filter_icon"
            />
            Filter
          </button>
        </div>
        <ProductList />
      </section>
    </div>
  );
}
