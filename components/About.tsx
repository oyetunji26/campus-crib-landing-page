import React from "react";
import SectionTag from "./ui/SectionTag";
import Image from "next/image";

const About = () => {
  return (
    <div className="section-y mx-auto " id="about-us">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-5 pt-20">
        <div className="flex-col gap-4 ">
          <SectionTag title="about us" />

          <h3 className="text-2xl font-bold text-dark">
            About <span className="text-primary">Campus crib</span>
          </h3>

          <p className="text-grey-900 text-sm">
            Campus Crib is a smart and secure student housing platform that
            connects students with verified hostels while giving agents an easy
            way to list and manage their properties. Our mission is to make
            hostel hunting seamless and stress-free for students while helping
            property owners fill their spaces effortlessly.
          </p>
        </div>

        <div
          className="flex-col  gap-3 py-9"
          style={{
            background: "url('/ellipse.png')",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
          }}
        >
          <div
            className="flex-col  gap-3 py-9"
            style={{
              background: "url('/gradient.png')",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
            }}
          >
            <div className="md:ml-7 border-l-8 px-4 py-2 shadow bg-white rounded-lg flex-center gap-1.5 border-[#5B1BA6]">
              <div className="bg-[#FCFCFC] size-10 p-3">
                <Image
                  src={"/rocket.svg"}
                  width={200}
                  height={200}
                  alt="rockcet"
                  className="size-6"
                />
              </div>
              <div className="grow">
                <h3 className="text-[#5B1BA6] font-bold">Mission Statement</h3>
                <p className="text-sm text-grey-900">
                  To simplify student housing by connecting students with
                  verified hostels and helping agents manage bookings
                  effortlessly.
                </p>
              </div>
            </div>

            <div className="md:mr-6 border-l-8 px-4 py-2 shadow bg-white rounded-lg flex-center gap-1.5 border-[#1BA68C]">
              <div className="bg-[#FCFCFC] size-10 p-3">
                <Image
                  src={"/eye.svg"}
                  width={100}
                  height={100}
                  alt="rockcet"
                  className="size-6"
                />
              </div>
              <div className="grow">
                <h3 className="text-[#1BA68C] font-bold">Vision Statement</h3>
                <p className="text-sm text-grey-900">
                  To be the go-to platform for seamless and secure student
                  accommodation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
