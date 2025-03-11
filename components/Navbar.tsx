'use client'
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

type MenuItem = {
  title: string;
  ref: string;
};

const Navbar = () => {
  const menuItems: MenuItem[] = [
    { title: "Home", ref: "home" },
    { title: "How It Works", ref: "how-it-works" },
    { title: "Benefits", ref: "benefits" },
    { title: "About Us", ref: "about-us" },
    { title: "Contact Us", ref: "contact-us" },
  ];

  const [activeTab, setActiveTab] = useState<number>(0);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  useEffect(() => {


    const handleScroll = () => {
      // Your onScroll logic here
      // Example: Add a class to the navbar when scrolling down
      const navbar = document.querySelector("#navbar");
      if (navbar && window.scrollY > 0) {
        navbar?.classList.add("scrolled");
      } else {
        navbar?.classList.remove("scrolled");
      }

    
    }
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav id="navbar" className="flex max-w-6xl px-5 mx-auto justify-between items-center p-4 bg-white  w-full">
      {/* Logo */}
      <div className="flex gap-2 items-center">
        <div className="bg-[#A64E1B] size-10 rounded-xl" />
        <h3 className="text-base md:text-lg font-medium">Campus Crib</h3>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-7">
        {menuItems.map((item, i) => (
          <div
            key={i}
            className={`${activeTab === i && 'border-b border-[#A64E1B] font-bold'} cursor-pointer`}
            onClick={() => setActiveTab(i)}
          >
            <p className={`text-sm ${activeTab === i ? 'text-[#A64E1B]' : 'text-[#454545]'}`}>{item.title}</p>
          </div>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)} className="border border-dark p-1.5 rounded-lg">
          {menuOpen ? <Image src={'/close.png'} alt="close" width={100} height={100} className="size-5" /> : <Image src={'/menu.svg'} alt="menu" width={100} height={100} className="size-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg flex flex-col py-4 md:hidden">
          {menuItems.map((item, i) => (
            <Link
            href={`/#${item?.ref}`}
              key={i}
              className={`w-full px-5 py-2 ${activeTab === i && 'bg-gray-100 font-bold'}`}
              onClick={() => {
                setActiveTab(i);
                setMenuOpen(false);
              }}
            >
              <p className={`text-sm ${activeTab === i ? 'text-[#A64E1B]' : 'text-[#454545]'}`}>{item.title}</p>
            </Link>
          ))}
        </div>
      )}

      {/* Auth Buttons */}
      <div className="hidden md:flex gap-2">
        <button className="border border-[#A64E1B] text-sm text-primary font-semibold py-2 px-4 rounded-xl">
          Log in
        </button>
        <button className="text-white text-sm bg-[#A64E1B] py-2 px-4 rounded-xl">
          Sign up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;