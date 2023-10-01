import React from "react";

type MenuBtnProps = {
  openMenu: boolean;
  handleMenu: () => void;
};

const MenuBtn = ({ openMenu, handleMenu }: MenuBtnProps) => {
  return (
    <button
      className={` ${
        openMenu ? "mb-3" : ""
      } relative z-30 block space-y-1 lg:hidden`}
      aria-label="nav mobile menu"
      onClick={handleMenu}
    >
      <span
        className={`block h-0.5 w-4 bg-slate-950 transition-opacity duration-500 ${
          openMenu ? "opacity-0" : "opacity-1"
        }`}
      ></span>
      <span
        className={`block h-0.5 w-6 bg-slate-950 transition-transform duration-500 ${
          openMenu ? "translate-x-1 translate-y-2 rotate-45" : ""
        }`}
      ></span>
      <span
        className={`block  h-0.5 w-8 bg-slate-950 transition-transform duration-500 ${
          openMenu ? "-rotate-45" : ""
        }`}
      ></span>
    </button>
  );
};

export default MenuBtn;
