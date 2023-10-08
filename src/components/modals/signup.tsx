import React, { type SetStateAction } from "react";
import Portal from "../portal";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import Link from "next/link";

type SignUpModalProps = {
  openSignUpModal: boolean;
  setOpenSignUpModal: React.Dispatch<SetStateAction<boolean>>;
};

const SignUpModal = ({
  openSignUpModal,
  setOpenSignUpModal,
}: SignUpModalProps) => {
  //  const menuRef = useRef<HTMLUListElement | null>(null);

  //  const handlePageClick = (
  //    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  //  ) => {
  //    const pageClickedElement = e.target as Node;
  //    if (!menuRef.current?.contains(pageClickedElement)) {
  //      setAuthModal(false);
  //    }
  //  };

  if (!openSignUpModal) return null;

  return (
    <Portal>
      <div
        className="fixed inset-0 z-50 flex items-end px-5 pt-8 backdrop-blur-[1px]  md:items-start md:justify-end "
        onClick={() => setOpenSignUpModal(false)}
      >
        <div className=" flex  h-[300px]  w-full flex-col items-center rounded-lg bg-white p-3 text-sm text-card shadow md:w-72">
          <Avatar className="mb-6 h-16 w-16">
            <AvatarImage src="/images/hashnode_avatar.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <h2 className="mb-3 text-center text-xl font-bold text-hashforeground lg:text-2xl">
            Sign up or log in to your Hashnode account
          </h2>
          <p className="mb-3 text-hashforeground">Takes only a few seconds</p>
          <Link
            href="signup"
            className="px mb-2 flex w-full items-center justify-center rounded-full bg-hashaccent py-[0.875rem] text-base text-white hover:bg-hashaccent/80"
          >
            <span>Sign Up</span>
          </Link>
          <Link
            href="signin"
            className="flex w-full items-center justify-center rounded-full border border-solid border-hashaccent py-[0.875rem] text-base text-slate-600 hover:bg-slate-200"
          >
            <span>Log in</span>
          </Link>
        </div>
      </div>
    </Portal>
  );
};

export default SignUpModal;
