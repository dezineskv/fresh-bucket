import React from 'react'
import "../styles/global.css";

const Hero = () => {
  return (
    <div className="hero-bg sm:h-full md:py-6">
      <div className="max-w-[1440px] mx-auto flex flex-row text-black pt-6">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-10">
            <h1 className="hero-title text-black">
              A sustainable life with fresh fruits, vegetables and healthy foods
            </h1>
            <p className="mt-6">
              Emphasizing different aspects of organic offerings, starting with
              the overall concept of sustainable life to specific fruits,
              vegetables and healthy foods.
            </p>

            <p className="mt-6">
              Emphasizing different aspects of organic offerings, starting with
              the overall concept of sustainable life to specific fruits,
              vegetables and healthy foods.
            </p>
            <div className="mt-6 text-center buttons-l">
              <button className="btn-primary">
                Subscribe
                <img
                  src="/images/arrow-down.png"
                  className="arrows"
                  alt="arrow"
                />
              </button>
            </div>
          </div>
          <div className="sm:mx-auto w-[619px] h-[490px] ml-32">
            <img src="/images/hero-img.png" className="hero-img" alt="banner" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero