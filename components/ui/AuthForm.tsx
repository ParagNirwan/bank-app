"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import CustomInput from "./CustomInput";
import { authFormSchema } from "@/lib/utils";
import { Loader2 } from "lucide-react";

const AuthForm = ({ type }: { type: string }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // 1. Define your form.
  const form = useForm<z.infer<typeof authFormSchema>>({
    resolver: zodResolver(authFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof authFormSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.

    setIsLoading(true);
    console.log(values);
    console.log("it is working");
    setIsLoading(false);
  }

  return (
    <section className="auth-form">
      <header className="flex flex-col gap-5 md:gap-8">
        <Link href="/" className="mb-12 cursor-pointer flex items-center gap-1">
          <Image
            src="/icons/logo.svg"
            width={34}
            height={34}
            alt="Ringneck logo"
          />
          <h1 className="text-26 font-ibm-plex-sherif font-bold text-black-1">
            Ringneck
          </h1>
        </Link>
        <div className="flex flex-col gap-1 md:gap-3">
          <h1 className="text-24 lg:text-26 font-semibold text-gray-900">
            {user ? "Link Account" : type === "sign-in" ? "Sign In" : "Sign up"}
            <p className="text-16 font-nomral text-gray-600">
              {user
                ? "Link your account to get started"
                : "Please enter your details"}
            </p>
          </h1>
        </div>
      </header>
      {user ? (
        <div className="flex flex-col gap-4">{/* Plaid Link Component*/}</div>
      ) : (
        <>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <CustomInput
                control={form.control}
                id="email"
                name="email"
                label="Email"
                type="email"
                placeholder="Enter Your Email"
              />
              <CustomInput
                id="password"
                control={form.control}
                name="password"
                label="Password"
                type="password"
                placeholder="Enter Your Password"
              />

              <div className="flex flex-col gap-4">
                <Button className="form-btn" type="submit" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 size={20} className="animate-spin" />
                    </>
                  ) : type === "sign-in" ? (
                    "Sign in"
                  ) : (
                    "Sign up"
                  )}
                </Button>
              </div>
            </form>
          </Form>
          <footer className="flex justify-center gap-1">
            <p className="text-14 font-normal text-gray-600">
              {type === "sign-in"
                ? "Don't have an Account?"
                : "Already have an Account?"}
            </p>
            <Link href={type === "sign-in" ? "/sign-up" : "/sign-in"}></Link>
          </footer>
        </>
      )}
    </section>
  );
};

export default AuthForm;
