import { useEffect, useState, useRef } from "react";
import "./CarImg.css"; // Make sure this CSS file is linked

export default function CarImg() {
  const [glow, setGlow] = useState(false);
  const scrollTimeout = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setGlow(true);

      // Clear previous timeout to reset the timer
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }

      // Set a new timeout to remove glow 2 seconds after scrolling stops
      scrollTimeout.current = setTimeout(() => {
        setGlow(false);
      }, 300); // Flash effect duration (make it faster for a brief flash)
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout.current); // Clear the timeout on cleanup
    };
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen fixed top-0 translate-x-1/2 right-1/2 -z-10">
      <div className="relative md:h-118 md:w-118 h-90 w-90">
        <img
          className="h-full w-full opacity-50"
          src="/bmwE36Drawing.png"
          alt="BMW E36"
        />
        {/* Render all 4 angel eyes */}
        <div className={`angel-eyes ${glow ? "glow" : ""}`} />
        <div className={`angel-eyes ${glow ? "glow" : ""}`} />
        <div className={`angel-eyes ${glow ? "glow" : ""}`} />
        <div className={`angel-eyes ${glow ? "glow" : ""}`} />
      </div>
    </div>
  );
}
