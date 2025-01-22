import plantImage1 from '../../../public/01 1.svg';
import plantImage2 from '../../../public/rasm.svg';
import plantImage3 from '../../../public/rasm2.svg';
import plantImage4 from '../../../public/rasm3.svg';
import plantImage5 from '../../../public/rasm4.svg';
import plantImage6 from '../../../public/rasm5.svg';
import plantImage7 from '../../../public/rasm6.svg';
import plantImage8 from '../../../public/rasm7.svg';
import plantImage9 from '../../../public/rasm8.svg';

const Main = () => {
  return (
    <div className="main-container">
      <div className="sidebar hidden md:block">
        <h2>Categories</h2>
        <ul>
          <li>House Plants (33)</li>
          <li>Potter Plants (12)</li>
          <li>Seeds (65)</li>
          <li>Small Plants (39)</li>
          <li>Big Plants (59)</li>
          <li>Succulents (17)</li>
          <li>Terrariums (13)</li>
          <li>Gardening (19)</li>
          <li>Accessories (18)</li>
        </ul>
        <h2>Price Range</h2>
        <input type="range" min="39" max="1230" />
        <h2>Size</h2>
        <ul>
          <li>Small (119)</li>
          <li>Medium (86)</li>
          <li>Large (78)</li>
        </ul>
      </div>
      <div className="products">
        <h1>All Plants</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="card">
            <img src={plantImage1} alt="Barberton Daisy" className="w-full h-auto" />
            <h2>Barberton Daisy</h2>
            <p>$119</p>
          </div>
          <div className="card">
            <img src={plantImage2} alt="Angel Wing Begonia" className="w-full h-auto" />
            <h2>Angel Wing Begonia</h2>
            <p>$169</p>
          </div>
          <div className="card">
            <img src={plantImage3} alt="African Violet" className="w-full h-auto" />
            <h2>African Violet</h2>
            <p>$199</p>
          </div>
          <div className="card">
            <img src={plantImage4} alt="Beach Spider Lily" className="w-full h-auto" />
            <h2>Beach Spider Lily</h2>
            <p>$129</p>
          </div>
          <div className="card">
            <img src={plantImage5} alt="Blushing Bromeliad" className="w-full h-auto" />
            <h2>Blushing Bromeliad</h2>
            <p>$139</p>
          </div>
          <div className="card">
            <img src={plantImage6} alt="Aluminum Plant" className="w-full h-auto" />
            <h2>Aluminum Plant</h2>
            <p>$179</p>
          </div>
          <div className="card">
            <img src={plantImage7} alt="Bird's Nest Fern" className="w-full h-auto" />
            <h2>Bird's Nest Fern</h2>
            <p>$99</p>
          </div>
          <div className="card">
            <img src={plantImage8} alt="Broadleaf Lady Palm" className="w-full h-auto" />
            <h2>Broadleaf Lady Palm</h2>
            <p>$59</p>
          </div>
          <div className="card">
            <img src={plantImage9} alt="Chinese Evergreen" className="w-full h-auto" />
            <h2>Chinese Evergreen</h2>
            <p>$39</p>
          </div>
        </div>
      </div>
      <div className="sale-banner">
        <h2>Super Sale</h2>
        <h2>Super Sale</h2>
        <p>UP TO 75% OFF</p>
      </div>
    </div>
  );
};

export default Main;
