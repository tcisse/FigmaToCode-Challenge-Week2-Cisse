import React from "react";
import Image from "next/image";

function CardHover() {
  return (
    <div className="absolute bottom-0 left-0 right-0 hidden group-hover:flex justify-between px-3 py-4 bg-black">
      <div className="flex gap-4">
        <Image
          src="/assets/icons/like_icon.svg"
          width={25}
          height={25}
          alt=""
        />
        <Image
          src="/assets/icons/search_white_icon.svg"
          width={25}
          height={25}
          alt=""
        />
      </div>
      <button className="flex gap-3 text-white bg-black">
        <Image
          src="/assets/icons/shop_white_icon.svg"
          width={25}
          height={25}
          alt="logo"
        />
        Shop Now
      </button>
    </div>
  );
}

export function ProductList() {
  return (
    <section className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
      <div className="font-open-sans max-w-xs mx-auto">
        <div className="relative group">
          <Image
            src="/assets/images/image-product-3.svg"
            width={312}
            height={400}
            alt=""
          />
          <CardHover />
        </div>
        <div className="mx-3 pt-4">
          <p className="font-semibold text-base">Adicolor Classics Joggers</p>
          <div className="flex justify-between pt-4">
            <span className="text-base text-black-50">Dress</span>
            <div className="flex space-x-2">
              <p className="text-base font-semibold">$63.85</p>
            </div>
          </div>
        </div>
      </div>
      <div className="font-open-sans max-w-xs mx-auto">
        <div className="relative group">
          <Image
            src="/assets/images/image-product-4.png"
            width={312}
            height={400}
            alt=""
          />
          <CardHover />
        </div>
        <div className="mx-3 pt-4">
          <p className="font-semibold text-base">Nike Sportswear Futura Luxe</p>
          <div className="flex justify-between pt-4">
            <span className="text-base text-black-50">Bag</span>
            <div className="flex space-x-2">
              <p className="text-base font-semibold">$130.00</p>
            </div>
          </div>
        </div>
      </div>
      <div className="font-open-sans max-w-xs mx-auto">
        <div className="relative group">
          <Image
            src="/assets/images/image-product-1.svg"
            width={312}
            height={400}
            alt=""
          />
          <CardHover />
        </div>
        <div className="mx-3 pt-4">
          <p className="font-semibold text-base">Geometric print Scarf</p>
          <div className="flex justify-between pt-4">
            <span className="text-base text-black-50">Scarf</span>
            <div className="flex space-x-2">
              <p className="text-base font-semibold">$53.00</p>
            </div>
          </div>
        </div>
      </div>
      <div className="font-open-sans max-w-xs mx-auto">
        <div className="relative group">
          <Image
            src="/assets/images/image-product.svg"
            width={312}
            height={400}
            alt=""
          />
          <CardHover />
        </div>
        <div className="mx-3">
          <p className="pt-4 font-semibold text-base">Yellow Reserved Hoodie</p>
          <div className="flex justify-between pt-4">
            <span className="text-base text-black-50">Dress</span>
            <div className="flex space-x-2">
              <p className="text-base line-through text-black-50">$364.00</p>
              <p className="text-base text-primary font-semibold">$155.00</p>
            </div>
          </div>
        </div>
      </div>
      <div className="font-open-sans max-w-xs mx-auto">
        <div className="relative group">
          <Image
            src="/assets/images/image-product-7.svg"
            width={312}
            height={400}
            alt=""
          />
          <CardHover />
        </div>
        <div className="mx-3 pt-4">
          <p className="font-semibold text-base">Adicolor Classics Joggers</p>
          <div className="flex justify-between pt-4">
            <span className="text-base text-black-50">Dress</span>
            <div className="flex space-x-2">
              <p className="text-base font-semibold">$63.85</p>
            </div>
          </div>
        </div>
      </div>
      <div className="font-open-sans max-w-xs mx-auto">
        <div className="relative group">
          <Image
            src="/assets/images/image-product-6.svg"
            width={312}
            height={400}
            alt=""
          />
          <CardHover />
        </div>
        <div className="mx-3">
          <p className="pt-4 font-semibold text-base">Nike Air Zoom Pegasus</p>
          <div className="flex justify-between pt-4">
            <span className="text-base text-black-50">Shoe</span>
            <div className="flex space-x-2">
              <p className="text-base line-through text-black-50">$220.00</p>
              <p className="text-base text-primary font-semibold">$198.00</p>
            </div>
          </div>
        </div>
      </div>
      <div className="font-open-sans max-w-xs mx-auto">
        <div className="relative group">
          <Image
            src="/assets/images/image-product-8.svg"
            width={312}
            height={400}
            alt=""
          />
          <CardHover />
        </div>
        <div className="mx-3 pt-4">
          <p className="font-semibold text-base">Nike Repel Miler</p>
          <div className="flex justify-between pt-4">
            <span className="text-base text-black-50">Dress</span>
            <div className="flex space-x-2">
              <p className="text-base font-semibold">$120.50</p>
            </div>
          </div>
        </div>
      </div>
      <div className="font-open-sans max-w-xs mx-auto">
        <div className="relative group">
          <Image
            src="/assets/images/image-product-9.svg"
            width={312}
            height={400}
            alt=""
          />
          <CardHover />
        </div>
        <div className="mx-3">
          <p className="pt-4 font-semibold text-base">
            Nike Sportswear Futura Luxe
          </p>
          <div className="flex justify-between pt-4">
            <span className="text-base text-black-50">Glasses</span>
            <div className="flex space-x-2">
              <p className="text-base">$160.00</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
