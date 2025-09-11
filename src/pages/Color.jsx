import { useEffect } from "react";
import GameBoard from "../components/color/GameBoard";
import Timer from "./Timer";

function Color() {
  useEffect(() => {
<<<<<<< HEAD
    // const audio = new Audio("/main.mp3");
    // audio.loop = true;
    // audio.play().catch((err) => {
    //   console.error("Autoplay failed:", err);
    // });

    // return () => {
    //   audio.pause();
    //   audio.currentTime = 0;
    // };
=======
    const audio = new Audio("/main.mp3");

    audio.loop = true; // Loop the sound

    audio.loop = true;

    audio.play().catch((err) => {
      console.error("Autoplay failed:", err);
    });

    return () => {
      audio.pause();

      audio.currentTime = 0; // Reset if needed

      audio.currentTime = 0;
    };
>>>>>>> 860192700210118fbd2d6d22a3914cee129c8669
  }, []);

  return (
    <div className="relative min-h-screen bg-[#160003] text-white">
      {/* Timer Overlay */}
      <Timer />

      {/* GameBoard in background */}
      <GameBoard />
    </div>
  );
}

export default Color;
