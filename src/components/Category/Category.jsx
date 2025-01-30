import { useState } from "react";
import bunner from "../../../public/banner.svg";

function Category() {
  const [priceRange, setPriceRange] = useState(39); // Initial value

  const handleRangeChange = (event) => {
    setPriceRange(event.target.value);
  };

  return (
    <div className="block p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-green-600">Categories</h2>
      <ul className="list-disc pl-5 mb-4">
        <li className="flex justify-between">
          <span>House Plants</span>
          <span className="text-green-500">(33)</span>
        </li>
        <li className="flex justify-between">
          <span>Potter Plants</span>
          <span className="text-green-500">(12)</span>
        </li>
        <li className="flex justify-between">
          <span>Seeds</span>
          <span className="text-green-500">(65)</span>
        </li>
        <li className="flex justify-between">
          <span>Small Plants</span>
          <span className="text-green-500">(39)</span>
        </li>
        <li className="flex justify-between">
          <span>Big Plants</span>
          <span className="text-green-500">(23)</span>
        </li>
        <li className="flex justify-between">
          <span>Succulents</span>
          <span className="text-green-500">(17)</span>
        </li>
        <li className="flex justify-between">
          <span>Terrariums</span>
          <span className="text-green-500">(19)</span>
        </li>
        <li className="flex justify-between">
          <span>Gardening</span>
          <span className="text-green-500">(13)</span>
        </li>
        <li className="flex justify-between">
          <span>Accessories</span>
          <span className="text-green-500">(18)</span>
        </li>
      </ul>
      <h2 className="text-xl font-bold mb-2">Price Range</h2>
      <input
        type="range"
        min="39"
        max="1230"
        value={priceRange}
        onChange={handleRangeChange}
        className="w-full mb-4"
      />
      <p className="text-gray-600">Price: ${priceRange} - $1230</p>
      <h2 className="text-xl font-bold mb-2">Size</h2>
      <ul className="list-disc pl-5 mb-4">
        <li className="flex justify-between">
          <span>Small</span>
          <span className="text-green-500">(119)</span>
        </li>
        <li className="flex justify-between">
          <span>Medium</span>
          <span className="text-green-500">(86)</span>
        </li>
        <li className="flex justify-between">
          <span>Large</span>
          <span className="text-green-500">(78)</span>
        </li>
      </ul>
      <img src={bunner} alt="Banner" className="mt-4 rounded-lg" />
      <div className="text-center mt-4">
        <h3 className="text-3xl font-bold text-green-600">Super Sale</h3>
        <p className="text-xl">UP TO 75% OFF</p>
      </div>
    </div>
  );
}

export default Category;
