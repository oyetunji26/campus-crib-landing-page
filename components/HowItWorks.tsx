/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Image from "next/image";
import React, { useState } from "react";
import SectionTag from "./ui/SectionTag";

type DataItem = {
  title: string;
  content: string;
  image: string;
};

const HowItWorks = () => {
  const tabs: { title: string }[] = [
    {
      title: "Students",
    },
    {
      title: "Agents",
    },
  ];

  const howToSteps: DataItem[] = [
    {
      title: "Sunset at the Beach",
      content: "A beautiful view of the sunset at the beach with golden hues.",
      image: "search-01.svg",
    },
    {
      title: "Mountain Adventure",
      content: "Hiking through the rocky trails of the highest mountains.",
      image: "credit-card-pos.svg",
    },
    {
      title: "City Lights",
      content: "The dazzling city skyline illuminated at night.",
      image: "luggage-02.svg",
    },
  ];

  const agentHowToSteps: DataItem[] = [
    {
      title: "List Your Hostel",
      content: "Sign up and showcase your hostel to thousands of students.",
      image: "home.svg",
    },
    {
      title: "Receive Bookings",
      content: "Students can find and book your hostel directly through the platform.",
      image: "appointment.svg",
    },
    {
      title: "Earn & Withdraw Payments",
      content: "Track payments and withdraw earnings securely anytime.",
      image: "wallet-add.svg",
    },
  ];

  const [activeTab, setActiveTab] = useState<number>(0);
  return (
    <div className="section-y pb-10 pt-20 flex flex-col gap-6 md:gap-12" id="how-it-works">
      <div className="grid md:grid-cols-[3fr__1fr__2fr] justify-between gap-3 mt-20">
        <div className=" flex flex-col gap-3">
          <SectionTag title="How it works" />

          <h3 className="text-dark text-3xl font-medium">
            Seamless & Simple: How Campus Crib Works
          </h3>

          <p className="text-sm text-[#454545]">
            A seamless process designed for students looking for the perfect
            hostel and agents looking to fill their spaces effortlessly.
          </p>

          <div className="bg-[#FCFCFC] flex-between shadow-2xs gap-2 p-2 rounded-xl w-fit">
            {tabs?.map((item: any, i: number) => (
              <button
                onClick={() => setActiveTab(i)}
                key={i}
                className={`w-full rounded-lg text-sm px-5 py-2 ${
                  activeTab == i
                    ? "bg-primary text-white font-semibold"
                    : "text-grey"
                }`}
              >
                {item?.title}
              </button>
            ))}
          </div>
        </div>
        <div className=""></div>
        <div className=" bg-[#FCFCFC] flex-center pt-8">
          <Image src={"/iPhone-14.png"} alt="" width={150} height={200} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {activeTab == 0 ? 
        howToSteps?.map((item: any, i: number) => (
          <div key={i} className="flex flex-col gap-1.5">
            <div className="md:flex-center">
              <div
                className={`w-fit rounded-xl p-2.5 ${
                  i == 0
                    ? "bg-[#1BA68C]"
                    : i == 1
                    ? "bg-[#1B85A6]"
                    : "bg-[#5B1BA6]"
                }`}
              >
                <Image
                  src={`/${item?.image}`}
                  alt={item?.title}
                  width={100}
                  height={100}
                  className=" size-5 md:size-6"
                />
              </div>
              <hr className={`${i < 2 ? 'text-[#454545]' : 'text-white'} grow max-md:hidden`} />
            </div>

            <h3 className="text-dark font-semibold ">{item?.title}</h3>

            <p className="text-[#454545] text-sm">{item?.content}</p>
          </div>
        )) : agentHowToSteps?.map((item: any, i: number) => (
          <div key={i} className="flex flex-col gap-1.5">
            <div className="md:flex-center">
              <div
                className={`w-fit rounded-xl p-2.5 ${
                  i == 0
                    ? "bg-[#1BA68C]"
                    : i == 1
                    ? "bg-[#1B85A6]"
                    : "bg-[#5B1BA6]"
                }`}
              >
                <Image
                  src={`/${item?.image}`}
                  alt={item?.title}
                  width={100}
                  height={100}
                  className=" size-5 md:size-6"
                />
              </div>
              <hr className={`${i < 2 ? 'text-[#454545] text-sm' : 'text-white'} grow max-md:hidden`} />
            </div>

            <h3 className="text-dark font-semibold ">{item?.title}</h3>

            <p className="text-[#454545] text-sm">{item?.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
