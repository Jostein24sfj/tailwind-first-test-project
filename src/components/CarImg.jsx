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
    <div className="flex bg-center bg-cover bg-fixed h-screen">
      <img
        className="h-118 w-auto opacity-20"
        src="/bmwE36Drawing.png"
        alt="BMW E36"
      />
      {/* Render all 4 angel eyes */}
      <div className={`angel-eyes ${glow ? "glow" : ""}`}></div>
      <div className={`angel-eyes ${glow ? "glow" : ""}`}></div>
      <div className={`angel-eyes ${glow ? "glow" : ""}`}></div>
      <div className={`angel-eyes ${glow ? "glow" : ""}`}></div>
    </div>
  );
}
