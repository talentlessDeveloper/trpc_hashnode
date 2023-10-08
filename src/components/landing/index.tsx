import React from "react";
import Image from "next/image";
import { Inter } from "next/font/google";

import polkaDot from "../../../public/images/hashnode_polka.webp";
import gradient from "../../../public/images/hashnode_blur.webp";
import heroImage from "../../../public/images/hashnode__hero.webp";
import microsoftImage from "../../../public/images/hashnode_microsoft.webp";
import githubImage from "../../../public/images/hashnode_github.webp";
import cloudfareImage from "../../../public/images/hashnode_cloudfare.webp";
import metaImage from "../../../public/images/hashnode_meta.webp";
import googleImage from "../../../public/images/hashnode_google.webp";
import netflixImage from "../../../public/images/hashnode_netflix.webp";
import amazonImage from "../../../public/images/hashnode_amazon.webp";
import squareImage from "../../../public/images/hashnode_square.webp";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const Landing = () => {
  return (
    <>
      <div className="relative flex h-[830px] flex-col gap-[2.25rem] overflow-hidden md:h-[900px] lg:h-[939px]">
        <div className="relative z-[2] mt-28 flex flex-col items-center gap-[2.25rem] px-4 lg:mt-32">
          <div className="flex max-w-4xl flex-col gap-[2.125rem] text-center">
            <h1
              className={`${inter.className} text-3xl font-bold   md:text-5xl xl:text-6xl`}
            >
              Where developer blogs meet community power!
            </h1>
            <p className="text-lg ">
              Create and grow your developer blog, newsletter, or team
              engineering blog effortlessly with Hashnode. Level up your writing
              using powerful <span className="font-bold">AI features!</span>
            </p>
          </div>
          <div className="flex flex-col gap-7 md:flex-row">
            <a className="block  w-60 rounded-full border border-solid border-hashaccent bg-white px-6 py-3 text-center text-lg text-slate-600 hover:bg-white/80 md:w-36">
              Log in
            </a>{" "}
            <a
              href=""
              className="block w-60 rounded-full bg-hashaccent px-6 py-3 text-center text-lg text-white hover:bg-hashaccent/80 md:w-36"
            >
              Get started
            </a>
          </div>
          <div className="max-w-4xl">
            <Image src={heroImage} alt="" />
          </div>
        </div>

        <div className="absolute inset-0 z-[1]">
          <Image src={polkaDot} className="h-full" alt="" aria-hidden />
        </div>
        <div className="absolute inset-0">
          <Image src={gradient} className="h-full" alt="" aria-hidden />
        </div>
      </div>

      <div className="mt-8 flex flex-col items-center gap-10 px-6 pb-16">
        <p className="text-lg text-hashforeground">
          The go-to platform for top developers from leading companies.
        </p>

        <div>
          <div className="flex max-w-4xl flex-wrap items-center justify-center gap-12">
            <Image width={128} src={metaImage} alt="meta" />
            <Image width={128} src={googleImage} alt="google" />
            <Image width={128} src={amazonImage} alt="amazon" />
            <Image width={128} src={microsoftImage} alt="microsoft" />
            <Image width={128} src={githubImage} alt="github" />
            <Image width={128} src={netflixImage} alt="netflix" />
            <Image width={128} src={cloudfareImage} alt="cloudfare" />
            <Image width={128} src={squareImage} alt="square" />
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Landing;
