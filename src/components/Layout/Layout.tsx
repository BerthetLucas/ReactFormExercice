import { Outlet } from 'react-router-dom';
import { Nav } from './Nav.tsx';
import { Footer } from './Footer.tsx';
import { MainMotion } from '../MotionComponent/MainMotion.tsx';

export const Layout = () => {
  return (
    <>
      <Nav />
      <MainMotion
        className="flex flex-col gap-10 items-center justify-center py-5 min-h-screen"
        delay={0.1}
      >
        <Outlet />
      </MainMotion>
      <Footer />
    </>
  );
};
