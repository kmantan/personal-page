import { SlArrowDown } from 'react-icons/sl';
import gsap from 'gsap';

export default function ScrollForMore() {
  const scrollElement = () => {
    return (
    <div className="flex flex-row justify-center items-center m-4 ScrollForMore">
      <SlArrowDown />
      <p className="m-2">Scroll Down For More</p>
      <SlArrowDown />
    </div>
    )
  }
  // setInterval(gsap.fromTo(".ScrollForMore", {x: 0, y: 15}, {x: 0, y: 0, duration: 1}), 2000);
  return scrollElement();
};