// import plantImage1 from "../../../public/nmadr.svg";
// import plantImage2 from "../../../public/rasm.svg";
// import plantImage3 from "../../../public/rasm2.svg";
// import plantImage4 from "../../../public/rasm3.svg";
// import plantImage5 from "../../../public/rasm4.svg";
// import plantImage6 from "../../../public/rasm5.svg";
// import plantImage7 from "../../../public/rasm6.svg";
// import plantImage8 from "../../../public/rasm7.svg";
// import plantImage9 from "../../../public/rasm8.svg";
import searchIcon from "../../../public/search.svg";
import trashIcon from "../../../public/karzinka.svg";
import likeIcon from "../../../public/like.svg";
import Category from "../Category/Category";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { API } from "../../util/config";
const Main = () => {
  const [plant, setPlant] = useState(null);
  useEffect(() => {
    API.get("/flowers").then((res) => setPlant(res.data));
  }, []);
  return (
    <>
      <div className="flex justify-between items-center p-4">
        <div className="flex space-x-4">
          <button className="text-green-500">All Plants</button>
          <button>New Arrivals</button>
          <button>Sale</button>
        </div>
        <select className="border rounded p-2">
          <option>Default sorting</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
        </select>
      </div>
      <div className="main-container flex flex-col md:flex-row p-4">
        <div className="w-full md:w-1/4">
          <Category />
        </div>

        <div className="products w-full md:w-3/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {plant?.map((plant, index) => (
            <div
              key={index}
              className="card border rounded-lg shadow-md relative overflow-hidden h-64"
            >
              <img
                src={plant.image}
                alt={plant.name}
                className="w-full h-40 object-cover"
              />
              <h2 className="text-lg font-semibold">{plant.name}</h2>
              <p className="text-green-500">{plant.price}</p>
              <div className="absolute top-2 right-2 flex space-x-2 opacity-0 hover:opacity-100 transition">
                <img src={searchIcon} alt="Search" className="w-6 h-6" />
                <Link to={"/shop"}>
                  <img src={trashIcon} alt="Trash" className="w-6 h-6" />
                </Link>
                <img src={likeIcon} alt="Like" className="w-6 h-6" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center mt-4">
        <button className="page-number active bg-green-500 text-white font-semibold py-2 px-4 rounded-l">
          1
        </button>
        <button className="page-number bg-gray-200 text-gray-700 font-semibold py-2 px-4">
          2
        </button>
        <button className="page-number bg-gray-200 text-gray-700 font-semibold py-2 px-4">
          3
        </button>
        <button className="page-number bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded-r">
          4
        </button>
        <button className="page-next bg-gray-200 text-gray-700 font-semibold py-2 px-4 ml-2 rounded">
          {">"}
        </button>
      </div>
    </>
  );
};

export default Main;
