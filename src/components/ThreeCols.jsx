import React from "react";
import "../styles/global.css";

const ThreeCols = () => {
  return (
    <div className="three-bg items-center md:py-6">
      <div className="sm:max-w-[300px] container sm:margin-0 md:mx-auto p-4">
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="three-col-1 pt-6">
            <img src="/images/basket.png" alt="basket" />
          </div>
          <div className="sm:max-w-[300px] md:max-h-[500px] text-black text-center items-center my-auto pb-14">
            <div className="b-title pt-5 flex justify-center fresh-red">
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
            <h3 className="b-h">Trusted Organic Food Store Conscious</h3>
            <p>
              The titles are organized to emphasize different aspects of the
              organic offerings, starting from the overall concept of a
              sustainable life to the specific components such as fresh
              vegetables, fruits, and healthy foods.
            </p>
            <div className="mt-6 text-center buttons-c">
              <button style={{ backgroundColor: "#27AC1F" }}>
                View More
                <img
                  src="/images/arrow-down.png"
                  className="arrows"
                  alt="arrow"
                />
              </button>
            </div>
          </div>
          <div className="three-col-2">
            <img src="/images/man.png" alt="man with basket" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreeCols;
