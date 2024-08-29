// components/Portfolio.tsx
import React from "react";
import { PortfolioItem } from "./lib/fetchPortfolioData";
import { StarSVG } from "./lib/constant/SVGs";
import Link from "next/link";
import CategoryBtn from "./ui/CategoryBtn";

interface PortfolioProps {
  portfolioItems: PortfolioItem[];
}

const Portfolio: React.FC<PortfolioProps> = ({ portfolioItems }) => {
  return (
    <section className="mt-[10vh] sm:mt-[20vh] lg:mt-[25vh]" id="about-us">
      <div>
        <div className="text-3xl w-full bg-gradient-to-r flex flex-row gap-1 pl-1 py-1 items-center from-mainColor to-secColor">
          <StarSVG />
          <p className="font-semibold text-xs md:text-base text-white">
            Portfolio
          </p>
        </div>
        <div className="flex flex-row flex-wrap gap-3 mt-5">
          <CategoryBtn btnTitle="Website" />
          <CategoryBtn btnTitle="Design" />
        </div>
        <div className="mt-5 flex flex-wrap gap-3 justify-between">
          {portfolioItems.map((item) => (
            <Link
              href={item.project_link}
              key={item.id}
              className="mb-4 w-80 h-80"
            >
              <h3 className="text-lg font-bold mb-3">{item.project_name}</h3>
              <p className="text-sm">{item.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
