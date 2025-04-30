import React from "react";
import SectionTag from "./ui/SectionTag";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="section-y mx-auto">
      <SectionTag title="ideal student home" otherStyles="mx-auto mt-4" />

      <div className="md:section-x section-y max-w-4xl mx-auto flex flex-col items-center gap-3 md:gap-5">
        <h3 className="text-dark text-base  md:text-3xl font-bold md:font-medium text-center  ">
          Smart, Secure & Stress-Free Student Housing
        </h3>
        <div className=" text-grey text-xs md:text-sm font-light text-center">
          Finding student accommodation shouldn’t be stressful, and listing a
          hostel shouldn’t be complicated. Campus Crib simplifies
          everything—helping students discover verified, affordable hostels near
          their campus while giving agents the tools they need to manage
          bookings effortlessly.
        </div>

        <a
          href={process.env.NEXT_PUBLIC_WEB_APP_LINK}
          rel="noopener noreferrer"
          className="btn bg-primary btn mt-2.5 text-white text-sm font-bold"
        >
          Get Started
        </a>
      </div>

      <div
        className=" flex flex-col  items-center max-md:my-6 "
        style={{
          backgroundImage: "url('/hero-bg.png')",
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Image
          src={"/phone-mockups2.png"}
          alt="phone mockup"
          width={400}
          height={400}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default Hero;
