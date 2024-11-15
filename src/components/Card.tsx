import { cva, VariantProps } from "class-variance-authority";

const card = cva(["flex p-6 xs:bg-blue-50 rounded-xl gap-6 w-fit xs:w-[420px] xs:shadow-lg"], {
  variants: {
    height: {
      full: ["h-full"],
    },
    items: {
      center: ["items-center"],
      end: ["items-end"],
    },
    justify: {
      center: ["justify-center"],
      end: ["justify-end"],
    },
    flex: {
      col: ["flex-col"],
    },
  },
});

export interface CardProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof card> {
  children: React.ReactNode;
}

export const Card = ({ children, height, items, justify, flex, ...props }: CardProps) => (
  <div {...props} className={`${card({ height, items, justify, flex })}`}>
    {children}
  </div>
);
