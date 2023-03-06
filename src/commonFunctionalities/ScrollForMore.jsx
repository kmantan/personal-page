import { SlArrowDown } from 'react-icons/Sl';
import gsap from 'gsap';

const ScrollForMore = () => {
  const scrollElement = () => {
    return (
    <div className="flex flex-row justify-center items-center m-4 ScrollForMore" onHover={(e) => {
      e.preventDefault();
      animate();
    }}>
      <SlArrowDown />
      <p className="m-2">Scroll Down For More</p>
      <SlArrowDown />
    </div>
    )
  }
  // setInterval(gsap.fromTo(".ScrollForMore", {x: 0, y: 15}, {x: 0, y: 0, duration: 1}), 2000);
  return scrollElement();
};

module.exports = ScrollForMore;