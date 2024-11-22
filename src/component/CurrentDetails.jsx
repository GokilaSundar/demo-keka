import React from "react";

const CurrentDetails = ({
  quantity,
  title,
  className,
  icon,
  iconColor,
  img,
}) => {
  return (
    <div
      className={`border-2 flex gap-5 rounded-md py-7 px-5 w-full text-lg my-7 ${className}`}
    >
      <div
        className={`border-2 rounded-full flex justify-center w-14 items-center ${iconColor}`}
      >
        <img src={img} alt="" />
      </div>
      <div>
        <h2>{title}</h2>
        <h3>{quantity}</h3>
      </div>
    </div>
  );
};

export default CurrentDetails;
