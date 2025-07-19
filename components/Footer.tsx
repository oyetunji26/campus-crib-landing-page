/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div
      className="bg-cover bg-center overflow-y-hidden "
      style={{ backgroundImage: "url('/footer-bg.jpeg')" }}
    >
      <div className="bg-[#3C1C0A]/60">
        <div className="max-w-6xl px-5 pt-10 py-3 mx-auto text-white">
          <div className="flex justify-between max-md:flex-col gap-4">
            <div className="flex-col gap-2">
              <div className="flex items-center">
                {/* <div className="bg-[#A64E1B] size-10 rounded-xl" /> */}
                <Image
                  src="/logo8.png"
                  width={100}
                  height={100}
                  alt="Logo"
                  className="object-contain w-12 h-12"
                />
                <h3 className="text-xl font-bold">Campus_Crib</h3>
              </div>

              <p className="max-w-xl text-md text-gray-300">
                Campus Crib makes student housing easy by connecting students
                with verified hostels while giving agents the tools to manage
                listings effortlessly. Secure, seamless, and built for you
              </p>
            </div>

            <div className="flex gap-3">
              <ul className="flex-col gap-1.5">
                <li className="text-[#A64E1B] font-semibold text-base">
                  Quick links
                </li>
                <Link href={"/#home"}>Home</Link>
                <Link href={"/#how-it-works"}>How it works</Link>
                <Link href={"/#benefits"}>Benefits</Link>
                <Link href={"/#about-us"}>About us</Link>
                <Link href={"/#contact-us"}>Contact us</Link>
              </ul>

              <ul className="flex-col gap-1.5">
                <li className="text-[#A64E1B] font-semibold text-base">
                  Support
                </li>
                <li>Help center</li>
              </ul>
            </div>
          </div>

          <div className="flex justify-between max-md:flex-col gap-4 py-10">
            <div className="text-[#FDFAC5]">
              © 2024 Campus Crib. All rights reserved
            </div>
            <div className="flex-between gap-2">
              {[
                { icon: "x.svg", link: "" },
                {
                  icon: "instagram.svg",
                  link: "https://www.instagram.com/campus_crib/",
                },
                { icon: "tiktok.svg", link: "" },
                { icon: "linkedin.svg", link: "" },
              ]?.map((item: any, i: number) => (
                <Link
                  href={item?.link}
                  key={i}
                  className="bg-[#713512] p-2 rounded-lg"
                >
                  <Image
                    src={`/${item.icon}`}
                    alt={item.icon}
                    width={100}
                    height={100}
                    className="size-5"
                  />
                </Link>
              ))}
            </div>
          </div>

          <div className="text-[#f0f0f050] text-center text-4xl md:text-6xl lg:text-9xl  md:-mb-12 lg:-mb-16 ">
            CAMPUS CRIB
          </div>
        </div>
      </div>
    </div>
    // </footer>
  );
};

export default Footer;
