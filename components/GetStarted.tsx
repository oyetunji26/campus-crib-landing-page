import React from "react";
import Image from "next/image";

const GetStarted = () => {
  return (
    <div className=" md:mx-5  max-md:py-7  bg-[#FCFCFC]">
      <div className="max-w-6xl mx-auto px-5 grid grid-cols-[1fr__1fr] flex-between  ">
        <div className="flex flex-col gap-2.5">
          <h3 className="text-dark font-semibold text-2xl">Start Your Journey with Campus Crib Today</h3>
          <p className="text-[#454545] text-base">
            Join thousands of students and agents already using the platform!
          </p>
          <button className="btn w-fit bg-primary text-xs font-semibold">
            Get Started
          </button>
        </div>

        <Image src={'/objects.svg'} alt="" width={250} height={270} className="max-md:hidden size-80 -mb-4 -mt-8" />
      </div>
    </div>
  );
};

export default GetStarted;
