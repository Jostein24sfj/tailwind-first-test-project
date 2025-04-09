import { useEffect, useState } from "react";
import "./CarImg.css"; // Ensure this CSS file is linked

export default function CarImg() {
  const [glow, setGlow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Get the current scroll position
      const scrollY = window.scrollY;

      // If scrolled down, turn the lights on. If at the top, turn them off
      setGlow(scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
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
