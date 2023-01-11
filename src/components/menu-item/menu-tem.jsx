import React from "react";

const MenuItem = ({ text = "", icon }) => {
  return (
    <div className="flex w-full space-x-4">
      {icon} 
      <span className="text-medium-gray hover:text-almost-black cursor-pointer">{text}</span>
    </div>
  );
};

export default MenuItem;
