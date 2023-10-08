import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormItem,
  FormLabel,
  FormField,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "../ui/button";

const signInSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters",
  }),
});

const SignIn = () => {
  const [passwordType, setPasswordType] = useState<"password" | "text">(
    "password",
  );

  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof signInSchema>) {
    console.log(values);
    // await signIn();
  }
  return (
    <Form {...form}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          void form.handleSubmit(onSubmit)(e);
        }}
        className="space-y-3"
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <div className="relative">
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    type={passwordType}
                    placeholder="password"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <button
            onClick={() => {
              const newType = passwordType === "password" ? "text" : "password";
              setPasswordType(newType);
            }}
            className="absolute right-[5px] top-[62%] "
            type="button"
          >
            {passwordType === "password" ? (
              <EyeOff width={16} height={16} />
            ) : (
              <Eye width={16} height={16} />
            )}
          </button>
        </div>
        <Button
          type="submit"
          className="mt-5 w-full bg-hashaccent text-base text-slate-100"
        >
          Sign In
        </Button>
        <Button
          type="button"
          className="mt-2 flex w-full items-center gap-1 bg-hashaccent text-slate-100"
        >
          <svg className="mt-[2px] h-4 w-4 fill-current" viewBox="0 0 488 512">
            <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
          </svg>
          <span className="text-base">Continue with Google</span>
        </Button>
      </form>
    </Form>
  );
};

export default SignIn;
