import React from "react";
import { Bebas_Neue, Roboto } from "next/font/google";
import Link from "next/link";
import { Icon } from "@iconify/react";
import Image from "next/image";

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
  const StarSVG = () => {
    return (
      <svg
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="scale-50"
      >
        <path
          d="M13.8498 1.01054L15.0925 4.83526C15.4778 5.99859 16.13 7.05563 16.9968 7.92189C17.8636 8.78815 18.921 9.4396 20.0845 9.82418L23.9125 11.0669L23.9911 11.0884C24.286 11.1922 24.5415 11.3851 24.7222 11.6403C24.9029 11.8955 25 12.2005 25 12.5133C25 12.826 24.9029 13.131 24.7222 13.3863C24.5415 13.6415 24.286 13.8343 23.9911 13.9382L20.1631 15.1809C18.9989 15.565 17.9408 16.2163 17.0733 17.0826C16.2059 17.9488 15.5532 19.0061 15.1674 20.1698L13.9283 23.991C13.8245 24.286 13.6317 24.5415 13.3765 24.7222C13.1213 24.9029 12.8163 25 12.5036 25C12.1909 25 11.8859 24.9029 11.6307 24.7222C11.3755 24.5415 11.1826 24.286 11.0788 23.991L9.83613 20.1698C9.45325 19.0022 8.80183 17.9406 7.93421 17.0704C7.06659 16.2002 6.00696 15.5457 4.84048 15.1595L1.00893 13.9167C0.71396 13.8129 0.45849 13.62 0.277773 13.3648C0.0970554 13.1096 0 12.8046 0 12.4918C0 12.1791 0.0970554 11.8741 0.277773 11.6188C0.45849 11.3636 0.71396 11.1708 1.00893 11.0669L4.8369 9.82418C5.98655 9.42968 7.02898 8.7738 7.8822 7.90811C8.73542 7.04243 9.37616 5.99056 9.754 4.83526L11.0002 1.01411C11.1033 0.717879 11.296 0.461082 11.5517 0.279359C11.8073 0.0976363 12.1132 0 12.4268 0C12.7404 0 13.0463 0.0976363 13.3019 0.279359C13.5575 0.461082 13.7503 0.717879 13.8534 1.01411"
          fill="white"
        />
      </svg>
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
    <section className="mt-[10vh] sm:mt-[20vh]  lg:mt-[25vh]" id="about-us">
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
