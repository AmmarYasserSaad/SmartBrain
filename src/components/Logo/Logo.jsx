import React from "react";
import Tilt from 'react-parallax-tilt';
import '../../containers/App.css'
import brian from '../assets/brian.svg'
const Logo = () => {
  return (
    <div className="m-4 mt-0">
      <Tilt className=" shadow-2xl shadow-pink-500 rounded-lg w-[150px] h-[150px] bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 flex items-center justify-center">
        <div>
          <img src={brian} alt="Brian" className="w-[100px] h-[100px]" />
        </div>
      </Tilt>
    </div>
  );
};
export default Logo;
