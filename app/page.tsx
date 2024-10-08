// pages/index.tsx
import AboutUs from "./_components/AboutUs";
import Hero from "./_components/Hero";
import { NavBar } from "./_components/NavBar";
import ContactUs from "./_components/ContactUs";
import Portfolio from "./_components/Portfolio";
import {
  fetchPortfolioData,
  PortfolioItem,
} from "./_components/lib/fetchPortfolioData";

interface PortfolioPageProps {
  portfolioItems: PortfolioItem[];
}

export default async function Home() {
  const SideLineDecor = () => {
    return (
      <>
        <span
          className="hidden md:block w-[1px] h-[35vh] bg-darkColor absolute top-0 left-[4vw] z-10"
          id="side-line-decor"
        ></span>
        <span
          className="hidden md:block w-[1px] h-[60vh] bg-darkColor absolute top-0 right-[4vw] z-10"
          id="side-line-decor"
        ></span>
        <span
          className="hidden md:block w-[1px] h-[55vh] bg-darkColor absolute bottom-0 left-[4vw] z-10"
          id="side-line-decor-bottom"
        ></span>
        <span
          className="hidden md:block w-[1px] h-[30vh] bg-darkColor absolute bottom-0 right-[4vw] z-10"
          id="side-line-decor-bottom"
        ></span>
      </>
    );
  };

  const portfolioItems: PortfolioItem[] = await fetchPortfolioData();

  return (
    <main className="flex max-w-7xl mx-auto min-h-screen flex-col relative">
      <SideLineDecor />
      <NavBar />
      <Hero />
      <AboutUs />
      <Portfolio portfolioItems={portfolioItems} />
      <ContactUs />
    </main>
  );
}
