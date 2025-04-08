/* eslint-disable @next/next/no-img-element */
import React from "react";
import RollingGallery from "@/component/ui/rollingGallery";

const Team = () => {
  return (
    <div className=" pt-10 pb-10 flex  ">
      <div className="w-[55%] flex flex-col  items-center ">
        <h1 className="flex text-start pl-20">
          <span className="text-[78px] font-extrabold outfit   ">
            Creators. Builders.
            <br></br>
            <span className="text-[88px] ml-2 outfit-light font-extrabold">
              Dreamers.
            </span>
          </span>
        </h1>
        <div className="w-[38vw] mt-10 item-start ">
          Behind every great project is a team of passionate minds, dedicated to
          turning ideas into reality. Meet the talented individuals who bring
          creativity, innovation, and expertise to every challenge. Together, we
          build, design, and innovate—crafting experiences that leave a lasting
          impact.
          <br />
          <br />
          <br />
          With a shared vision and unwavering dedication, we navigate
          challenges, refine every detail, and ensure excellence in everything
          we create. Our commitment goes beyond just delivering projects—we
          strive to build meaningful connections, drive results, and shape the
          future with every idea we bring to life. This is more than just work;
          it’s our passion, our craft, and our way of making a difference.
        </div>
        <div className="group border-2 p-3 mt-5 rounded-full border-black flex justify-center items-center text-black w-50 transition-all duration-500 ease-in-out relative overflow-hidden hover:scale-105">
          {/* Parent Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"></div>

          <span className="relative z-10 transition-all duration-500 ease-in-out group-hover:scale-105">
            Read More
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
      {/*------------ Right side--------------- */}
      <div className="w-[45%] flex justify-center items-center pr-10">
        <RollingGallery autoplay={true} pauseOnHover={true} />
      </div>
    </div>
  );
};

export default Team;
