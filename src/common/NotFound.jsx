import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="grid justify-center items-end gap-4 h-full">
      <h1 className="text-6xl text-red-600 text-center">Not Found !</h1>
      <p className="text-3xl text-center w-[600px]">
        The page you looking for does not exist, Make sure you are using correct
        end point.
      </p>
    </div>
  );
};

export default NotFound;
