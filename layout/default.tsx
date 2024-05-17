import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Sample from '@/components/Sample';
import { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
      <Sample />
    </>
  );
};

export default Layout;
