/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Image from "next/image";

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
              <div className="flex gap-2 items-center">
                <div className="bg-[#A64E1B] size-10 rounded-xl" />
                <h3>Campus Crib</h3>
              </div>

              <p className="max-w-xl">
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
                <li>Home</li>
                <li>How it works</li>
                <li>Benefits</li>
                <li>About us</li>
                <li>Contact us</li>
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
              {["x.svg", "instagram.svg", "tiktok.svg", "linkedin.svg"]?.map(
                (item: any, i: number) => (
                  <div key={i} className="bg-[#713512] p-2 rounded-lg">
                    <Image
                      src={`/${item}`}
                      alt={item}
                      width={100}
                      height={100}
                      className="size-5"
                    />
                  </div>
                )
              )}
            </div>
          </div>

          <div className="text-[#713512] text-center text-4xl md:text-6xl lg:text-9xl  md:-mb-12 lg:-mb-16 ">CAMPUS CRIB</div>
        </div>
      </div>
    </div>
    // </footer>
  );
};

export default Footer;
