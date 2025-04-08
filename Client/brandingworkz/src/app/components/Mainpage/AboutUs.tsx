import React from "react";
import Image from "next/image";
const AboutUs = () => {
  return (
    <div className="flex   p-20 overflow-x-hidden overflow-y-hidden">
      <div className="w-[50%] ">
        <h1 className="flex text-start pl-20">
          <span className="text-[88px] outfit   ">
            {" "}
            Discover<br></br> Our
            <span className="text-[88px] ml-2 outfit-light">Studio</span>
          </span>
        </h1>
        <p className="p-5 pl-20 flex text-start">
          At Branding Works, we are a team of dedicated professionals driven by
          a passion for crafting exceptional digital experiences. Combining
          expertise in website development and digital marketing, we transform
          ideas into impactful solutions that help businesses thrive. With a
          keen eye for innovation and a commitment to excellence, we work
          closely with our clients to build brands that leave a lasting
          impression.
        </p>
        <p className="p-5 pl-20 flex text-start">
          Our approach is rooted in creativity, strategy, and technical
          precision, ensuring that every project we undertake not only meets but
          exceeds expectations. From intuitive website designs to data-driven
          marketing campaigns, we tailor our services to align with each
          client&apos;s unique vision. At Branding Works, we believe in building
          strong partnerships, delivering results that drive growth, and setting
          new standards in the digital landscape.
        </p>

        <div className="h-30 w-full relative pl-20   gap-x-2 flex  items-center">
          {" "}
          <div className="absolute w-20 h-20   rounded-full">
            <Image
              src="/about.jpg"
              alt="Studio Image"
              fill
              className="object-cover rounded-full"
            />
          </div>
          <div className="absolute h-8 w-8  rounded-full ml-12 mt-13 bg-[#FF9800] pt-1 text-center text-4xl">
            &apos;&apos;
          </div>
          <div className="ml-30">
            <p className="font-bold">
              Passionately Creating{" "}
              <span className="font-light">Design Wonders:</span>
            </p>
            <p className="font-bold">
              Unleashing{" "}
              <span className="font-light">Boundless Creativity:</span>
            </p>
          </div>
        </div>
      </div>
      <div className="w-[40%] ml-10 h-[110vh] relative group">
        <div className="absolute inset-0 transform transition-transform duration-500 group-hover:scale-105">
          <Image
            src="/about.jpg"
            alt="Studio Image"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
