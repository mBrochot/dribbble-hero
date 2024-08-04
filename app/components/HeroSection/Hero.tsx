import { type ReactElement } from "react";
import clsx from "clsx";

import Header from "../Header";
import Badge from "./Badge";
import RoundedBlackButton from "../RoundedBlackButton";

const Hero = (): ReactElement => {
  return (
    <div className="bg-custom-heroBackground">
      <Header />
      <div className="flex flex-col items-center pt-20">
        <Badge />
        <h1
          className={clsx(
            "font-serif text-5xl md:text-7xl text-center",
            "max-w-[870px]",
            "mt-10 mb-6 px-6"
          )}
        >
          The world’s destination for design
        </h1>
        <p className="text-lg md:text-xl leading-9 text-center px-8">
          Get inspired by the work of millions of top-rated designers & agencies
          around the world.
        </p>
        <RoundedBlackButton label="Get started" />
      </div>
    </div>
  );
};

export default Hero;
