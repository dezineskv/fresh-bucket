import React from "react";
import "../styles/global.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="flex flex-row max-w[1440px] text-white mx-auto">
        <div className="container md:mx-auto p-4">
          <div className="grid sm:grid-cols-1 md:grid-cols-4 gap-2 pt-1 pb-2">
            <div className="pt-6 ml-8 text-sm">
              <img src="/images/footer.png" className="pb-4" alt="footer" />
              It is a long established fact that a reader will be distracted by
              the readable looking at its layout. <br></br>
              <br></br>
              <div className="flex items-center">
                <div>Follous Us:</div>
                <div className="pl-3">
                  <img
                    src="/images/socialicons.png"
                    className="h[30px]"
                    alt="social icons"
                  />
                </div>
              </div>
            </div>
            <div className="pt-6 sm:ml-8 md:ml-20">
              <p className="pb-2 font-semibold">Categories</p>
              <p className="text-sm pt-2">About Us</p>
              <p className="text-sm  pt-2">Shop</p>
              <p className="text-sm pt-2">Contact Us</p>
              <p className="text-sm pt-2">Resources</p>
            </div>
            <div className="pt-6 ml-8">
              <p className="pb-2 font-semibold">My Account</p>
              <p className="text-sm pt-2">Support</p>
              <p className="text-sm pt-2">Your quotes</p>
              <p className="text-sm pt-2">Track your orders</p>
            </div>
            <div className="pt-6 ml-8">
              <p className="pb-2 font-semibold">Contact</p>
              <p className="text-sm pt-2">techserve4u@gmail.com</p>
              <p className="text-sm pt-2">+123-589-9763</p>
              <p className="text-sm pt-2">King Street, Melbourne, Australia</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black">
        <div className="flex flex-row max-w-[1440px] sm:mx-12 md:mx-auto text-white text-sm pt-6 pb-10 justify-between h-10 w-full">
          <div>2024. All right reserved design by techserve4u</div>
          <div className="footer-2-links">
            <div>Settings & Privacy</div>
            <div>FAQ's</div>
            <div>Services</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
