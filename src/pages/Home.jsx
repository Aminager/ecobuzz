import "../bubbles.css";
import EnvironmentalImpact from "../components/EnvironmentalImpact";
import WhoAreWe from "../components/WhoAreWe";

export default function Home() {
  function createBubble() {
    const section = document.querySelector("Section");
    const createElement = document.createElement("span");
    var size = Math.random() * 2;

    createElement.style.animation = "animation 6s linear infinite";
    createElement.style.width = 2 + size + "vw";
    createElement.style.height = 2 + size + "vw";
    // börja på 750 -> 1150
    createElement.style.left = 750 + Math.random() * 400 + "px";
    createElement.style.top = 400 + Math.random() * 200 + "px";

    section.appendChild(createElement);

    setTimeout(() => {
      createElement.remove();
    }, 10000);
  }

  setInterval(createBubble, 300);

  return (
    <div className="flex flex-col justify-center items-center bg-[url('./img/ECOBUZZLANDING.png')] bg-cover text-center h-screen overflow-hidden">
      <section />
    </div>
  );
}
