import "../bubbles.css";
import EnvironmentalImpact from "../components/EnvironmentalImpact";
import WhoAreWe from "../components/WhoAreWe";
import { LEFT_SIDE_TEXT } from "../text";

export default function Home() {
  function createBubble() {
    const section = document.querySelector("Section");
    const createElement = document.createElement("span");
    var size = Math.random() * 7;

    createElement.style.animation = "animation 6s linear infinite";
    createElement.style.width = 2 + size + "vw";
    createElement.style.height = 2 + size + "vw";
    createElement.style.left = Math.random() * (innerWidth * 0.6) + "px";
    section.appendChild(createElement);

    setTimeout(() => {
      createElement.remove();
    }, 10000);
  }

  setInterval(createBubble, 3000);

  return (
    <div className="flex flex-col justify-center items-center bg-lime-100 text-center h-screen overflow-hidden">
      <div>
        <h1 className="text-4xl text-gray-800 font-bold p-5">EcoBuzz</h1>
      </div>
      <div className="border-lime-300 border-y w-5/6" />
      <section />
      <div className="flex flex-row justify-evenly items-center w-full h-[85%]">
        <div className="w-2/5 p-2">
          <EnvironmentalImpact />
        </div>

        <div className="border-lime-300 border-x h-5/6" />
        <div className="w-3/5 p-2">
          <WhoAreWe />
        </div>
      </div>
    </div>
  );
}
