import React from "react";
import { Link } from "react-router-dom";
import ('https://fonts.googleapis.com/css2?family=Cedarville+Cursive&display=swap');


export const Home = () => {
  return (
    <div className="bg-violet-200 h-158.5 flex flex-col justify-center items-center">
  <div className="text-3xl font-bold text-black text-center mb-6">
    WELCOME TO YOUR PERSONAL TASK TRACKER
  </div>
  <button className="bg-violet-800 px-8 py-4 text-white text-xl font-semibold rounded-full">
    <Link to="/tasks">GET STARTED</Link>
  </button>
</div>

  );
};
