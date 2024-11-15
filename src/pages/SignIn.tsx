import { NavLink, useNavigate } from "react-router-dom";
import EaseInEaseOut from "../components/framer_transitions/EaseInEaseOut";
import { useState } from "react";
import { ZodError } from "zod";
import { Helmet } from "react-helmet-async";
import { signInSchema } from "../validations/signInSchema";
import { toast } from "sonner";
import { Heading } from "@/components/Heading";
import { InputField } from "@/components/InputField";
import { SiIfood } from "react-icons/si";
import { Button } from "@/components/ui/button";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();
  // const [handleSignIn] = useMutation(signIn);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      signInSchema.parse({ email, password, rememberMe });

      navigate("/");
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
        <EaseInEaseOut>
          <form onSubmit={handleSubmit}>
            <div className="flex h-full justify-center items-center bg-white shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] rounded-xl px-[16px] py-[24px]">
              <div className="w-[450px] px-[16px] py-[24px] flex flex-col gap-4">
                <div className="flex items-center gap-2 justify-center">
                  <SiIfood size={40} color="#FF8001" />
                  <p className="text-[#FF8001] text-5xl font-semibold italic">MTOGO</p>
                </div>
                <Heading text="Sign in" />
                <InputField
                  type="text"
                  placeholder="E-mail"
                  fullWidth="full"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className="py-[12px] px-[16px] rounded-xl"
                />
                <InputField
                  type="password"
                  placeholder="Password"
                  fullWidth="full"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  className="py-[12px] px-[16px] rounded-xl"
                />
                <div className="w-full flex gap-2 justify-center">
                  <InputField
                    type="checkbox"
                    name="remember_me"
                    onChange={(e) => setRememberMe(e.target.checked)}
                    checked={rememberMe}
                  />
                  <p className="text-xs font-normal text-gray-500">Remember me</p>
                </div>
                <div className="w-full text-right">
                  <Button
                    type="submit"
                    className="text-white bg-[#FF8001] font-semibold text-2xl py-6 px-4 rounded-3xl w-fit"
                  >
                    Sign in
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
        </EaseInEaseOut>
      </div>
    </>
  );
};

export default SignIn;
