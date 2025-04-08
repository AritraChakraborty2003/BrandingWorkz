import React from "react";
import Image from "next/image";

const Services = () => {
  return (
    <div className="bg-[#1F1F1F] flex flex-col pt-25 pb-20">
      <div className="relative h-[15vh] flex items-center justify-center overflow-hidden">
        <div className="absolute  inset-0 bg-gradient-to-t from-[#1F1F1F] via-[#1F1F1F]/50 to-transparent"></div>
        <div className="text-white outfit text-[100px] font-bold animate-fade-up">
          Our Creative Works
        </div>
      </div>
      <div className="relative h-[15vh] flex items-center justify-center overflow-hidden">
        <div className="absolute  inset-0 bg-gradient-to-t from-[#1F1F1F] via-[#1F1F1F]/50 to-transparent"></div>
        <div className="text-white outfit text-[130px] font-bold animate-fade-up">
          Innovate. Build. Deliver.
        </div>
      </div>
      <div className="mx-auto w-[84vw] flex  justify-between items-center">
        {blogData.map((blog, index) => (
          <div
            key={index}
            className="relative w-[21vw] h-[55vh] border border-gray-700 group overflow-hidden "
          >
            {/* Animated Top Border Line */}
            <div className="absolute top-0 left-0 h-[3px] w-0 bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 transition-all duration-700 ease-in-out group-hover:w-full"></div>

            {/* Image with Hover Effect */}
            <div className="w-[21vw] overflow-hidden mt-1 ">
              <Image
                src={blog.image}
                alt={`Thumbnail for ${blog.title}`}
                width={300}
                height={200}
                className="transform transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
            </div>

            {/* Description with Text Transition */}
            <div className="text-white text-lg outfit-small p-2 text-center">
              {blog.title}
            </div>
            <div className="w-[20vw] text-sm text-white mt-3 outfit-small text-start pl-6 transition-colors duration-300 ease-in-out group-hover:text-gray-300">
              {blog.description}
            </div>

            {/* Sliding Button */}
            <div className="absolute bottom-4 left-0 w-full flex justify-center">
              <button className="cursor-pointer opacity-0 translate-x-20 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-700 ease-in-out bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 text-white px-6 py-2 rounded-full shadow-lg flex items-center gap-2">
                View Work
                <Image
                  src="/right.png"
                  alt={`Thumbnail for ${blog.title}`}
                  width={20}
                  height={20}
                  className="transform transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const blogData = [
  {
    slug: "amazing-tailwindcss-grid-layouts",
    author: "Manu Arora",
    date: "28th March, 2023",
    title: "Branding & Identity Design",
    description:
      "Crafting unique brand identities through strategic design, creativity, and visual storytelling.",
    image:
      "https://media.istockphoto.com/id/485966046/photo/ama-dablam-mount-in-the-nepal-himalaya.jpg?s=612x612&w=0&k=20&c=p0wa6A1rToHRBXEjDnKbvRlVvWsGc_M6SdPoZbImFjE=",
    authorAvatar: "/about.jpg",
  },
  {
    slug: "react-performance-optimization",
    author: "Jane Doe",
    date: "5th April, 2023",
    title: "Website Design & Development",
    description:
      "Building modern, high-performing websites with seamless UX, UI, speed, and mobile responsiveness.",
    image:
      "https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE=",
    authorAvatar: "/jane.jpg",
  },
  {
    slug: "nextjs-server-components",
    author: "John Smith",
    date: "12th April, 2023",
    title: "Advertising & Marketing Campaigns",
    description:
      "Creating impactful ad campaigns that drive engagement, brand awareness, sales, and customer loyalty.",
    image:
      "https://media.istockphoto.com/id/479550252/photo/boat-in-bangladesh-river.jpg?s=612x612&w=0&k=20&c=cWVbNbJn9iPnaXPXtPnlUtcgcDtXVWQVafi4A1T9LYA=",
    authorAvatar: "/john.jpg",
  },
  {
    slug: "creating-consulting-development",
    author: "Jane Doe",
    date: "5th April, 2023",
    title: "Creating Consulting & Development",
    description:
      "Providing expert guidance, tailored solutions, business strategies, and technical development insights.",
    image:
      "https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE=",
    authorAvatar: "/jane.jpg",
  },
];

export default Services;
