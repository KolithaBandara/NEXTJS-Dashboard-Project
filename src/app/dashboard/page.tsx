import React from "react";

const DashBoard = () => {
  return (
    <div>
      <div className="h-screen bg-sky-500 flex flex-col justify-center items-center ">
        <div
          className="w-3/6 bg-white h-15 rounded-xl relative flex justify-start items-start
                        font-[900] uppercase text-sky-500 text-[22px] absolute bottom-4/12
                        drop-shadow-xl"
        >
          <h1 className="absolute left-5 top-2">DashBoard</h1>
          <p className="text-[8px] absolute top-7/12 left-5">
            You can control your life with our dashboard
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
