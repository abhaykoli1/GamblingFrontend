import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import BalanceButton from "../components/BalanceButton";
import { Link } from "react-router-dom";
import Slider from "../components/Slider";
import Button from "../components/Button";
import BottomBar from "../components/BottomBar";
import TelegramMenu from "../components/TelegramMenu";
import AboutDialog from "./notificationDiloag";
import BannerCarousel from "../components/BannerCarousel";

const DownloadAppCard = ({ className = "" }) => (
  <div
    className={`w-full rounded border border-yellow-600/70 bg-gradient-to-r from-[#6f001c] via-[#3a000b] to-black p-4 shadow-lg shadow-[#9C1137]/25 ${className}`}
  >
    <div className="flex items-center gap-4">
      <img
        src="/infinity-games-logo.png"
        alt="Infinity Games"
        className="h-16 w-16 rounded object-cover"
      />
      <div className="min-w-0 text-left">
        <p className="text-xs font-bold uppercase tracking-wide text-yellow-300">
          Android App
        </p>
        <h2 className="text-xl font-bold text-gray-100">
          Download Infinity Games APK
        </h2>
        <p className="text-sm text-gray-300">
          Install the app and play faster from your phone.
        </p>
      </div>
    </div>
    <a
      href="/downloads/infinity-games.apk"
      download="infinity-games.apk"
      className="mt-4 block w-full rounded-md bg-gradient-to-b from-yellow-300 via-yellow-500 to-[#9C1137] px-5 py-3 text-center font-bold text-black shadow shadow-black/40"
    >
      Download APK
    </a>
  </div>
);

const Home = () => {
  const [games, setGames] = useState([]);
  console.log(games);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/v1/users/visible-games`)
      .then((response) => response.json())
      .then((data) => {
        if (data.success && Array.isArray(data.data)) {
          setGames(data.data);
        }
      });
  }, []);

  const gameInfo = {
    chicken: {
      displayName: "Chicken Road",
      displayMsg: "Dodge cars, cross the road, and test your reflexes.",
      image: "https://cultmtl.com/wp-content/uploads/2025/06/IMG_8547.jpeg",
      link: "/chicken-road",
    },

    mining: {
      displayName: "Mines",
      displayMsg: "Every step is a risk. One wrong move, game over",
      image: "https://images.sigma.world/mines.jpg",
      link: "/mines",
    },
    aviator: {
      displayName: "Aviator",
      displayMsg: "Create, customize, and dominate with your avatar",
      image: "https://enixo.in/wp-content/uploads/2024/10/av.webp",
      link: "/aviator",
    },
    color: {
      displayName: "Colour Trading",
      displayMsg: "Fast-paced trading where timing is everything",
      image:
        "https://play-lh.googleusercontent.com/vON-GoYSW-3vh2UPsATYje7sBee3H4VNnU-FGNv9gYGZT_HKoztpkP8UvK3K0UVT29I=w526-h296-rw",
      link: "/color-trading",
    },
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden bg-[#160003] pb-12">
      <AboutDialog />
      <div className="fixed !z-40  top-1/2  -translate-y-1/2 right-5">
        <TelegramMenu />
      </div>
      <span className="">
        <Navbar />
      </span>
      <BannerCarousel />
      <div className="border fixed left-0 bottom-0 z-20">
        <BottomBar />
      </div>

      <div className="md:flex hidden flex-col">
        <div className="py-4 flex gap-4 text-white md:flex-row flex-col-reverse items-center px-4 md:px-24">
          <div className="text-center flex items-center w-full flex-col gap-2">
            <Link to={"/signup"} className=" w-full">
              <Button
                children="Register"
                className="bg-transparent lg:w-[50%] w-full -full  shadow-xs shadow-[#9C1137] hover:bg-transparent"
                // className="bg-blue-500  hover:bg-blue-600"
              />
            </Link>
            <DownloadAppCard className="lg:w-[70%]" />
          </div>
          <Slider />
        </div>
        <div className="my-8 flex flex-col flex-wrap md:flex-row gap-y-12 md:px-20 px-6 justify-around">
          {games.map((gameKey) => {
            const info = gameInfo[gameKey];
            if (!info) return null; // Skip if game not in predefined object

            return (
              <Link
                to={info.link}
                key={gameKey}
                className="p-1 shadow-xs shadow-gray-700 bg-transparent flex flex-col gap-4 w-full md:w-62"
              >
                <img
                  src={info.image}
                  alt={info.displayName}
                  className="h-52 rounded bg-contain"
                  style={{ objectFit: "fill", objectPosition: "center" }}
                />

                <h3 className="text-gray-400 pl-2 flex gap-2">
                  <span className="min-w-2 max-h-2 mt-2 bg-green-300 rounded-full text-center items-center"></span>
                  <p>{info.displayName}</p>
                </h3>
              </Link>
            );
          })}
        </div>
      </div>

      <div className="md:hidden flex flex-col pt-4">
        <Slider />
        <div className="px-6 pt-4">
          <DownloadAppCard />
        </div>
        <div className="my-8 flex flex-col flex-wrap md:flex-row gap-y-4 md:px-20 px-6 justify-around">
          {games.map((gameKey) => {
            const info = gameInfo[gameKey];
            if (!info) return null; // Skip if game not in predefined object

            return (
              <Link
                to={info.link}
                key={gameKey}
                className="p-1 px-2 shadow-xs shadow-[#e9d5a6] bg-gradient-to-tr from-[#9C1137] rounded to-black justify-between flex gap-4 w-full md:w-62 items-center"
              >
                <img
                  src={info.image}
                  alt={info.displayName}
                  className="w-10 h-10 rounded bg-contain"
                  style={{ objectFit: "cover", objectPosition: "center" }}
                />

                <h3 className="text-gray-200 pl-2 flex flex-col items-start w-full">
                  <p className="font-medium text-amber-200">
                    {info.displayName}
                  </p>
                  <p className="text-sm text-wrap">{info.displayMsg}</p>
                </h3>
                <span className="p-2 rounded bg-gradient-to-b from-[#9C1137] via-[#9C1137]  to-black">
                  <img
                    src="/play-button-arrowhead.png"
                    className="invert-100 h-3"
                  />
                </span>
              </Link>
            );
          })}

          {/* {games.map((gameKey) => {
            const info = gameInfo[gameKey];
            if (!info) return null; // Skip if game not in predefined object

            return (
              <Link
                to={"/deposite"}
                key={gameKey}
                className="p-1 px-2 shadow-xs shadow-[#e9d5a6] bg-gradient-to-tr from-[#9C1137] rounded to-black justify-between flex gap-4 w-full md:w-62 items-center"
              >
                <img
                  src={info.image}
                  alt={info.displayName}
                  className="w-10 h-10 rounded bg-contain"
                  style={{ objectFit: "cover", objectPosition: "center" }}
                />

                <h3 className="text-gray-200 pl-2 flex flex-col items-start w-full">
                  <p className="font-medium text-amber-200">
                    {info.displayName}
                  </p>
                  <p className="text-sm text-wrap">{info.displayMsg}</p>
                </h3>
                <span className="p-2 rounded bg-gradient-to-b from-[#9C1137] via-[#9C1137]  to-black">
                  <img
                    src="/play-button-arrowhead.png"
                    className="invert-100 h-3"
                  />
                </span>
              </Link>
            );
          })} */}
        </div>
      </div>
    </div>
  );
};

export default Home;
