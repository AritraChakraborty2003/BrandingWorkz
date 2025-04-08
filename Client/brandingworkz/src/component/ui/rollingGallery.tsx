/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */

import React, { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useAnimation,
  useTransform,
  PanInfo,
} from "framer-motion";

const IMGS: string[] = [
  "https://img.freepik.com/free-photo/portrait-man-using-digital-tablet_1170-1888.jpg?t=st=1743734347~exp=1743737947~hmac=117636309369a8100e3b9f2f5a063b356e8e79d94984a7bc5658a5b20293537c&w=826",
  "https://img.freepik.com/free-photo/indian-young-businessman-standing-modern-office_231208-2588.jpg?uid=R177754169&semt=ais_hybrid&w=740",
  "https://img.freepik.com/free-photo/waist-up-shot-asian-man-standing-arms-folded-architect-office_1098-18849.jpg?uid=R177754169&semt=ais_hybrid&w=740",
  "https://img.freepik.com/free-photo/handsome-male-freelancer-looking-camera-while-working-laptop-outdoors_651396-3593.jpg?t=st=1743734143~exp=1743737743~hmac=4abb4be300190963ca6eb579af84b3248b1e03e408137980a4df07f8f5edb6c8&w=900",
  "https://img.freepik.com/free-photo/confident-businessman_1098-21002.jpg?uid=R177754169&semt=ais_hybrid&w=740",
  "https://img.freepik.com/free-photo/young-businessman-with-confident-look_114579-79357.jpg?t=st=1743734045~exp=1743737645~hmac=96c942df3e602c5707e04a2f7105d29b3dd6ce106fc920d2f04d6747e4b9b279&w=826",

  "https://img.freepik.com/free-photo/successful-businessman_1098-18155.jpg?t=st=1743734014~exp=1743737614~hmac=dab7208f6cb9c74218a3f163544d93a8bcec7ca18acc1be16055cdad65b2b799&w=826",
  "https://img.freepik.com/free-photo/cheerful-indian-man_1098-18167.jpg?t=st=1743733954~exp=1743737554~hmac=0a79deacde00e912cedf1ff76869d5c3e74f5850c4bce9e65bf1c1a0fc285cbb&w=826",
];

const data = [
  {
    name: "John Doe",
    position: "Software Engineer",
    linkedin: "https://www.linkedin.com/in/johndoe",
    image:
      "https://img.freepik.com/free-photo/portrait-man-using-digital-tablet_1170-1888.jpg?t=st=1743734347~exp=1743737947~hmac=117636309369a8100e3b9f2f5a063b356e8e79d94984a7bc5658a5b20293537c&w=826",
  },
  {
    name: "Rahul Sharma",
    position: "Product Manager",
    linkedin: "https://www.linkedin.com/in/rahulsharma",
    image:
      "https://img.freepik.com/free-photo/indian-young-businessman-standing-modern-office_231208-2588.jpg?uid=R177754169&semt=ais_hybrid&w=740",
  },
  {
    name: "Taro Yamamoto",
    position: "Architect",
    linkedin: "https://www.linkedin.com/in/taroyamamoto",
    image:
      "https://img.freepik.com/free-photo/waist-up-shot-asian-man-standing-arms-folded-architect-office_1098-18849.jpg?uid=R177754169&semt=ais_hybrid&w=740",
  },
  {
    name: "Alex Johnson",
    position: "Freelancer",
    linkedin: "https://www.linkedin.com/in/alexjohnson",
    image:
      "https://img.freepik.com/free-photo/handsome-male-freelancer-looking-camera-while-working-laptop-outdoors_651396-3593.jpg?t=st=1743734143~exp=1743737743~hmac=4abb4be300190963ca6eb579af84b3248b1e03e408137980a4df07f8f5edb6c8&w=900",
  },
  {
    name: "Michael Smith",
    position: "Business Analyst",
    linkedin: "https://www.linkedin.com/in/michaelsmith",
    image:
      "https://img.freepik.com/free-photo/confident-businessman_1098-21002.jpg?uid=R177754169&semt=ais_hybrid&w=740",
  },
  {
    name: "David Lee",
    position: "Marketing Specialist",
    linkedin: "https://www.linkedin.com/in/davidlee",
    image:
      "https://img.freepik.com/free-photo/young-businessman-with-confident-look_114579-79357.jpg?t=st=1743734045~exp=1743737645~hmac=96c942df3e602c5707e04a2f7105d29b3dd6ce106fc920d2f04d6747e4b9b279&w=826",
  },
  {
    name: "Samuel Green",
    position: "Financial Consultant",
    linkedin: "https://www.linkedin.com/in/samuelgreen",
    image:
      "https://img.freepik.com/free-photo/successful-businessman_1098-18155.jpg?t=st=1743734014~exp=1743737614~hmac=dab7208f6cb9c74218a3f163544d93a8bcec7ca18acc1be16055cdad65b2b799&w=826",
  },
  {
    name: "Raj Patel",
    position: "Entrepreneur",
    linkedin: "https://www.linkedin.com/in/rajpatel",
    image:
      "https://img.freepik.com/free-photo/cheerful-indian-man_1098-18167.jpg?t=st=1743733954~exp=1743737554~hmac=0a79deacde00e912cedf1ff76869d5c3e74f5850c4bce9e65bf1c1a0fc285cbb&w=826",
  },
];

interface RollingGalleryProps {
  autoplay?: boolean;
  pauseOnHover?: boolean;
  images?: string[];
}

