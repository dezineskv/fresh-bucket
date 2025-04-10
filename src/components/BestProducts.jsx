import React, { useEffect, useState } from "react";
import "../styles/global.css";

const BestProducts = () => {
  return (
    <>
      <div className="bg-white mx-auto">
        <div className="best-inner mx-auto p-4">
          <div className="mt-5 flex items-center justify-between">
            <div className="pb-3">
              <div className="text-sm pt-5 flex fresh-red">
                <img
                  src="/images/star-green.png"
                  className="stars-r"
                  alt="star"
                />
                Fresh From Our Farm
                <img
                  src="/images/star-green.png"
                  className="stars-l"
                  alt="star"
                />
              </div>
              <h3 className="b-h">Best Organic Products</h3>
            </div>
            <div className="mt-6 text-center buttons-r">
              <button className="bg-[#27AC1F]">
                View More
                <img
                  src="/images/arrow-down.png"
                  className="arrows"
                  alt="arrow"
                />
              </button>
            </div>
          </div>
          <div className="mt-4 grid md:grid-cols-4 gap-4 text-center duration-300">
            <div className="b-card">
              <div className="absolute right-0 top-2">
                <img src="/images/Link.png" alt="icon" />
              </div>
              <div className="absolute left-0 top-7">
                <img src="/images/25.png" alt="25%" />
              </div>
              <div className="items-center mx-auto mt-6 pt-4">
                <img src="/images/round-tomatoes.png" alt="products" />
              </div>
              <div className="pt-4 pl-5 pr-5 text-left">
                <p className="font-medium text-black text-xs">Organic Cabbage</p>
                <div className="flex justify-between border-t border-1-gray-100 pt-2 mt-2">
                  <div className="b-price">$50.00</div>
                  <div className="b-gray">$100</div>
                  <div className="pt-1">
                    <img src="/images/4-9-rating.png" alt="rating" />
                  </div>
                </div>
              </div>
            </div>
            <div className="b-card">
              <div className="absolute right-0 top-2">
                <img src="/images/Link.png" alt="icon" />
              </div>
              <div className="absolute left-0 top-7">
                <img src="/images/25.png" alt="25%" />
              </div>
              <div className="items-center mx-auto mt-6 pt-4">
                <img src="/images/round-oranges.png" alt="products" />
              </div>
              <div className="pt-4 pl-5 pr-5 text-left">
                <p className="font-medium text-black text-xs">Organic Cabbage</p>
                <div className="flex justify-between border-t border-1-gray-100 pt-2 mt-2">
                  <div className="b-price">$50.00</div>
                  <div className="b-gray">$100</div>
                  <div className="pt-1">
                    <img src="/images/4-9-rating.png" alt="rating" />
                  </div>
                </div>
              </div>
            </div>
            <div className="b-card">
              <div className="absolute right-0 top-2">
                <img src="/images/Link.png" alt="icon" />
              </div>
              <div className="absolute left-0 top-7">
                <img src="/images/25.png" alt="25%" />
              </div>
              <div className="items-center mx-auto mt-6 pt-4">
                <img src="/images/round-strawberries.png" alt="products" />
              </div>
              <div className="pt-4 pl-5 pr-5 text-left">
                <p className="font-medium text-black text-xs">Organic Cabbage</p>
                <div className="flex justify-between border-t border-1-gray-100 pt-2 mt-2">
                  <div className="b-price">$50.00</div>
                  <div className="b-gray">$100</div>
                  <div className="pt-1">
                    <img src="/images/4-9-rating.png" alt="rating" />
                  </div>
                </div>
              </div>
            </div>
            <div className="b-card">
              <div className="absolute right-0 top-2">
                <img src="/images/Link.png" alt="icon" />
              </div>
              <div className="absolute left-0 top-7">
                <img src="/images/25.png" alt="25%" />
              </div>
              <div className="items-center mx-auto mt-6 pt-4">
                <img src="/images/round-girl.png" alt="products" />
              </div>
              <div className="pt-4 pl-5 pr-5 text-left">
                <p className="font-medium text-black text-xs">Organic Cabbage</p>
                <div className="flex justify-between border-t border-1-gray-100 pt-2 mt-2">
                  <div className="b-price">$50.00</div>
                  <div className="b-gray">$100</div>
                  <div className="pt-1">
                    <img src="/images/4-9-rating.png" alt="rating" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BestProducts;
