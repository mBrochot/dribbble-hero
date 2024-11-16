import type { ReactNode } from 'react';

const Footer = (): ReactNode => {
  return (
    <div className="pt-40 px-8 pb-12 flex justify-center md:justify-start">
      <ul className="text-sm text-custom-grey">
        <li>© 2024 Mathieu Brochot</li>
      </ul>
    </div>
  );
};

export default Footer;
