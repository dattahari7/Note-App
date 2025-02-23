import React from "react";

const Header = () => {
  return (
    <div className="flex items-center space-x-2">
      <img src="/notes-icon.png" alt="Note Icon" className="w-6 h-6" />
      <h1 className="text-xl font-bold">Note App</h1>
    </div>
  );
};

export default Header;
