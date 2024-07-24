import AboutUs from "./_components/AboutUs";
import Hero from "./_components/Hero";
import { NavBar } from "./_components/NavBar";
import ContactUs from "./_components/ContactUs";

export default function Home() {
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
  return (
    <main className="flex min-h-screen flex-col relative">
      <SideLineDecor />
      <NavBar />
      <Hero />
      <AboutUs />
      <ContactUs />
    </main>
  );
}
