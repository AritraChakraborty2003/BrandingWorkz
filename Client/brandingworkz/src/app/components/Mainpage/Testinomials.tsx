/* eslint-disable @next/next/no-img-element */
"use client";

import Marquee from "react-fast-marquee";

const testimonials = [
  {
    name: "Akira Tanaka",
    image:
      "https://images.unsplash.com/photo-1599746146388-a7ec2004b67a?q=80&w=3096&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    feedback: "This platform transformed the way I work. Highly recommend it!",
  },
  {
    name: "Sana Mehta",
    image:
      "https://plus.unsplash.com/premium_photo-1682089787056-9ac0c78a2ac2?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    feedback: "Absolutely seamless experience. Beautiful UI and great support.",
  },
  {
    name: "John Doe",
    image:
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=2896&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    feedback: "The animation and performance are top-notch. 10/10 from me!",
  },
  {
    name: "Ayesha Khan",
    image:
      "https://images.unsplash.com/photo-1607227540760-62996d043bb9?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    feedback: "I loved the way everything flows. Super intuitive and fast.",
  },
];

const brands = [
  "/brands/pngegg (1).png",
  "/brands/pngegg (5).png",
  "/brands/pngegg (6).png",
  "/brands/pngegg (7).png",
  "/brands/pngegg.png",
  "/brands/pngegg (6).png",
  "/brands/pngegg (7).png",
];

export default function TestimonialMarquee() {
  return (
    <div className="w-full py-10 overflow-hidden h-[130vh]   bg-[#1F1F1F]">
      <div className="text-center  text-white">
        <p className="outfit text-7xl">
          Customer <span className="outfit-light">Voices :</span>{" "}
        </p>
        <p className="outfit text-5xl mt-8">
          Hear What <span className="outfit-light">They Say !</span>{" "}
        </p>
      </div>
      <div className="mt-5 p-[2px] mr-10   ml-10 rounded-md bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
        <div className="h-2  w-full rounded-md bg-[#1F1F1F]"></div>
      </div>

      <Marquee pauseOnHover speed={50} gradient={false}>
        <div className="flex  overflow-hidden mt-5 ">
          {testimonials.map((item, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${item.image})` }}
              className="relative mx-8 bg-cover  w-[300px] h-[320px] flex flex-col items-center justify-end bg-white/5 rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              {/* Background feedback */}
              <div className="absolute inset-0  px-4 py-6 flex items-center justify-center text-center text-sm  backdrop-blur-none z-0"></div>

              {/* Overlay with gradient */}
              <div className="absolute   inset-0 bg-gradient-to-b from-black/0 via-black/40 to-black/80 z-10" />

              {/* Author image & name */}
              <div className="z-20 pb-6 flex flex-col items-center">
                <p className="text-white text-center text-opacity-100">
                  {item.feedback}
                </p>
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 mt-5 rounded-full border-2 border-white mb-2 object-cover"
                />
                <p className="text-white font-semibold">
                  &quot;{item.name}&quot;
                </p>
              </div>
            </div>
          ))}
        </div>
      </Marquee>
      <div className="mt-5 p-[2px] mr-10   ml-10 rounded-md bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
        <div className="h-2  w-full rounded-md bg-[#1F1F1F]"></div>
      </div>
      {/* -----brand marquee----- */}
      <div className="text-center mt-10 ">
        <h2 className="text-3xl md:text-7xl font-bold outfit text-white">
          Brands We’ve Worked With
        </h2>
        <p className="text-sm md:text-lg outfit-light text-white/70 mt-2">
          We’ve had the privilege of collaborating with some amazing brands to
          bring their ideas to life.
        </p>
      </div>

      <div className=" -ml-10">
        <div className="absolute mt-[10vh] p-1 bg-white  ">
          <div className="border-t-3 border-b-3">
            <Marquee speed={40} gradient={false} pauseOnHover>
              {brands.map((logo, index) => (
                <div
                  key={index}
                  className="mx-10 transform hover:rotate-0 transition-transform duration-300"
                >
                  <img
                    src={logo}
                    alt={`Brand ${index + 1}`}
                    className="w-28 h-28 object-contain  transition duration-300"
                  />
                </div>
              ))}
            </Marquee>
          </div>
        </div>
        <div className="absolute mt-[10vh] p-1 mr-[100vw] bg-white">
          <div className="border-t-3 border-b-3">
            <Marquee speed={40} direction="right" gradient={false} pauseOnHover>
              {brands.map((logo, index) => (
                <div
                  key={index}
                  className="mx-15 transform hover:rotate-0 transition-transform duration-300"
                >
                  <img
                    src={logo}
                    alt={`Brand ${index + 1}`}
                    className="w-28 h-28 object-contain  transition duration-300"
                  />
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  );
}
