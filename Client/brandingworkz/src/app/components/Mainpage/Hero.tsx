/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import CircularText from "@/component/ui/circulartext";
import { Twirl as Hamburger } from "hamburger-react";
import { BackgroundBeamsWithCollision } from "@/component/ui/background-beams-with-collision";
// import { div } from "motion/react-client";
import { useState } from "react";

const Hero = () => {
  const [isOpen, setOpen] = useState(false);
  const [isMOpen, setIsMOpen] = useState(false);
  return (
    <>
      <div className="relative">
        <div className="absolute flex justify-between mt-5 pl-10 pr-10  text-white z-10  w-full">
          <div className="w-20 cursor-pointer">
            <img className="h-full w-full" src="/logo.png" alt="" />
          </div>

          <div className="z-30 " onClick={() => setIsMOpen(!isMOpen)}>
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </div>

          <div
            className={`fixed top-0 right-0 z-20 h-full w-full bg-gray-900 text-white p-10 transform transition-transform duration-500 ${
              isMOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div>write whatever you wanna write</div>
          </div>
        </div>

        <div>
          <BackgroundBeamsWithCollision>
            <h2 className="text-2xl   md:text-4xl lg:text-9xl  -mt-50 font-bold text-center text-black dark:text-white font-sans tracking-tight">
              We build . You Grow .
              <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
                <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
                  <span className="ml-3">Get online today!</span>
                </div>
              </div>
            </h2>
            <div className="text-lg text-gray-300 w-[50vw] absolute z-2 lg:mt-50">
              Empower your brand with a strong digital presence. We create
              seamless, visually stunning experiences that drive engagement and
              growth. The future is online—let’s get you there today!
            </div>

            {/* --------//buttons section //---------------- */}
            <div className="flex -ml-10  items-center text-white absolute  lg:mt-130 lg:w-[60vw]">
              <div className="p-4 ">
                <div className="group border-2 p-3 rounded-full border-white flex justify-center items-center text-white w-50 transition-all duration-500 ease-in-out relative overflow-hidden hover:scale-105">
                  {/* Parent Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"></div>

                  <span className="relative z-10 transition-all duration-500 ease-in-out group-hover:scale-105">
                    What we do!
                  </span>

                  {/* Child Button with Zoom Effect */}

                  <div className="ml-2 rounded-full relative  flex justify-center items-center w-12 h-12 overflow-hidden transition-all duration-500 ease-in-out group-hover:scale-105">
                    {/* Child Gradient Overlay */}

                    <img
                      src="right.png"
                      className="h-10 w-10 relative z-1 transition-all duration-500 ease-in-out group-hover:scale-95"
                      alt=""
                    />
                  </div>
                </div>
              </div>

              <div className="p-4 ">
                <div className="group border-b-2 pr-2 pl-2 p-3  border-white flex justify-center items-center text-white w-50 transition-all duration-500 ease-in-out relative overflow-hidden hover:scale-105">
                  {/* Parent Gradient Overlay */}

                  <span className="relative z-10 transition-all duration-500 ease-in-out group-hover:scale-105">
                    view our works
                  </span>

                  {/* Child Button with Zoom Effect */}
                  <div className="ml-2 rounded-full relative  flex justify-center items-center w-12 h-12 overflow-hidden transition-all duration-500 ease-in-out group-hover:scale-105">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"></div>
                    {/* Child Gradient Overlay */}

                    <img
                      src="right.png"
                      className="h-10 w-10 relative z-1 transition-all duration-500 ease-in-out group-hover:scale-95"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute mt-100 lg:ml-[70rem]">
              {" "}
              <CircularText
                text="*SCROLL DOWN**FOR MORE*"
                onHover="speedUp"
                spinDuration={20}
                className="custom-class"
              />
            </div>
          </BackgroundBeamsWithCollision>
        </div>
      </div>
    </>
  );
};

export default Hero;
