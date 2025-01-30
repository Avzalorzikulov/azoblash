import rasm1 from '../../../public/rasm.svg';
import rasm2 from '../../../public/rasm2.svg';
import rasm3 from '../../../public/rasm3.svg';
import rasm4 from '../../../public/rasm4.svg';
import rasm5 from '../../../public/rasm5.svg';

const PlantDescriptions = () => {
  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-4 text-center">You may be interested in</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 justify-items-center">
        <div className="bg-white shadow-lg rounded-lg p-4 text-center transition-transform transform hover:scale-105">
          <img src={rasm1} alt="Beach Spider Lily" className="w-32 h-auto mb-2" />
          <p className="font-semibold">Beach Spider Lily - $129.00</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-4 text-center transition-transform transform hover:scale-105">
          <img src={rasm2} alt="Blushing Bromeliad" className="w-32 h-auto mb-2" />
          <p className="font-semibold">Blushing Bromeliad - $139.00</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-4 text-center transition-transform transform hover:scale-105">
          <img src={rasm3} alt="Aluminum Plant" className="w-32 h-auto mb-2" />
          <p className="font-semibold">Aluminum Plant - $179.00</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-4 text-center transition-transform transform hover:scale-105">
          <img src={rasm4} alt="Bird's Nest Fern" className="w-32 h-auto mb-2" />
          <p className="font-semibold">Bird&apos;s Nest Fern - $99.00</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-4 text-center transition-transform transform hover:scale-105">
          <img src={rasm5} alt="Chinese Evergreen" className="w-32 h-auto mb-2" />
          <p className="font-semibold">Chinese Evergreen - $39.00</p>
        </div>
      </div>
    </div>
  );
};

export default PlantDescriptions;
