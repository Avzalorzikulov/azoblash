import wateringGardenImage from '../../public/footer2.jpg'; // Update this path to the new image

const WateringGarden = () => {
  return (
    <div className="flex flex-col items-center text-center p-4">
      <div className="w-16 h-16 mb-4 flex items-center justify-center bg-green-100 rounded-full">
        <img src={wateringGardenImage} alt="Watering Garden" className="w-12 h-12 rounded-full" />
      </div>
      <h3 className="text-xl font-semibold text-gray-800">Watering Garden</h3>
      <p className="text-gray-600 mt-2 text-sm max-w-xs">
        We are an online plant shop offering a wide range of cheap and trendy plants.
      </p>
    </div>
  );
};

export default WateringGarden;
