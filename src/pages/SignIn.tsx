import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ZodError } from "zod";
import { Helmet } from "react-helmet-async";
import { signInSchema } from "../validations/signInSchema";
import { toast } from "sonner";
import { Heading } from "@/components/Heading";
import { InputField } from "@/components/InputField";
import { SiIfood } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import { BarLoader } from "react-spinners";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const { mutate, isPending } = useMutation({
    mutationFn: async () => {
      const response = await fetch(`${import.meta.env.VITE_REACT_APP_API_GATEWAY_URL}/api/auth/login/customer`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, rememberMe }),
        cache: "no-cache",
        credentials: "include",
      });
      if (!response.ok) {
        throw new Error("User is not authenticated");
      }
      return response.json();
    },
    onSuccess: (data) => {
      toast.success(data.message);
      navigate("/profile");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      signInSchema.parse({ email, password, rememberMe });

      mutate();
    } catch (error) {
      if (error instanceof ZodError) {
        toast.error(error.errors[0].message);
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>Sign In - MTOGO</title>
      </Helmet>
      <div className="min-h-screen w-full bg-gray-100 flex justify-center items-center">
        <form onSubmit={handleSubmit}>
          <div className="flex h-full justify-center items-center bg-white shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] rounded-xl px-[16px] py-[24px]">
            <div className="w-[450px] px-[16px] py-[24px] flex flex-col gap-4">
              <div className="flex items-center gap-2 justify-center">
                <SiIfood size={40} color="#FF8001" />
                <p className="text-[#FF8001] text-5xl font-semibold italic">MTOGO</p>
              </div>
              <Heading text="Sign in" />

              <div className="flex flex-col gap-2">
                <label className="text-sm font-light text-gray-700" htmlFor="email">
                  Email
                </label>

                <InputField
                  type="text"
                  placeholder="E-mail"
                  fullWidth="full"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className="py-[12px] px-[16px] rounded-xl"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-light text-gray-700" htmlFor="email">
                  Email
                </label>
                <InputField
                  type="password"
                  placeholder="Password"
                  fullWidth="full"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  className="py-[12px] px-[16px] rounded-xl"
                />
              </div>
              <div className="w-full flex items-center gap-2">
                <InputField
                  type="checkbox"
                  name="remember_me"
                  onChange={(e) => setRememberMe(e.target.checked)}
                  checked={rememberMe}
                  className="w-[16px] h-[16px] rounded-lg"
                />
                <p className="text-sm font-light text-gray-700">Remember me</p>
              </div>
              <div className="w-full text-right">
                <Button
                  type="submit"
                  className="w-full py-[12px] px-[16px] rounded-xl bg-[#FF8001] text-white font-semibold hover:bg-opacity-80"
                  disabled={isPending}
                >
                  {isPending ? (
                    <>
                      <BarLoader color="#FF8001" />
                    </>
                  ) : (
                    "Sign in"
                  )}
                </Button>
              </div>

              <div className="flex gap-2">
                <p className="text-base leading-6 font-light text-gray-700">Don&apos;t have an account?</p>
                <NavLink to="/signup" className="text-base leading-6 font-light text-purple-600">
                  Sign up
                </NavLink>
              </div>
              <NavLink to="/forgotpassword" className="text-base leading-6 font-light text-purple-600">
                Forgot your password?
              </NavLink>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignIn;
