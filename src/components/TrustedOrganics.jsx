import React from "react";
import "../styles/global.css";

const TrustedOrganics = () => {
  return (
    <div className="trusted-bg items-center sm:h-full md:py-6">
      <div className="max-w-[1440px] mx-auto p-4">
        <div className="pt-5 flex fresh-red">
          <img src="/images/star-green.png" className="stars-r" alt="star" />
          Fresh From Our Farm
          <img src="/images/star-green.png" className="stars-l" alt="star" />
        </div>
        <h3 className="b-h">Trusted Organic Food Store Conscious</h3>
        {/* <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-0"> */}
        <div className="flex flex-row">
          <div className="pt-6">
            <img
              className="trusted-col-1 trusted-img-left"
              src="/images/trusted-img-left.png"
              alt="trusted organic image"
            />
          </div>
          <div className="pl-6 pt-6">
            <img
              className="pt-3 trusted-imgs"
              src="/images/trusted-topimg.png"
              alt="caption"
            />
            <img
              src="/images/trusted-agriculture.png"
              className="pt-3 trusted-imgs"
              alt="agriculture"
            />
            <img
              src="/images/subscribe-img.png"
              className="pt-3 trusted-img-2"
              alt="subscribe"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustedOrganics;
