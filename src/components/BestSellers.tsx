/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CardHover } from "./CardHover";

const bestSellers = [
  {
    image: "/assets/images/image-product-7.svg",
    productTitle: "Adicolor Classics Joggers",
    productCategory: "Dress",
    productPrice: "$63.85",
    reducePrice: "",
    hoverCard: <CardHover />,
  },
  {
    image: "/assets/images/image-product-4.png",
    productTitle: "Nike Sportswear Futura Luxe",
    productCategory: "Bag",
    productPrice: "$130.00",
    reducePrice: "",
    hoverCard: <CardHover />,
  },
  {
    image: "/assets/images/image-product.svg",
    productTitle: "Yellow Reserved Hoodie",
    productCategory: "Dress",
    productPrice: "$364.00",
    reducePrice: "$155.00",
    hoverCard: <CardHover />,
  },
  {
    image: "/assets/images/image-product-6.svg",
    productTitle: "Nike Air Zoom Pegasus",
    productCategory: "Shoe",
    productPrice: "$220.00",
    reducePrice: "$198.00",
    hoverCard: <CardHover />,
  },
];

export function BestSellers() {
  return (
    <div>
      <div className="max-w-7xl mx-auto mb-20 hidden lg:block">
        <h1 className="text-center text-5xl font-roboto font-medium mb-5">
          Best Sellers
        </h1>
        <div className="flex justify-between items-center mb-6">
          <ul className="flex gap-3 font-open-sans text-dark-50 font-semibold">
            <li className="hover:text-dark">All Products</li>
            <li className="hover:text-dark">T-Shirt</li>
            <li className="hover:text-dark">Hoodies</li>
            <li className="hover:text-dark">Jacket</li>
          </ul>
          <button className="bg-black flex items-center text-white px-4 py-2">
            Show All
          </button>
        </div>
        <div className="grid lg:grid-cols-4 gap-4">
          {bestSellers.map((index) => (
            <div key={index.image} className="font-open-sans">
              <div className="relative group">
                <Image src={index.image} width={312} height={400} alt="" />
                <CardHover />
              </div>
              <div className="mx-3 pt-4">
                <p className="font-semibold text-base">{index.productTitle}</p>
                <div className="flex justify-between pt-4">
                  <span className="text-base text-black-50">
                    {index.productCategory}
                  </span>
                  <div className="flex space-x-2">
                    <p className="text-base font-semibold text-black-50 line-through">
                      {index.productPrice}
                    </p>
                    <p className="text-base text-primary font-semibold">
                      {index.reducePrice}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <BestSellersMobile />
    </div>
  );
}

function BestSellersMobile() {
  const [currentProduct, setCurrentProduct] = useState(0);

  const handlePrevClick = () => {
    setCurrentProduct(currentProduct - 1);
  };

  const handleNextClick = () => {
    setCurrentProduct(currentProduct + 1);
  };

  return (
    <div className="max-w-7xl mx-auto mb-20 lg:hidden block">
      <h1 className="text-center text-5xl font-roboto font-medium">
        Best Sellers
      </h1>
      <div className="flex lg:flex-row flex-col justify-between items-center mb-6">
        <ul className="flex gap-3 font-open-sans text-dark-50 font-semibold">
          <li className="hover:text-dark">All Products</li>
          <li className="hover:text-dark">T-Shirt</li>
          <li className="hover:text-dark">Hoodies</li>
          <li className="hover:text-dark">Jacket</li>
        </ul>
        <button className="bg-black flex items-center text-white px-4 py-2">
          Show All
        </button>
      </div>
      <div className="relative grid lg:grid-cols-4 gap-4">
        <button
          className="absolute -left-10 top-1/2 transform -translate-y-1/2 z-10"
          onClick={handlePrevClick}
          disabled={currentProduct === 0}
        >
          <img src="/assets/icons/prev_click.svg" alt="" />
        </button>
        {bestSellers.slice(currentProduct, currentProduct + 1).map((index) => (
          <div key={index.image} className="font-open-sans">
            <div className="relative group">
              <Image src={index.image} width={312} height={400} alt="" />
              <CardHover />
            </div>
            <div className="mx-3 pt-4">
              <p className="font-semibold text-base">{index.productTitle}</p>
              <div className="flex justify-between pt-4">
                <span className="text-base text-black-50">
                  {index.productCategory}
                </span>
                <div className="flex space-x-2">
                  <p className="text-base font-semibold text-black-50 line-through">
                    {index.productPrice}
                  </p>
                  <p className="text-base text-primary font-semibold">
                    {index.reducePrice}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
        <button
          className="absolute right-10 top-1/2 transform -translate-y-1/2 z-10"
          onClick={handleNextClick}
          disabled={currentProduct === bestSellers.length - 1}
        >
          <img src="/assets/icons/next_click.svg" alt="" />
        </button>
      </div>
    </div>
  );
}
