import React, { useState } from "react";

const Dropdown = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative"
    >
      <div className="cursor-pointer ">{item.name}</div>
      {isHovered && item.children && (
        <div className="absolute top-5 ml-6 border px-6 py-2 w-60 bg-white shadow-lg">
          {item.children.map((child) => (
            <Dropdown key={child.id} item={child} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;