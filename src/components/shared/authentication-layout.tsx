import React, { type ReactNode } from "react";
import Image from "next/image";

import gradient from "../../../public/images/hashnode_blur.webp";
import HashLogo from "../svg/logo";

const AuthenticationLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative grid grid-cols-1 grid-rows-[1fr_auto]">
      <div className="h-72">
        <Image src={gradient} className="h-full w-full object-cover" alt="" />
      </div>
      <div className="flex justify-center bg-white px-4 pb-12 md:px-6">
        <div className=" -mt-56 flex  w-full max-w-lg flex-col items-center gap-7 rounded-3xl bg-white px-8 py-12 shadow-md md:p-12 ">
          <div>
            <HashLogo />
          </div>
          <div className="w-full">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default AuthenticationLayout;
