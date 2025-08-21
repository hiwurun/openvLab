import type { PropsWithChildren } from 'react';
import Footer from './Footer';
import Header from './Head';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
