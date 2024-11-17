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
import PasswordInputField from "@/components/PasswordInputField";

const CustomerSignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [tcAgreed, settcAgreed] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const { mutate, isPending } = useMutation({
    mutationFn: async () => {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/login/customer`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, rememberMe }),
        cache: "no-cache",
      });
      if (!response.ok) {
        throw new Error("User is not authenticated");
      }
      return response.json();
    },
    onSuccess: (data) => {
      console.log(data);
      // Handle successful authentication here, e.g., navigate to the home page
      navigate("/");
    },
    onError: (error) => {
      // Handle errors here, e.g., show a toast notification
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
        <title>Sign Up - MTOGO</title>
      </Helmet>
      <div className="min-h-screen w-full bg-gray-100 flex justify-center items-center">
        <form onSubmit={handleSubmit}>
          <div className="flex h-full justify-center items-center bg-white shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] rounded-xl px-[16px] py-[24px]">
            <div className="w-[450px] px-[16px] py-[24px] flex flex-col gap-4">
              <div className="flex items-center gap-2 justify-center">
                <SiIfood size={40} color="#FF8001" />
                <p className="text-[#FF8001] text-5xl font-semibold italic">MTOGO</p>
              </div>
              <Heading text="Sign up" />

              {/* CREATE A LABEL FOR FIRSTNAME */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-light text-gray-700" htmlFor="first_name">
                  First name
                </label>
                <InputField
                  type="text"
                  placeholder="First name"
                  fullWidth="full"
                  name="first_name"
                  className="py-[12px] px-[16px] rounded-xl"
                />
              </div>

              {/* CREATE A LABEL FOR LASTNAME */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-light text-gray-700" htmlFor="last_name">
                  Last name
                </label>
                <InputField
                  type="text"
                  placeholder="Last name"
                  fullWidth="full"
                  name="first_name"
                  className="py-[12px] px-[16px] rounded-xl"
                />
              </div>

              {/* CREATE A LABEL FOR PHONE NUMBER */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-light text-gray-700" htmlFor="phone_number">
                  Phone number
                </label>
                <InputField
                  type="text"
                  placeholder="Phone number"
                  fullWidth="full"
                  name="first_name"
                  className="py-[12px] px-[16px] rounded-xl"
                />
              </div>

              {/* CREATE A LABEL FOR EMAIL */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-light text-gray-700" htmlFor="email">
                  E-mail
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

              {/* CREATE A LABEL FOR PASSWORD */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-light text-gray-700" htmlFor="password">
                  Password
                </label>

                <div className="flex flex-col gap-2">
                  <PasswordInputField
                    fullWidth="full"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    password={password}
                  />
                  <p className="text-[10px] leading-normal text-gray-400 select-none mx-1">
                    Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase
                    letter, and one number
                  </p>
                </div>
              </div>

              {/* CREATE A LABEL FOR CONFIRM PASSWORD */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-light text-gray-700" htmlFor="confirm_password">
                  Confirm password
                </label>
                <InputField
                  fullWidth="full"
                  type="password"
                  placeholder="Confirm password"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <div className="flex gap-2">
                <InputField
                  type="checkbox"
                  placeholder="tcAgreed"
                  name="tcAgreed"
                  checked={tcAgreed}
                  onChange={(e) => settcAgreed(e.target.checked)}
                />
                <p className="text-gray-700 text-sm leading-6 font-light">
                  I have read and agree to these{" "}
                  <NavLink to="/toc" className="text-purple-600 text-sm leading-6 font-medium">
                    Terms and Conditions
                  </NavLink>
                </p>
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
                    "Sign up"
                  )}
                </Button>
              </div>

              <div className="flex gap-2">
                <p className="text-gray-700 text-base leading-6 font-light">
                  Already have an account?{"  "}
                  <NavLink to="/signin" className="text-purple-600 text-base leading-6 font-light">
                    Sign in
                  </NavLink>
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default CustomerSignUp;
