import { cva, VariantProps } from "class-variance-authority";
import { icons } from "./icons/icons";
import { Icon } from "./Icon";

const button = cva(["rounded-lg", "font-normal", "py-3"], {
  variants: {
    buttonType: {
      primary: ["bg-primary-600", "text-white", "hover:bg-primary-700", "focus:ring-emerald-500"],
      outline: ["bg-none", "border", "border-primary-600", "text-primary-600"],
    },
    size: {
      xsmall: ["px-[12px]", "text-xxs", "leading-3"],
      small: ["px-[18px]", "text-xs", "leading-4"],
      medium: ["px-5", "text-sm", "leading-5"],
      large: ["px-6", "text-base", "leading-6"],
    },
    width: {
      full: ["w-full"],
    },
  },
  defaultVariants: {
    buttonType: "primary",
    size: "large",
  },
});

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof button> {
  text?: string;
  icon?: keyof typeof icons;
  iconSize?: "xxsmall" | "xsmall" | "small" | "medium" | "large";
  iconColor?: "gray" | "red" | "white" | "emerald";
}

export const Button = ({ text, buttonType, size, width, icon, iconSize, iconColor, ...props }: ButtonProps) => (
  <button {...props} className={button({ buttonType, size, width })}>
    {icon && <Icon icon={icon} size={iconSize} color={iconColor} />}
    {text && text}
  </button>
);
