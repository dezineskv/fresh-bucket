import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/global.css";
import data from "../staticData/organics.json";
import { ProductsContext } from './../App';
import Rating from 'react-rating';
import { FaStar } from 'react-icons/fa'; // Import star icon

const ProductDetails = () => {
    const [singleProducts, setSingleProducts] = useState([]);
  // const [singleProducts, setSingleProducts] = useContext(ProductsContext);
    const [filteredData, setFilteredData] = useState(data.organics);
    const [rating, setRating] = useState(0);

  // const params = useParams();
    const { id } = useParams();

      useEffect(() => {
        const singleJob = filteredData.find(
          (product) => product.id === parseInt(id)
        );
         setSingleProducts(singleJob);
      }, [id]);

  return (
    <>
      {/* <div className="text">ProductDetails per ID : {id} </div> */}
      <div className="hero-bg sm:h-full md:py-6">
        <div className="max-w-[1440px] mx-auto flex flex-row text-black pt-6">
          <div className="bg-white rounded flex sm:flex-col md:flex-row gap-2">
            <div className="flex md:flex-row w-[100%] min-w[800px] ml-32">
              <img src={singleProducts.img} className="prod-img" alt="item" />
              <div className="p-10 ">
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
                <p className="mt-6">
                  <b>{singleProducts.price}</b>
                </p>
                <p className="mt-6">
                  <b>Description:</b> Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                  sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum.
                </p>
                <p className="mt-6">
                  <b>Category: </b>
                  {singleProducts.type}
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
    </>
  );
};

export default ProductDetails;
