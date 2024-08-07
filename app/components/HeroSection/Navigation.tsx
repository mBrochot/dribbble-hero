import { type ReactElement } from "react";

const Navigation = (): ReactElement => {
  const links = ["Find designers", "Inspiration", "Jobs", "Go Pro"];

  const handleLinks = (word: string): ReactElement | string => {
    0;
    if (word.includes("g")) {
      const index = word.indexOf("g");
      const firstPart = word.substring(0, index);
      const secondPart = word.substring(index + 1);
      return (
        <>
          {firstPart}
          <span className="font-serif text-base">{word[index]}</span>
          {secondPart}
        </>
      );
    }
    return word;
  };

  return (
    <ul className="text-sm font-semibold hidden space-x-8 md:flex items-center">
      {links.map((link, index) => (
        <li key={index}>{handleLinks(link)}</li>
      ))}
    </ul>
  );
};

export default Navigation;
