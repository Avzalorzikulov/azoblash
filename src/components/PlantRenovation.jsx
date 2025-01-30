import img from '../../public/footer3.jpg'; // Update this path to the new image

const GardenCareCard = () => {
  return (
    <div style={{width:250}} className="flex flex-col items-center text-center p-6 rounded-lg max-w-xs mx-auto">
      <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-full">
        <img src={img} alt="Plant Icon" className="w-12 h-12" />
      </div>
      <h3 className="text-xl font-semibold text-gray-800">Garden Care</h3>
      <p className="text-gray-600 mt-2">
        We are an online plant shop offering a wide range of cheap and trendy plants.
      </p>
    </div>
  );
};

export default GardenCareCard;
