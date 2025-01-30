import Left from '../../components/Left/Left';
import Header from '../../components/Header/Header';
import Rigth from '../../components/Rigth/Rigth';
import Footer from '../../components/Footer/Footer';

export default function Login() {
  return (
    <div>
      <Header />
      <div className='flex flex-col md:flex-row'>
        <Left />
        <Rigth />
      </div>
      <Footer />
    </div>
  );
}
