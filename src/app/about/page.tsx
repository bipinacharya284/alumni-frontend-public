"use client";

import React from "react";
import Image from "next/image";

const developers = [
  {
    name: "Krishna Gautam",
    role: "Frontend Developer",
    bio: "Passionate about building user-friendly web interfaces and enhancing UX.",
    image: "/krishnakami.jpg",
  },
  {
    name: "Sudip Koirala",
    role: "UI/UX Designer",
    bio: "First thing to hit mindset is UI, so make it stunning!",
    image: "/sudipkumar.jpg",
  },
  {
    name: "Rajina Chaudhari",
    role: "UI/UX Designer",
    bio: "Designing clean and intuitive user experiences is my forte.",
    image: "/rajinaaunty.jpg",
  },
  {
    name: "Bipin Acharya",
    role: "Full Stack Developer",
    bio: "I bridge the gap between design and technology with full-stack expertise.",
    image: "/acharyasir.jpeg",
  },
];

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center py-10">
      {/* ✅ Centered Heading */}
      <h1 className="text-4xl text-center font-bold text-gray-800 mb-10">
        Meet Our Team
      </h1>

      {/* ✅ Horizontally Scrollable for Mobile | Centered Row for Desktop */}
      <div className="w-full max-w-screen-lg flex overflow-x-auto sm:justify-center gap-6 px-4 pb-10">
        {developers.map((dev, index) => (
          <div
            key={index}
            className="min-w-[250px] sm:min-w-[200px] bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            {/* ✅ Image with Fixed Aspect Ratio */}
            <div className="relative w-full h-44 sm:h-52">
              <Image
                src={dev.image}
                alt={dev.name}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
                priority
              />
            </div>

            {/* ✅ Developer Info */}
            <div className="p-4 text-center">
              <h2 className="text-xl font-semibold text-gray-800">
                {dev.name}
              </h2>
              <p className="text-blue-500 font-medium">{dev.role}</p>
              <p className="text-gray-600 text-sm mt-2">{dev.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
