import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sera Code",
  description:
    "Sera code is a team that can help you find solution about your digital business",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const CircleDecor = () => {
    return (
      <div className="absolute -top-[20vh] -left-[20vw] md:scale-150 sm:-left-[2vw]  -z-10 ">
        <svg
          width="356"
          height="356"
          viewBox="0 0 356 356"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M178 356C276.307 356 356 276.307 356 178C356 79.6933 276.307 0 178 0C79.6933 0 0 79.6933 0 178C0 276.307 79.6933 356 178 356ZM178.508 315.314C254.626 315.314 316.331 253.609 316.331 177.491C316.331 101.374 254.626 39.6686 178.508 39.6686C102.391 39.6686 40.6856 101.374 40.6856 177.491C40.6856 253.609 102.391 315.314 178.508 315.314Z"
            fill="#CFDBF4"
          />
        </svg>
      </div>
    );
  };
  return (
    <html lang="en" className="relative scroll-smooth">
      <body className={`${roboto.className}`}>
        {children}
        <CircleDecor />
      </body>
    </html>
  );
}
