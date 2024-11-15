import { cva, VariantProps } from "class-variance-authority";
import { HTMLAttributes } from "react";

const heading = cva(["text-2xl leading-8 font-light"]);

export interface HeadingProps extends HTMLAttributes<HTMLParagraphElement>, VariantProps<typeof heading> {
  text: string;
}

export const Heading = ({ text, ...props }: HeadingProps) => (
  <p {...props} className={heading()}>
    {text}
  </p>
);
