import firstImage from '../../../public/first.svg';
import secondImage from '../../../public/second.svg';
import thirdImage from '../../../public/third.svg';
import fourthImage from '../../../public/rasm7.svg';

function Blog() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center mb-4">Our Blog Posts</h1>
      <p className="text-center mb-8">
        We are an online plant shop offering a wide range of cheap and trendy plants.
      </p>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        <div className="bg-white border border-gray-300 shadow-lg rounded-lg p-6 text-center">
          <img
            src={firstImage}
            alt="Cactus & Succulent Care Tips"
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <p className="text-gray-500 mb-1">September 12 | Read in 6 minutes</p>
          <h2 className="text-xl font-bold mb-2">Cactus & Succulent Care Tips</h2>
          <p className="text-gray-600 mb-4">
            Cacti are succulents that are easy care plants for any home or patio.
          </p>
          <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition">
            Read More &rarr;
          </button>
        </div>

        <div className="bg-white border border-gray-300 shadow-lg rounded-lg p-6 text-center">
          <img
            src={secondImage}
            alt="Top 10 Succulents for Your Home"
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <p className="text-gray-500 mb-1">September 13 | Read in 2 minutes</p>
          <h2 className="text-xl font-bold mb-2">Top 10 Succulents for Your Home</h2>
          <p className="text-gray-600 mb-4">
            Best in hanging baskets. Prefers medium to high light.
          </p>
          <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition">
            Read More &rarr;
          </button>
        </div>

        <div className="bg-white border border-gray-300 shadow-lg rounded-lg p-6 text-center">
          <img
            src={thirdImage}
            alt="Cacti & Succulent Care Tips"
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <p className="text-gray-500 mb-1">September 15 | Read in 3 minutes</p>
          <h2 className="text-xl font-bold mb-2">Cacti & Succulent Care Tips</h2>
          <p className="text-gray-600 mb-4">
            Cacti and succulents thrive in containers and because most are...
          </p>
          <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition">
            Read More &rarr;
          </button>
        </div>

        <div className="bg-white border border-gray-300 shadow-lg rounded-lg p-6 text-center">
          <img
            src={fourthImage}
            alt="Best Houseplants Room By Room"
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <p className="text-gray-500 mb-1">September 15 | Read in 2 minutes</p>
          <h2 className="text-xl font-bold mb-2">Best Houseplants Room By Room</h2>
          <p className="text-gray-600 mb-4">
            The benefits of houseplants are endless. In addition to...
          </p>
          <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition">
            Read More &rarr;
          </button>
        </div>
      </div>
    </div>
  );
}

export default Blog;
