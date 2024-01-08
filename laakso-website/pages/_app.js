import SideBar from '@/components/SideBar';
import Navbar from '../components/Navbar';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <div className="ml-24">
      <SideBar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;