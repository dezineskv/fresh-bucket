import React from 'react'
import "../styles/global.css";

const TwoCards = () => {
  return (
    <div className="banner-bg items-center sm:h-full md:h-[460px] md:py-6">
      <div className="max-w-[1440px] mx-auto flex flex-row p-4">
        <div className="grid sm:grid-cols-1 sm:h-full md:grid-cols-2 gap-6">
          <div className="banner-col-1 pt-6">
            <img src="/images/fruitveggiebanner.png" alt="banner" />
          </div>
          <div className="banner-col-2 pt-6">
            <img src="/images/salesofyear.png" alt="banner" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TwoCards