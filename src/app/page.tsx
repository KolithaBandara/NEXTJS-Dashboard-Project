import React from "react";

const Home = () => {
  return (
    <div>
      <div
        className="bg-sky-500 text-white text-center 
     h-screen flex flex-col justify-center items-center"
      >
        <h1 className="text-2xl font-bold drop-shadow-md">
          Welcome to the DashBoard project !
        </h1>

        <p className="text-sm">
          You can manage and plan your daily tasks with us.
        </p>

        <a
          href="/dashboard"
          className="bg-white text-sky-400 font-bold
           hover:bg-green-500 hover:text-white hover:font-bold
          w-auto px-2 py-1 mt-6 rounded-xl cursor-pointer drop-shadow-xl"
        >
          Open DashBoard
        </a>
      </div>
    </div>
  );
};

export default Home;
