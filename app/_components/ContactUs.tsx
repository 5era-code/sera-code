import React from "react";
import { Bebas_Neue } from "next/font/google";
import { Icon } from "@iconify/react";
import Link from "next/link";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

const contacts = [
  { id: 1, icon: "material-symbols:mail", href: "mailto:5era-code.com" },
  { id: 2, icon: "ri:instagram-fill", href: "https://instagram.com" },
];
function ContactUs() {
  return (
    <footer className="w-full py-[5vh] bg-mainColor mt-[10vh] sm:mt-[20vh]  lg:mt-[25vh]">
      <section id="contact">
        <div>
          <h1
            className={`${bebasNeue.className} text-3xl sm:text-5xl text-white cursor-pointer`}
          >
            5era-code
          </h1>
          <p className=" text-white">Contact us</p>
          <div className="flex flex-row mt-6 gap-3">
            {contacts.map((contact) => (
              <Link
                key={contact.id}
                href={contact.href}
                className="text-white text-sm sm:text-lg hover:-translate-y-2 transition-all duration-200"
              >
                <Icon
                  icon={contact.icon}
                  width="35"
                  height="35"
                  className="fill-mainColor"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>
      <p className="text-white text-center mt-10 text-xs md:text-sm">
        &copy; {new Date().getFullYear()} 5era-code. All rights reserved.
      </p>
    </footer>
  );
}

export default ContactUs;
