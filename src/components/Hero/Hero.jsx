import plantImage from "../../../public/nmadr.svg"; // Update this path to the new image

const Hero = () => {
  return (
    <div className="hero-container bg-[#F5F5F580] flex flex-col md:flex-row items-center justify-between p-8">
      <div className="text-section text-center md:text-left">
        <p className="text-lg font-semibold">WELCOME TO GREENSHOP</p>
        <h2 className="text-4xl md:text-5xl font-extrabold">
          LET&apos;S MAKE A BETTER <span className="text-green-500">PLANET</span>
        </h2>
        <p className="mt-4 text-lg">
          We are an online plant shop offering a wideb range of cheap and trendy plants. Use our plants to create a unique Urban Jungle. Order your favorite plants!
        </p>
        <button className="mt-6 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition">
          SHOP NOW
        </button>
      </div>
      <img src={plantImage} alt="Plants" className="hero-image w-full md:w-1/2 mt-4 md:mt-0 rounded-lg" />
    </div>
  );
};

export default Hero;
