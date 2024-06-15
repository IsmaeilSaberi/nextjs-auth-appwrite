"use client";
import appWriteService from "@/appwrite/config";
import useAuth from "@/context/useAuth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Signup = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  });
  const [error, setError] = useState("");

  const { setAuthStatus } = useAuth();

  const create = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const userData = await appWriteService.createUserAccount(formData);
      if (userData) {
        setAuthStatus(true);
        router.push("/profile");
      }
    } catch (error: any) {
      setError(error.message);
    }
  };
  return (
    <div className="mx-auto max-w-[400px] space-y-6">
      <div className="flex justify-center">
        <Link href="#" prefetch={false}>
          <MountainIcon className="h-8 w-8" />
        </Link>
      </div>
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Sign Up</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Create your account to get started.
        </p>
      </div>
      {error && <p className="text-red-600 mt-4 text-center">{error}</p>}
      <form onSubmit={create} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            placeholder="Fullname"
            value={formData.name}
            required
            onChange={(e) => {
              setFormData((prev) => ({ ...prev, name: e.target.value }));
            }}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            value={formData.email}
            type="email"
            placeholder="m@example.com"
            required
            onChange={(e) => {
              setFormData((prev) => ({ ...prev, email: e.target.value }));
            }}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            value={formData.password}
            type="password"
            required
            onChange={(e) => {
              setFormData((prev) => ({ ...prev, password: e.target.value }));
            }}
          />
        </div>
        <Button type="submit" className="w-full">
          Sign Up
        </Button>
      </form>
      <div className="text-center text-sm text-gray-500 dark:text-gray-400">
        Already have an account?{" "}
        <Link href="/login" className="font-medium underline" prefetch={false}>
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default Signup;

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
