import React from "react";
import { Bebas_Neue, Roboto } from "next/font/google";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { StarSVG } from "./lib/constant/SVGs";

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});
const BebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});
function AboutUs() {
  const ServicesBtn: React.FC<{ btnTitle: string; btnLink: string }> = ({
    btnTitle,
    btnLink,
  }) => {
    return (
      <Link
        href={btnLink}
        className="group/btnService hover:from-secColor hover:to-secColor  flex gap-2 items-center  border-mainColor transition-all duration-200 text-white text-lg fill-white flex-row  py-2 px-4 font-bold bg-gradient-to-r from-mainColor to-secColor rounded-md"
      >
        <p className="text-sm md:text-lg"> {btnTitle} </p>
        <Icon
          icon="mdi:arrow-right"
          width="1.2em"
          height="1.2em"
          className="group-hover/btnService:translate-x-1  transition-all duration-200"
          style={{ color: "white" }}
        />
      </Link>
    );
  };

  const TechIcons = [
    { icons: "logos:figma" },
    { icons: "logos:nextjs-icon" },
    { icons: "skill-icons:react-dark" },
    { icons: "skill-icons:tailwindcss-dark" },
    { icons: "vscode-icons:file-type-css" },
    { icons: "vscode-icons:file-type-html" },
    { icons: "logos:javascript" },
    { icons: "logos:typescript-icon" },
  ];
  return (
    <section className="mt-[10vh] sm:mt-[20vh] lg:mt-[25vh]" id="about-us">
      <div>
        <div className="text-3xl w-full bg-gradient-to-r flex flex-row gap-1 pl-1  py-1 items-center from-mainColor to-secColor">
          <StarSVG />
          <p className="font-semibold text-xs md:text-base  text-white">
            About Us
          </p>
        </div>
        <div className="flex flex-col mt-5">
          <p
            className={`${BebasNeue.className} float-left text-4xl md:text-7xl text-mainColor font-bold mt-3 bg-main9`}
          >
            5ERA-CODE
          </p>
          <p
            className={`${roboto.className} text-darkColor  text-sm md:text-2xl`}
          >
            Adalah sebuah team yg dibentuk untuk memberikan solusi untuk kalian
            yang ingin memulai bisnis di era digital ini. Kami menawarkan
            beberapa jasa mulai dari
          </p>
        </div>
        <div className="flex flex-row flex-wrap gap-3 mt-5">
          <ServicesBtn btnTitle="Pembuatan Website" btnLink="/build-website" />
          <ServicesBtn btnTitle="Desain Grafis" btnLink="/graphic-design" />
        </div>
        <div className=" mt-7">
          <div className="flex flex-row gap-3 items-center">
            <p className="font-semibold text-mainColor">Technology</p>
            <div className="w-full h-[2px] sm:h-1 bg-mainColor"></div>
          </div>
          <div className="flex flex-wrap w-full items-center gap-5 md:gap-10 pt-4">
            {TechIcons.map((tech) => (
              <Icon
                key={tech.icons}
                className="hover:-translate-y-2 shrink-0 transition-all duration-200 "
                icon={tech.icons}
                width="45"
                height="45"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
