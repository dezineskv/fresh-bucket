import React, { useEffect, useState } from "react";
import "../styles/global.css";
import data from "../staticData/organics.json";
import { Link } from "react-router-dom";

const Organics = () => {
  const [filter, setFilter] = useState("all");
  //passing the json data as initial values then filter by data.organics then by type
  const [filteredData, setFilteredData] = useState(data.organics);

  //filter products by category
  const handleFilteredData = () => {
    if (filter === "bread") {
      setFilteredData(data.organics.filter((item) => item.type === "bread"));
    } else if (filter === "fruit") {
      setFilteredData(data.organics.filter((item) => item.type === "fruit"));
    } else if (filter === "vegetable") {
      setFilteredData(
        data.organics.filter((item) => item.type === "vegetable")
      );
    } else {
      setFilteredData(data.organics);
    }
  };

  useEffect(handleFilteredData, [filter]);

  // active category gets styled opposite
  const isActive = (type) => {
    return type === filter
      ? "bg-[#27AC1F] text-white"
      : "bg-white text-[#27AC1F]";
  };
  return (
    <>
      <div className="w-[100vw] organics-outer pt-8 pb-4 mx-auto">
        <div className="max-w-[1440px] mt-4 mx-auto p-4 pb-14">
          <div className="mt-5 flex sm:flex-col md:flex-row items-center justify-between">
            <div className="pb-3">
              <div className="o-title pt-5 flex fresh">
                <img
                  src="/images/star-white.png"
                  className="stars-r"
                  alt="star"
                />
                Fresh From Our Farm
                <img
                  src="/images/star-white.png"
                  className="stars-l"
                  alt="star"
                />
              </div>
              <h3 className="o-h">Our Organic Products</h3>
            </div>
            <div className="bg-white inline-flex items-center p-1 mr-6 rounded-lg gap-2">
              <button
                className={`${isActive("all")} text-sm`}
                onClick={() => setFilter("all")}
              >
                All
              </button>
              <button
                className={`${isActive("vegetable")} text-sm`}
                onClick={() => setFilter("vegetable")}
              >
                Vegetable
              </button>
              <button
                className={`${isActive("fruit")} text-sm`}
                onClick={() => setFilter("fruit")}
              >
                Fruit
              </button>
              <button
                className={`${isActive("bread")} text-sm`}
                onClick={() => setFilter("bread")}
              >
                Bread
              </button>
            </div>
          </div>
          <div className="sm:block sm:w-[100vw] md:w-full flex  md:flex-row">
            <div className="mt-4 sm:block sm:w-[100vw] grid md:grid-cols-4 gap-4 text-center duration-300">
              {filteredData.map((product) => {
                return (
                  <Link key={product.id} to={`/product/${product.id}`}>
                    <div className="o-card rounded-lg">
                      <div className="sm:block flex flex-row items-center">
                        <img src={product.img} alt="products" />
                        <div className="pt-4 pl-5 text-left">
                          <p className="text-black text-sm">{product.name}</p>
                          <div className="flex">
                            <div className="text-black font-medium text-base">
                              {product.price}
                            </div>
                            <div className="pl-1 o-gray">
                              {product.salePrice && product.salePrice}
                            </div>
                          </div>
                          <div className="pt-2">
                            <img src="/images/rating.png" alt="rating" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
              <div className="sale-banner rounded-lg col-start-4 row-start-1 row-span-4 h-auto">
                <img src="/images/salebanner.png" alt="banner" className="h-auto min-h-6"/>
              </div>
            </div>
          </div>
          <div className="mt-6 text-center buttons-c">
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
      </div>
    </>
  );
};

export default Organics;
