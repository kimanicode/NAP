import React from 'react';
import Vid from '../assets/vid.mp4'

const Video = () => {
  return (
    <div className="relative  h-screen  w-full">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src={Vid} type="video/mp4" />
        
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        
        <h1 className="text-xan text-4xl font-bold">Helping farmers to <br></br>feed the world</h1>
      </div>
    </div>
  );
};

export default Video;
