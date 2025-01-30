import gardenCareImage from '../../public/footer1.jpg'; // Update this path to the new image

const GardenCare = () => {
  return (
    <div className="flex flex-col items-center text-center p-4">
      <img src={gardenCareImage} alt="Garden Care" className="w-16 h-16 mb-4" />
      <h3 className="font-semibold text-lg mb-2">Garden Care</h3>
      <p className="text-sm max-w-xs">
        We are an online plant shop offering a wide range of cheap and trendy plants.
      </p>
    </div>
  );
};

export default GardenCare;
