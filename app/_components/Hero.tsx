import React from "react";
import { Bebas_Neue } from "next/font/google";
import { motion } from "framer-motion";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});
const StarSVG = () => {
  return (
    <svg
      width="33"
      height="33"
      viewBox="0 0 33 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute -bottom-9 sm:-bottom-8 scale-50 sm:scale-100 left-1/2 -translate-x-1/2"
    >
      <path
        d="M18.2817 1.33391L19.922 6.38254C20.4307 7.91814 21.2916 9.31343 22.4358 10.4569C23.58 11.6004 24.9757 12.4603 26.5116 12.9679L31.5645 14.6084L31.6682 14.6366C32.0576 14.7737 32.3948 15.0283 32.6333 15.3652C32.8719 15.7021 33 16.1047 33 16.5175C33 16.9303 32.8719 17.333 32.6333 17.6699C32.3948 18.0067 32.0576 18.2613 31.6682 18.3984L26.6153 20.0388C25.0786 20.5458 23.6818 21.4055 22.5368 22.549C21.3918 23.6925 20.5302 25.0881 20.021 26.6242L18.3854 31.6681C18.2484 32.0575 17.9938 32.3947 17.657 32.6333C17.3201 32.8719 16.9175 33 16.5047 33C16.0919 33 15.6893 32.8719 15.3525 32.6333C15.0156 32.3947 14.7611 32.0575 14.624 31.6681L12.9837 26.6242C12.4783 25.0829 11.6184 23.6816 10.4732 22.5329C9.3279 21.3843 7.92919 20.5204 6.38943 20.0105L1.33178 18.3701C0.942427 18.233 0.605207 17.9785 0.36666 17.6416C0.128113 17.3047 0 16.902 0 16.4892C0 16.0764 0.128113 15.6738 0.36666 15.3369C0.605207 15 0.942427 14.7454 1.33178 14.6084L6.38471 12.9679C7.90224 12.4472 9.27825 11.5814 10.4045 10.4387C11.5308 9.29601 12.3765 7.90754 12.8753 6.38254L14.5203 1.33863C14.6564 0.9476 14.9108 0.608628 15.2482 0.368754C15.5856 0.12888 15.9894 0 16.4034 0C16.8174 0 17.2211 0.12888 17.5585 0.368754C17.896 0.608628 18.1504 0.9476 18.2864 1.33863"
        fill="#C296FF"
      />
    </svg>
  );
};
async function Hero() {
  return (
    <section className="mt-[10vh] sm:mt-[20vh]  lg:mt-[25vh]">
      <div className="relative w-fit  mx-auto">
        <h1
          className={`${bebasNeue.className} bg-gradient-to-r from-mainColor to-secColor bg-clip-text text-transparent text-4xl max-w-[80vw] md:max-w-[40vw] mx-auto text-center sm:text-7xl md:pb-3`}
        >
          We design and code a website for you!
        </h1>
        <span className="w-[35%] h-[2px] sm:h-1 bg-mainColor absolute -bottom-5 left-[10%]"></span>
        <span className="w-[35%] h-[2px] sm:h-1 bg-mainColor absolute -bottom-5 right-[10%]"></span>
        <StarSVG />
      </div>
      <div className="mx-auto justify-center w-full mt-10 md:mt-20 flex flex-row gap-3 items-center">
        <p className="font-semibold text-xs md:text-base">Scroll Down</p>
        <div className="relative h-11 w-6 border-2 md:border-[3px] border-darkColor rounded-full">
          <span className="animate-bouncing  w-[19px] h-[19px] bg-darkColor rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
