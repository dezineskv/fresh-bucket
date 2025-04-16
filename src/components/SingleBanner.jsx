import React from "react";
import "../styles/global.css";

const SingleBanner = () => {
  return (
    <div className="bg-white pt-6 pb-6">
      <div className="single-banner flex md:flex-row gap-4 mx-auto p-6">
        <div className="single-cont sm:ml-auto md:ml-auto p-4">
          <div className="ml-auto mr-0">
            <div className="p-6 ml-auto mr-0 text-center">
              <img
                src="/images/2024.png"
                className="single-image pb-1"
                alt="2024"
              />
              <h2>International Year of Fruits & Vegetables</h2>
              <p className="mt-6">
                Emphasizing different aspects of organic offerings, starting
                with the overall concept of sustainable life to specific fruits,
                vegetables and healthy foods.
              </p>
              <div className="mt-6 text-center buttons-c">
                <button style={{ backgroundColor: "#F15A2A" }}>
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
        </div>
      </div>
    </div>
  );
};

export default SingleBanner;
