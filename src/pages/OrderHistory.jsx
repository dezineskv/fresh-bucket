import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../styles/global.css";

const OrderHistory = () => {

  return (
    <>
      <div className="bg-[#fef5d9] mx-auto min-w-[100vw] md:py-6">
        <div className="bg-white max-w-[1440px] mx-auto text-black pt-6 pb-6">
          <div className="flex flex-col max-h[400px] pb-14">
            <div className="flex flex-row rounded-lg">
              <div className="pl-8 max-h[50px]">
                <img
                  src="/images/profile-circle-img.png"
                  className="max-h[50px]"
                  alt="item"
                />
              </div>
              <div className="pl-8 pt-6">
                <div className="font-semibold text-black text-xlg ">
                  First Last
                </div>

                <p className="mt-3">vidalkim17@gmail.com</p>
              </div>
            </div>
            <div className="bg-white my-auto pl-8">
              <div className="flex flex-row">
                <div className="mt-6 mr-2 text-center buttons-l">
                  <button className="bg-[#bee6bb] text-[#27AC1F]">
                    <img
                      src="/images/profile-info-icon.png"
                      className="arrows"
                      alt="account"
                    />
                    Basic Information
                  </button>
                </div>
                <div className="mt-6 text-center buttons-l">
                  <button className="bg-[#27AC1F]">
                    <img
                      src="/images/arrow-down.png"
                      className="arrows"
                      alt="arrow"
                    />
                    Order List
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white max-w[1000px] max-h-[55px] flex flex-row mx-10 mb-8 border-b-2 pb-4">
            <div className="pl-8 my-auto max-w[1000px] flex flex-row justify-between w-full">
              <div className="mt-3 text-xl ">Your Orders</div>
              <div className="mt-3  buttons-l pl-3">
                <button className="bg-[#27AC1F] max-h[30px]  mb-4">
                  <img
                    src="/images/arrow-down.png"
                    className="arrows"
                    alt="arrow"
                  />
                  Edit
                </button>
              </div>
            </div>
          </div>
          <div className="bg-white max-w[1250px] max-h-[55px] rounded-lg flex flex-row mx-10">
            <div className="pl-8 my-auto flex flex-row justify-between w-full">
              <div className="mt-3 text-lg ">Order</div>
              <div className="mt-3 text-lg pl-3">Order Date</div>
              <div className="mt-3 text-lg pl-3">Amount</div>
              <div className="mt-3 text-lg pl-3">Payment Method</div>
              <div className="mt-3 text-lg pl-3">Attachment</div>

              <div className="mt-3 text-lg pl-3">Status</div>
            </div>
          </div>
          <div className="bg-[#fde5de] max-w[1300px] h-[65px] rounded-lg flex flex-row mx-10 mt-4">
            <div className="pl-8 my-auto flex flex-row justify-between w-full">
              <div className="my-auto w-50">TS-658798782946</div>
              <div className="my-auto text-lg pl-3">Apr 10, 2024</div>
              <div className="my-auto text-lg pl-3">$12,000</div>
              <div className="my-auto text-lg pl-3">Stride</div>
              <div className="my-auto text-lg pl-3">
                <img
                  src="/images/thumbnail.png"
                  className="arrows"
                  alt="thumbnail"
                />
              </div>
              <div className="my-auto mr-4 text-center text-sm buttons-l pl-3 ">
                <button className="bg-[#bee6bb] text-[#27AC1F] max-h[30px]">
                  <img
                    src="/images/arrow-down.png"
                    className="arrows"
                    alt="arrow"
                  />
                  Approved
                </button>
              </div>
            </div>
          </div>
          <div className="bg-[#fde5de] max-w[1250px] h-[65px] rounded-lg flex flex-row mx-10 mt-4">
            <div className="pl-8 my-auto flex flex-row justify-between w-full">
              <div className="my-auto w-50">TS-658798782946</div>
              <div className="my-auto text-lg pl-3">Apr 10, 2024</div>
              <div className="my-auto text-lg pl-3">$12,000</div>
              <div className="my-auto text-lg pl-3">Stride</div>
              <div className="my-auto text-lg pl-3">
                <img
                  src="/images/thumbnail.png"
                  className="arrows"
                  alt="thumbnail"
                />
              </div>
              <div className="my-auto mr-4 text-center text-sm buttons-l pl-3 ">
                <button className="bg-[#bee6bb] text-[#27AC1F] max-h[30px]">
                  <img
                    src="/images/arrow-down.png"
                    className="arrows"
                    alt="arrow"
                  />
                  Approved
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderHistory;
