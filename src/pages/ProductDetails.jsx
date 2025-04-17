import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../styles/global.css";
import data from "../staticData/organics.json";
import Rating from "react-rating";
import { FaStar } from "react-icons/fa"; // Import star icon
import useBreadcrumbs from "use-react-router-breadcrumbs";
import BestProducts from "../components/BestProducts";
import Crumbs from "../components/Crumbs";
import Descriptions from "../components/Descriptions";

const ProductDetails = () => {
  const [singleProducts, setSingleProducts] = useState([]);
  const [filteredData, setFilteredData] = useState(data.organics);
  const [rating, setRating] = useState(0);

  // const params = useParams();
  const { id } = useParams();
  const breadcrumbs = useBreadcrumbs();

  useEffect(() => {
    const singleJob = filteredData.find(
      (product) => product.id === parseInt(id)
    );
    setSingleProducts(singleJob);
  }, [id]);

  return (
    <>
      <div className="hero-bg md:py-6">
        <Crumbs />
        <div className="max-w-[1440px] mx-auto  text-black pt-6">
          <div className="w-full max-w[1440px]">
            <div className="bg-white flex sm:flex-col md:flex-row gap-2 mx-10">
              <div className="bg-white rounded-lg h-full max-w[400px] my-auto ml-8">
                <img
                  src={singleProducts.imgpng}
                  className="prod-img bg-[#fef5d9] "
                  alt="item"
                />
              </div>
              <div className="bg-white sm:mx-auto h-[350px] pl-8 my-auto">
                <div className="font-semibold text-black text-xlg">
                  {singleProducts.name}
                </div>

                <div className="flex">
                  <p className="mt-3">
                    <Rating
                      initialRating={rating}
                      emptySymbol={<FaStar color="#ccc" size={30} />}
                      fullSymbol={<FaStar color="#ffc107" size={30} />}
                      onChange={(value) => setRating(value)}
                    />
                    <div>({rating} stars)</div>
                  </p>
                </div>
                <div className="mt-3 flex">
                  <div className="text-3xl">
                    <b>{singleProducts.sprice}</b>
                  </div>
                  <div className="text-2xl pl-3 line-through">
                    {singleProducts.price}
                  </div>
                </div>
                <p className="mt-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip.
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
      <Descriptions/>
      <BestProducts />
    </>
  );
};

export default ProductDetails;
