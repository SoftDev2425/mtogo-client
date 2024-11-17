import { InputField, InputFieldProps } from "./InputField";
import { Icon } from "./Icon";
import { VariantProps, cva } from "class-variance-authority";
import { useState } from "react";

const passwordInputField = cva(["relative flex items-center [&>div]:absolute"], {
  variants: {
    iconSide: {
      left: ["[&>div]:left-2 [&>input]:pl-10"],
      right: ["[&>div]:right-2 "],
    },
    fullWidth: {
      full: ["w-full"],
    },
  },
});

interface PasswordInputFieldProps extends InputFieldProps, VariantProps<typeof passwordInputField> {
  placeholder?: string;
  password?: string;
}

export const PasswordInputField = ({
  placeholder = "Some text..",
  iconSide = "right",
  fullWidth,
  password,
  ...props
}: PasswordInputFieldProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={passwordInputField({ iconSide, fullWidth })}>
      <InputField type={showPassword ? "text" : "password"} placeholder={placeholder} fullWidth="full" {...props} />
      <div onClick={() => setShowPassword(!showPassword)} className="cursor-pointer hover:scale-110 duration-100">
        {password && <Icon icon={showPassword ? "eyeOff" : "eye"} />}
      </div>
    </div>
  );
};

export default PasswordInputField;
