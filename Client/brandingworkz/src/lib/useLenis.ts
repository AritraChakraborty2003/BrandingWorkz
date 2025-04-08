"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis/types";

const useLenis = () => {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1, // Smooth factor (higher is smoother)
      duration: 1.2, // Control speed
      easing: (t) => 1 - Math.pow(1 - t, 3), // Natural easing
      gestureOrientation: "vertical", // Ensures vertical scrolling
      wheelMultiplier: 1, // Sensitivity for mouse wheel
      touchMultiplier: 2, // Sensitivity for touch devices
      infinite: false, // Disable infinite scrolling
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy(); // Cleanup on unmount
    };
  }, []);
};

export default useLenis;
