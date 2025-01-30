import tadan1 from '../../../public/tadan1.svg'; // Update this path to the new image
import tadan2 from '../../../public/tadan2.svg'; // Update this path to the new image

function Cards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
      <div
        style={{ width: '100%', maxWidth: '586px', height: 'auto' }}
        className="flex bg-white border border-gray-300 shadow-lg rounded-lg p-6"
      >
        <img
          src={tadan1}
          alt="Styling Trends & Much More"
          className="w-1/2 h-48 object-cover rounded-md mr-4"
        />
        <div className="flex flex-col justify-center">
          <h2 className="text-lg font-bold mb-1">STYLING TRENDS & MUCH MORE</h2>
          <p className="text-gray-600 mb-2">
            We are an online plant shop offering a wide range of cheap and trendy plants.
          </p>
          <button className="bg-green-500 text-white py-1 px-3 rounded hover:bg-green-600 transition">
            Find More &rarr;
          </button>
        </div>
      </div>
      <div
        style={{ width: '100%', maxWidth: '586px', height: 'auto' }}
        className="flex bg-white border border-gray-300 shadow-lg rounded-lg p-6"
      >
        <img
          src={tadan2}
          alt="Styling Trends & Much More"
          className="w-1/2 h-48 object-cover rounded-md mr-4"
        />
        <div className="flex flex-col justify-center">
          <h2 className="text-lg font-bold mb-1">STYLING TRENDS & MUCH MORE</h2>
          <p className="text-gray-600 mb-2">
            We are an online plant shop offering a wide range of cheap and trendy plants.
          </p>
          <button className="bg-green-500 text-white py-1 px-3 rounded hover:bg-green-600 transition">
            Find More &rarr;
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
