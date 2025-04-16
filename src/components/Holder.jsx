import React, { useState } from "react";
import "../styles/global.css";
import data from "../staticData/organics.json";
import Rating from "react-rating";
import { FaStar } from "react-icons/fa"; // Import star icon
import BestProducts from "./BestProducts";
import Crumbs from "./Crumbs";
import ProductDetails from "../pages/ProductDetails";

const Holder = () => {
  const [singleProducts, setSingleProducts] = useState([]);
  const [filteredData, setFilteredData] = useState(data.organics);
  const [rating, setRating] = useState(0);

  return (
    <>
     
      <Crumbs />
      <div className="hero-bg sm:h-full md:py-6">
        <div className="max-w-[1440px] mx-auto flex flex-row text-black pt-6">
          <div className="w-full max-w[1440px]">
            <div className="flex sm:flex-col md:flex-row gap-2">
              <div className="flex md:flex-row w-[100%] min-w[800px] ml-32 ">
                <div className="bg-white rounded-lg h-full w-full my-auto">
                  <img
                    src={singleProducts.img}
                    className="prod-img"
                    alt="item"
                  />
                </div>
                <div className="p-10 bg-white">
                  <h2 className="font-semibold text-black">
                    {singleProducts.name}
                  </h2>

                  <div className="flex">
                    <p className="mt-6">
                      <Rating
                        initialRating={rating}
                        emptySymbol={<FaStar color="#ccc" size={30} />}
                        fullSymbol={<FaStar color="#ffc107" size={30} />}
                        onChange={(value) => setRating(value)}
                      />
                      <div>({rating} stars)</div>
                    </p>
                  </div>
                  <div className="mt-6 flex">
                    <div className="text-3xl">
                      <b>{singleProducts.sprice}</b>
                    </div>
                    <div className="text-2xl pl-3 line-through">
                      {singleProducts.price}
                    </div>
                  </div>
                  <p className="mt-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                  <p className="mt-6">
                    <b>Category: </b>
                    <div className="text-gray-700">{singleProducts.type}</div>
                  </p>
                  <div className="mt-6 text-center buttons-l">
                    <button className="bg-[#27AC1F]">
                      Buy Now
                      <img
                        src="/images/arrow-down.png"
                        className="arrows"
                        alt="arrow"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BestProducts />
    </>
  );
};

export default Holder;
