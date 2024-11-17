import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { InputHTMLAttributes } from "react";

const inputField = cva(
  [
    "bg-white",
    "focus:border-violet-600",
    "focus:outline-none",
    "placeholder:text-base",
    "placeholder:leading-6",
    "placeholder:font-normal",
    "flex",
    "items-center",
    "gap-3",
    "px-5",
    "py-2",
    "disabled:text-gray-500",
    "disabled:bg-gray-100",
    "placeholder:font-light",
  ],
  {
    variants: {
      fullWidth: {
        full: ["w-full"],
      },
      roundedSize: {
        medium: ["rounded-md"],
        xl: ["rounded-xl"],
      },
      border: {
        true: ["border", "border-gray-300"],
        false: [],
      },
    },
    defaultVariants: {
      roundedSize: "medium",
      border: true,
    },
  }
);

export interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof inputField> {
  placeholder?: string;
  name: string;
}

export const InputField = ({
  name,
  placeholder,
  fullWidth,
  roundedSize,
  border,
  className,
  ...props
}: InputFieldProps) => (
  <input
    name={name}
    className={cn(inputField({ fullWidth, roundedSize, border, className }))}
    placeholder={placeholder}
    {...props}
  />
);