const RollingGallery: React.FC<RollingGalleryProps> = ({
  autoplay = false,
  pauseOnHover = false,
  images = [],
}) => {
  // Use default images if none are provided
  const galleryImages = images.length > 0 ? images : IMGS;

  const [isScreenSizeSm, setIsScreenSizeSm] = useState<boolean>(false);

  useEffect(() => {
    setIsScreenSizeSm(window.innerWidth <= 640); // Now window is accessed only after mount
    const handleResize = () => setIsScreenSizeSm(window.innerWidth <= 640);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 3D geometry calculations
  const cylinderWidth: number = isScreenSizeSm ? 1100 : 1800;
  const faceCount: number = galleryImages.length;
  const faceWidth: number = (cylinderWidth / faceCount) * 1.5;
  const radius: number = cylinderWidth / (2 * Math.PI);

  // Framer Motion values and controls
  const dragFactor: number = 0.05;
  const rotation = useMotionValue(0);
  const controls = useAnimation();

  // Create a 3D transform based on the rotation motion value
  const transform = useTransform(
    rotation,
    (val: number) => `rotate3d(0,1,0,${val}deg)`
  );

  const startInfiniteSpin = (startAngle: number) => {
    controls.start({
      rotateY: [startAngle, startAngle - 360],
      transition: {
        duration: 100,
        ease: "linear",
        repeat: Infinity,
      },
    });
  };

  useEffect(() => {
    if (autoplay) {
      const currentAngle = rotation.get();
      startInfiniteSpin(currentAngle);
    } else {
      controls.stop();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoplay]);

  const handleUpdate = (latest: any) => {
    if (typeof latest.rotateY === "number") {
      rotation.set(latest.rotateY);
    }
  };

  const handleDrag = (_: any, info: PanInfo): void => {
    controls.stop();
    rotation.set(rotation.get() + info.offset.x * dragFactor);
  };

  const handleDragEnd = (_: any, info: PanInfo): void => {
    const finalAngle = rotation.get() + info.velocity.x * dragFactor;
    rotation.set(finalAngle);
    if (autoplay) {
      startInfiniteSpin(finalAngle);
    }
  };

  const handleMouseEnter = (): void => {
    if (autoplay && pauseOnHover) {
      controls.stop();
    }
  };

  const handleMouseLeave = (): void => {
    if (autoplay && pauseOnHover) {
      const currentAngle = rotation.get();
      startInfiniteSpin(currentAngle);
    }
  };

  return (
    <div className="relative h-[500px] w-full overflow-hidden">
      {/* <div
        className="absolute top-0 left-0 h-full w-[48px] z-10"
        // style={{
        //   background:
        //     "linear-gradient(to left, rgba(0,0,0,0) 0%, #060606 100%)",
        // }}
      />
      <div
        className="absolute top-0 right-0 h-full w-[48px] z-10"
        // style={{
        //   background:
        //     "linear-gradient(to right, rgba(0,0,0,0) 0%, #060606 100%)",
        // }}
      /> */}
      <div className="flex h-full items-center justify-center [perspective:1000px] [transform-style:preserve-3d]">
        <motion.div
          drag="x"
          dragElastic={0}
          onDrag={handleDrag}
          onDragEnd={handleDragEnd}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          animate={controls}
          onUpdate={handleUpdate}
          style={{
            transform: transform,
            rotateY: rotation,
            width: cylinderWidth,
            transformStyle: "preserve-3d",
          }}
          className="flex min-h-[200px] cursor-grab items-center justify-center [transform-style:preserve-3d]"
        >
          {data.map((item, i) => (
            <div
              key={i}
              className="group absolute flex h-fit items-center justify-center p-[8%] [backface-visibility:hidden] md:p-[6%]"
              style={{
                width: `${faceWidth}px`,
                transform: `rotateY(${
                  (360 / faceCount) * i
                }deg) translateZ(${radius}px)`,
              }}
            >
              <img
                src={item.image}
                alt="gallery"
                className="pointer-events-none h-[120px] w-[300px] rounded-[15px]   object-cover transition-transform duration-900 ease-out group-hover:scale-105 sm:h-[250px] sm:w-[220px]"
              />
              <div className="absolute h-[120px]  w-[300px] rounded-[15px] object-cover transition-transform duration-900 ease-out group-hover:scale-105 sm:h-[250px] sm:w-[220px] bg-black opacity-40  hidden group-hover:block"></div>
              <div className="absolute z-10  text-white hidden group-hover:block">
                {" "}
                <p className="text-white outfit text-center">{item.name}</p>
                <p className="text-white outfit text-center">{item.position}</p>
                <div className="flex gap-2">
                  <img
                    src="/github.png"
                    alt=""
                    className="w-8 h-8 mt-3 p-1 rounded hover:bg-gradient-to-r hover:from-purple-500 hover:via-violet-500 hover:to-pink-500 transition-all duration-900"
                  />
                  <img
                    src="/linkedin1.png"
                    alt=""
                    className="w-8 h-8 mt-3 p-1 rounded hover:bg-gradient-to-r hover:from-purple-500 hover:via-violet-500 hover:to-pink-500 transition-all duration-900"
                  />
                  <img
                    src="/connect.png"
                    alt=""
                    className="w-8 h-8 mt-3 p-1 rounded hover:bg-gradient-to-r hover:from-purple-500 hover:via-violet-500 hover:to-pink-500 transition-all duration-900"
                  />
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default RollingGallery;
