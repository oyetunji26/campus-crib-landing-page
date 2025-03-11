/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import SectionTag from "./ui/SectionTag";
import Image from "next/image";
import Link from "next/link";

const Contact = () => {
  const items = [
    {
      icon: "chat.svg", // You can replace with an actual icon component if using a library like react-icons
      title: "Chat to support",
      desc: "We are here to help.",
      ref: "support@campuscrib.com",
    },
    {
      icon: "location.svg",
      title: "Visit Us",
      desc: "Visit our office HQ.",
      ref: "View on Google Maps",
    },
    {
      icon: "phone.svg",
      title: "Call Us",
      desc: "Mon-Fri 8am to 5pm.",
      ref: "+1 (555) 000-0000",
    },
  ];
  return (
    <div id="contact-us" className="section-y my-10 mx-auto">
      <div
        className=" grid grid-cols-1 md:grid-cols-2 items-center gap-5 pt-20"
        
      >
        <div className="flex-col gap-3 col-span-1">
          <SectionTag title="contact us" />

          <h3 className="text-2xl font-bold text-dark">Get in Touch with Us</h3>

          <p className="text-grey-900 text-sm">
            Whether you`re a student looking for a hostel, an agent listing your
            property, or you just have a question, we`re here to help. Reach out
            to us, and our team will assist you as soon as possible.
          </p>
        </div>

        <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-7">
          {items?.map((item: any, i: number) => (
            <div
              key={i}
              className="border border-[#D4D4D4] flex-col gap-5 rounded-lg p-3"
            >
              <div className="border border-[#D4D4D4] p-2.5 rounded-lg w-fit">
                <Image
                  src={`/${item?.icon}`}
                  alt={item?.title}
                  width={100}
                  height={100}
                  className="size-4 md:size-5 "
                />
              </div>

              <div className="flex-col gap-2">
                <h3 className="text-dark font-semibold">{item?.title}</h3>
                <p className="text-[#636363] text-xs">{item?.desc}</p>
              </div>

              <Link
                href={"/"}
                className="underline text-xs font-medium text-dark"
              >
                {item?.ref}
              </Link>
            </div>
          ))}
        </div>

        <div className="md:col-span-2 section-y md:mt-10 grid grid-cols-1 md:grid-cols-2 items-center gap-5">
          <div className="flex-col gap-3">
            <SectionTag title="join us" />
            <h3 className="text-dark text-xl font-semibold">
              Campus Crib Makes It Easy
            </h3>
            <p className="text-sm text-grey-900">
              Helping students find the perfect hostel while giving agents the
              tools to manage bookings effortlessly. With verified listings,
              secure payments, and a seamless experience, Campus Crib makes
              student housing stress-free, whether you`re searching for
              accommodation or looking to fill your spaces.
            </p>
            <button className="bg-primary btn mt-2.5 text-white text-sm font-bold">
              Get Started Now !
            </button>
          </div>

          <Image
            src={"/join-us.png"}
            alt="join"
            width={2000}
            height={2000}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
