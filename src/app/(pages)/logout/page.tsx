"use client";
import appWriteService from "@/appwrite/config";
import useAuth from "@/context/useAuth";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const LogoutPage = () => {
  const router = useRouter();
  const { setAuthStatus } = useAuth();

  useEffect(() => {
    appWriteService.logout().then(() => {
      setAuthStatus(false);
      router.replace("/");
    });
  }, []);

  return <></>;
};

export default LogoutPage;
