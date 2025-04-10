import React from "react";
import "../styles/global.css";

const FiveCards = () => {
  return (
    <>
      <div className="bg-white pt-5 pb-4 mx-auto">
        <div className="w-full max-w-[1440px] mt-4 mx-auto p-4 py-8 text-black">
          <div className="mt-4 grid md:grid-cols-5 gap-2 text-center duration-300">
            <div className="five-card rounded-lg">
              <div className="five-card-icon">
                <img
                  src="/images/deliverytruck.png"
                  className="fc-img"
                  alt="delivery icon"
                />
                <div className="fc-card-txt">Free Delivery</div>
                <div className="text-lg font-semibold">From $99.99</div>
              </div>
            </div>
            <div className="five-card rounded-lg">
              <div className="five-card-icon">
                <img
                  src="/images/customerfeedback.png"
                  className="fc-img"
                  alt="delivery icon"
                />
                <div className="fc-card-txt">Customer Feedback</div>
                <div className="text-lg font-semibold">95.5%</div>
              </div>
            </div>
            <div className="five-card rounded-lg">
              <div className="five-card-icon">
                <img
                  src="/images/returns.png"
                  className="fc-img"
                  alt="delivery icon"
                />
                <div className="fc-card-txt">Free Returns</div>
                <div className="text-lg font-semibold">365 Days</div>
              </div>
            </div>
            <div className="five-card rounded-lg">
              <div className="five-card-icon">
                <img
                  src="/images/payment.png"
                  className="fc-img"
                  alt="delivery icon"
                />
                <div className="fc-card-txt">Payment</div>
                <div className="text-lg font-semibold">Secure System</div>
              </div>
            </div>
            <div className="five-card rounded-lg">
              <div className="five-card-icon">
                <img
                  src="/images/secure.png"
                  className="fc-img"
                  alt="delivery icon"
                />
                <div className="fc-card-txt">100% Safe</div>
                <div className="text-lg font-semibold">Secure Shopping</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FiveCards;
