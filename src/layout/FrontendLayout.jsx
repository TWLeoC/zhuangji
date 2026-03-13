import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function FrontendLayout() {
  return (
    <>
      <Navbar />
      <main>
        <div className="container">
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default FrontendLayout;
