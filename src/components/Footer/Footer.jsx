import First from '../GardenCare';
import Newslett from '../Newsletter';
import Ikki from '../PlantRenovation';
import Uch from '../WateringGarden';
import ContactInfo from '../ContactInfo';
import Nmadr from '../HelpAndGuide';

function Footer() {
  return (
    <>
      <footer className="bg-gray-100 text-gray-700 p-6">
        <div className="flex flex-wrap justify-center gap-6">
          <First />
          <Ikki />
          <Uch />
          <Newslett />
        </div>
      </footer>
      <div className="bg-white">
        <ContactInfo />
      </div>
      <div className="bg-gray-200 p-6">
        <Nmadr />
      </div>
    </>
  );
}

export default Footer;
