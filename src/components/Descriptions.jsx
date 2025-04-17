import React from "react";
import "../styles/global.css";

const Descriptions = () => {

  return (
    <>
      <div className="bg-white md:py-6">
        <div className="max-w-[1440px] mx-auto my-10  text-black pt-6">
          <div className="w-full max-w[1440px]">
            <div className="flex sm:flex-col md:flex-row gap-2 mx-10">
              <div className="sm:mx-auto my-auto">
                <div className="font-semibold text-[#355BFB] text-xlg mb-4">
                  Description{" "}
                  <div className="border-2 border-b-[#355BFB] w-[140px]"></div>
                </div>

                <p className="mt-3 text-[#808080]">
                  Sed commodo aliquam dui ac porta. Fusce ipsum felis, imperdiet
                  at posuere ac, viverra at mauris. Maecenas tincidunt ligula a
                  sem vestibulum pharetra. Maecenas auctor tortor lacus, nec
                  laoreet nisi porttitor vel. Etiam tincidunt metus vel dui
                  interdum sollicitudin. Mauris sem ante, vestibulum nec orci
                  vitae, aliquam mollis lacus. Sed et condimentum arcu, id
                  molestie tellus. Nulla facilisi. Nam scelerisque vitae justo a
                  convallis. Morbi urna ipsum, placerat quis commodo quis,
                  egestas elementum leo. Donec convallis mollis enim. Aliquam id
                  mi quam. Phasellus nec fringilla elit. Nulla mauris tellus,
                  feugiat quis pharetra sed, gravida ac dui. Sed iaculis, metus
                  faucibus elementum tincidunt, turpis mi viverra velit,
                  pellentesque tristique neque mi eget nulla. Proin luctus
                  elementum neque et pharetra.
                </p>
                <div className="mt-6 flex flex-row">
                  <img
                    src="/images/Check.png"
                    className="w-[30px] h-[20px] pr-2"
                    alt="icon"
                  />
                  100 g of fresh leaves provides.
                </div>
                <div className="mt-6 flex flex-row">
                  <img
                    src="/images/Check.png"
                    className="w-[30px] h-[20px] pr-2"
                    alt="icon"
                  />
                  100 g of fresh leaves provides.
                </div>
                <div className="mt-6 flex flex-row">
                  <img
                    src="/images/Check.png"
                    className="w-[30px] h-[20px] pr-2"
                    alt="icon"
                  />
                  100 g of fresh leaves provides.
                </div>
              </div>
              <div className="rounded-lg h-full max-w[700px] w-[637px] my-auto ml-8">
                <img
                  src="/images/Video.png"
                  className="min-w-[637px]"
                  alt="video"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Descriptions;
