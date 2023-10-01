import Link from "next/link";
import React from "react";

const HeaderMenu = ({ openMenu }: { openMenu: boolean }) => {
  return (
    <ul
      className={`fixed bottom-0 left-0 top-0 z-10 flex w-10/12 max-w-lg flex-col justify-center space-y-6 overflow-hidden  bg-white px-6 text-2xl font-semibold  text-slate-800 shadow transition-transform duration-300 lg:hidden ${
        openMenu ? "translate-x-0" : "-translate-x-full"
      } `}
    >
      <li>
        <Link href="/feeds">My Feed</Link>
      </li>
      <li>
        <Link href="/explore">Explore</Link>
      </li>
      <li>
        <Link href="/bookmarks">BookMarks</Link>
      </li>
    </ul>
  );
};

export default HeaderMenu;
