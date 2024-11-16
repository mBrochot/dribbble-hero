import type { ReactNode } from 'react';

import { Hero } from 'components/HeroSection';
import { Footer } from 'components/FooterSection';

const Home = (): ReactNode => {
  return (
    <main className="flex flex-col justify-between h-dvh">
      <Hero />
      <Footer />
    </main>
  );
};

export default Home;
