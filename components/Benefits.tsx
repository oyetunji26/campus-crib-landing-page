import React from "react";
import SectionTag from "./ui/SectionTag";
import Image from "next/image";

const Benefits = () => {
  return (
    <div className="section-y pt-5" id="benefits">
      <div className="md:w-1/2 flex flex-col gap-2 mt-20">
        <SectionTag title="Benefits" />
        <h3 className="text-dark mt-4 text-2xl font-semibold ">
          Why Choose Campus Crib?
        </h3>
        <p className="text-grey text-sm">
          A seamless process designed for students looking for the perfect
          hostel and agents looking to fill their spaces effortlessly.
        </p>
      </div>

      <div className="md:grid md:grid-cols-2 max-md:flex max-md:flex-col  gap-4 md:gap-6 mt-7">
        <div className="col-span-2 px-6 md:grid grid-cols-[3fr__2fr] rounded-lg shadow  bg-gradient-to-tr from-[#FAF5F2]  via-[#1B85A633] to-[#5B1BA633]">
          <div className="flex flex-col justify-center gap-2  my-6">
            <h3 className="text-primary font-bold text-lg">
              Find & Compare Verified Hostels Effortlessly
            </h3>

            <p className="text-grey-900 text-sm line-clamp-3 font-light">
              Skip the stress of hostel hunting. Search by location, budget, and
              amenities, and compare multiple verified hostels—all in one place.
            </p>
          </div>

          <Image
            src={"/benefit-1.png"}
            alt="bcd"
            width={2000}
            height={2000}
            className="size-full"
          />
        </div>

        <div className="col-span-1 px-6 pt-6 flex flex-col rounded-lg shadow gap-3 bg-[#1B85A633]">
          <h3 className="text-[#1B85A6] font-bold text-lg">
            Book with Confidence & Pay Flexibly
          </h3>
          <p className="text-grey-900 font-light text-xs">
            Once you find your perfect hostel, secure your booking instantly
            with safe and flexible payment options—pay in full or in
            installments.
          </p>

          <Image
            src={"/benefit-2.png"}
            alt="bcd"
            width={140}
            height={160}
            className=" object-contain"
          />
        </div>

        <div className="col-span-1 px-6 pt-6 flex flex-col rounded-lg shadow gap-3 bg-[#5B1BA633]">
          <h3 className="text-[#1B85A6] font-bold text-lg">
            List Your Hostel & Get More Bookings
          </h3>
          <p className="text-grey-900 font-light text-xs">
            Easily add your hostel details, upload photos, and set
            pricing—reaching thousands of students in minutes.
          </p>

          <Image
            src={"/benefit-3.png"}
            alt="bcd"
            width={140}
            height={160}
            className="ml-auto"
          />
        </div>

        <div className="col-span-2 pl-6 md:grid grid-cols-[3fr__2fr] rounded-lg shadow  bg-gradient-to-tr from-[#1BA68C33] via-[#1B85A633] to-[#5B1BA633]">
          <div className="flex flex-col justify-center gap-2  my-6">
            <h3 className="text-[#1BA68C] font-bold text-lg">
              Receive Payments & Track Earnings Seamlessly
            </h3>

            <p className="text-grey-900 text-sm line-clamp-3 font-light">
              No more chasing payments—receive secure transactions, manage
              bookings, and withdraw earnings easily from your agent dashboard
            </p>
          </div>

          <Image
            src={"/benefit-4.png"}
            alt="bcd"
            width={2000}
            height={2000}
            className="size-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Benefits;
