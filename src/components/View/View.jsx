import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaRegHeart,
  FaTwitter,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
import { MdOutlineMail } from "react-icons/md";
import rasmcha from "../../../public/footer1.jpg"
import rasmcha1 from "../../../public/nmadrcha.svg"
import rasmcha2 from "../../../public/footer3.jpg"
import rasmcha3 from "../../../public/kotta.svg";
export default function View() {
  const [count, setCount] = useState(1);
  const [activeSize, setActiveSize] = useState("S");

  const toggleSearch = (size) => {
    setActiveSize((prev) => (prev === size ? null : size));
  };

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => (prev > 1 ? prev - 1 : 1));
  return (
    <div className="mt-9">
      <div className="container">
        <div className="flex flex-col">
          <h1 className="font-normal text-[15px] leading-[107%] text-[#3d3d3d] mb-[45px]">
            <Link className="font-bold text-[#3d3d3d]" to={"/"}>
              Home
            </Link>{" "}
            / Shop
          </h1>
          <div className="flex flex-col md:flex-row w-full gap-[52px]">
            <div className="flex gap-4">
              <div className="flex flex-col gap-2">
                <div className="w-[100px] bg-[#fbfbfb]">
                  <img src={rasmcha3} />
                </div>
                <div className="w-[100px] bg-[#fbfbfb]">
                  <img src={rasmcha1} />
                </div>
                <div className="w-[100px] bg-[#fbfbfb]">
                  <img src={rasmcha1} />
                </div>
                <div className="w-[100px] bg-[#fbfbfb]">
                  <img src={rasmcha3} />
                </div>
              </div>
              <div className="relative w-[500px] h-[450px] p-6 bg-[#fbfbfb]">
                <button className="absolute top-2 right-2">
                  <CiSearch />
                </button>
                <img src={rasmcha3} alt="plant" />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="max-w-[570px]">
                <h1 className="font-bold text-[28px] leading-[57%] text-[#3d3d3d] mb-[21px]">
                  Barberton Daisy
                </h1>
                <div className="flex justify-between items-center border-b-2 border-[#f5f3f3] pb-2">
                  <h2 className="font-bold text-[22px] leading-[73%] text-[#46a358]">
                    $119.00
                  </h2>
                  <p className="font-normal text-[15px] leading-[107%] text-[#3d3d3d]">
                    19 Customer Review
                  </p>
                </div>
              </div>
              <div className="max-w-[573px]">
                <h2 className="font-medium text-[15px] leading-[107%] text-[#3d3d3d] mt-4 mb-2">
                  Short Description:
                </h2>
                <p className="font-normal text-[14px] leading-[171%] text-[#727272]">
                  The ceramic cylinder planters come with a wooden stand to help
                  elevate your plants off the ground.
                </p>
              </div>
              <div className="max-w-[573px]">
                <h2 className="font-medium text-[15px] leading-[107%] text-[#3d3d3d] mt-4 mb-2">
                  Size:
                </h2>
                <div className="flex gap-2">
                  {["S", "M", "L", "XL"].map((size) => (
                    <button
                      key={size}
                      onClick={() => toggleSearch(size)}
                      className={`w-[28px] h-[28px] border rounded-full font-medium text-center ${
                        activeSize === size
                          ? "border-[#46a358] text-[#46a358]"
                          : "border-[#eaeaea] text-[#727272]"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex flex-wrap gap-[26px] mt-[23px] sm:grid sm:grid-cols-2 sm:gap-2 sm:mt-4">
                <div className="flex items-center min-w-[55px] space-x-2">
                  <button
                    onClick={decrement}
                    className="w-[33px] h-[38px] flex items-center justify-center bg-[#46a358] text-white border border-green-600 rounded-full"
                  >
                    -
                  </button>
                  <span className="text-lg font-medium text-gray-800">
                    {count}
                  </span>
                  <button
                    onClick={increment}
                    className="w-[33px] h-[38px] flex items-center justify-center bg-[#46a358] text-white border border-green-600 rounded-full"
                  >
                    +
                  </button>
                </div>
                <button className="font-bold text-white bg-[#46a358] rounded px-8 py-2">
                  Buy NOW
                </button>
                <Link to={"/shopcard"}>
                  <button className="font-bold text-[#46a358] border border-[#46a358] rounded px-8 py-2">
                    Add to cart
                  </button>
                </Link>
                <button className="border border-[#46a358] rounded px-2 py-2 flex items-center justify-center">
                  <FaRegHeart className="fill-[#46A358]" />
                </button>
              </div>
              <div className="mt-6">
                <div className="flex flex-col gap-2">
                  <h3 className="font-normal text-[15px] leading-[107%] text-[#a5a5a5]">
                    SKU:
                  </h3>
                  <p className="font-normal text-[15px] leading-[107%] text-[#727272]">
                    1995751877966
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-normal text-[15px] leading-[107%] text-[#a5a5a5]">
                    Categories:
                  </h3>
                  <p className="font-normal text-[15px] leading-[107%] text-[#727272]">
                    Potter Plants
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-normal text-[15px] leading-[107%] text-[#a5a5a5]">
                    Tags:
                  </h3>
                  <p className="font-normal text-[15px] leading-[107%] text-[#727272]">
                    Home, Garden, Plants
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <h2 className="font-medium text-[15px] leading-[107%] text-[#3d3d3d]">
                  Share this products:
                </h2>
                <div className="flex gap-4">
                  <Link to={"#"}>
                    <FaFacebookF />
                  </Link>
                  <Link to={"#"}>
                    <FaTwitter />
                  </Link>
                  <Link to={"#"}>
                    <FaLinkedinIn />
                  </Link>
                  <Link to={"#"}>
                    <MdOutlineMail />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
