import React from "react";
import insta from "../../public/Instagram.svg";
import tviiter from "../../public/Twitter.svg";
import Facebook from "../../public/Facebook.svg";
import Union from "../../public/Union.svg";
import Link from "../../public/Linkedin.svg";
import cards from "../../public/cards.svg";

const HelpAndGuide = () => {
  return (
    <div className="flex flex-wrap p-8 bg-gray-200">
      <div className="w-full sm:w-1/2 lg:w-1/4 mb-4">
        <h4 className="font-bold mb-2">My Account</h4>
        <ul className="text-sm">
          <li>My Account</li>
          <li>Our stores</li>
          <li>Contact us</li>
          <li>Career</li>
          <li>Specials</li>
        </ul>
      </div>
      <div className="w-full sm:w-1/2 lg:w-1/4 mb-4">
        <h4 className="font-bold mb-2">Help & Guide</h4>
        <ul className="text-sm">
          <li>Help Center</li>
          <li>How to Buy</li>
          <li>Shipping & Delivery</li>
          <li>Product Policy</li>
          <li>How to Return</li>
        </ul>
      </div>
      <div className="w-full sm:w-1/2 lg:w-1/4 mb-4">
        <h4 className="font-bold mb-2">Categories</h4>
        <ul className="text-sm">
          <li>House Plants</li>
          <li>Potter Plants</li>
          <li>Seeds</li>
          <li>Small Plants</li>
          <li>Accessories</li>
        </ul>
      </div>
      <div className="w-full sm:w-1/2 lg:w-1/4 mb-4">
        <h4 className="font-bold mb-2">Social Media</h4>
        <div className="flex space-x-2 justify-center">
          <img src={Facebook} alt="Facebook" className="h-6 w-6" />
          <img src={insta} alt="Instagram" className="h-6 w-6" />
          <img src={tviiter} alt="Twitter" className="h-6 w-6" />
          <img src={Union} alt="Union" className="h-6 w-6" />
          <img src={Link} alt="LinkedIn" className="h-6 w-6" />
        </div>
      </div>
      <div className="w-full sm:w-1/2 lg:w-1/4 mb-4 flex justify-center items-center mt-4 sm:mt-0">
        <div>
          <h4 className="font-bold mb-2">We accept</h4>
          <img src={cards} alt="Payment Methods" className="h-6" />
        </div>
      </div>
    </div>
  );
};

export default HelpAndGuide;
