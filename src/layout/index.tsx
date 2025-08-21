import { Outlet } from 'react-router';
import Footer from './Footer';
import Header from './Head';

export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
