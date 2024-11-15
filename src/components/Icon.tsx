import { icons } from "./icons/icons";
import { VariantProps, cva } from "class-variance-authority";

const iconStyle = cva(["cursor-pointer flex items-center justify-center"], {
  variants: {
    color: {
      gray: ["[&>*]:fill-gray-400"],
      red: ["[&>*]:fill-red-500"],
      white: ["[&>*]:fill-white"],
      emerald: ["[&>*]:fill-primary-600"],
    },
    hover: {
      primary: ["hover:[&>*]:fill-primary-600"],
      scale: ["[&>*]:hover:scale-110 [&>*]:hover:duration-150"],
    },
    backgroundShape: {
      rounded: ["rounded-full", "p-2"],
    },
    backgroundColor: {
      white: ["bg-white"],
      primary: ["bg-primary-600"],
    },
  },
  defaultVariants: {
    color: "gray",
    backgroundColor: null,
  },
});

const sizes = {
  xxsmall: "16",
  xsmall: 20,
  small: 24,
  medium: 28,
  large: 36,
};

interface IconProps extends VariantProps<typeof iconStyle> {
  icon: keyof typeof icons;
  size?: keyof typeof sizes;
}

export const Icon = ({ icon, size = "small", color, hover, backgroundColor, backgroundShape }: IconProps) => {
  const Icon = icons[icon];
  return (
    <div className={iconStyle({ color, hover, backgroundColor, backgroundShape })}>
      <Icon size={sizes[size]} />
    </div>
  );
};
