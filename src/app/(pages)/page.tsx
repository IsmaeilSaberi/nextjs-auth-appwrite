"use client";
import useAuth from "@/context/useAuth";
import React from "react";
import ProfileCart from "@/components/ProfileCard";
import Login from "@/components/Login";
import Link from "next/link";

const Home = () => {
  const { authStatus } = useAuth();

  return (
    <div className="w-full max-w-7xl mx-auto px-8">
      <div className="flex flex-wrap -mx-2 mt-32 gap-y-8">
        <div className="w-full sm:w-1/2 px-2 flex justify-center flex-wrap items-center">
          <div className="relative text-center w-full flex justify-center flex-wrap">
            <div className="w-full max-w-[100px]">
              <Link href="#" prefetch={false}>
                <MountainIcon className="h-8 w-8" />
              </Link>
            </div>
            <div className="w-full">
              <h1 className="font-bold text-3xl mb-4">
                NextJS 14 Authentication with{" "}
                <span className="text-primary">Appwrite</span>
              </h1>
              <p className="text-black/60">
                Integrate secure user authentication into your Next.js web
                applications using Appwrite, an open-source backend server.
                Follow along as we demonstrate the step-by-step process of
                setting up and implementing authentication functionality,
                ensuring the highest level of security for your users.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/2 px-2 flex flex-wrap justify-end">
          {authStatus ? (
            <div className="max-w-md">
              <ProfileCart />
            </div>
          ) : (
            <Login />
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;

type Props = {
  className: string;
};

function MountainIcon(props: Props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
