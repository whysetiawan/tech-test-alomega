import { HTMLAttributes, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export const Card: React.FC<
  PropsWithChildren<HTMLAttributes<HTMLDivElement>>
> = (props) => {
  return (
    <div
      {...props}
      className={twMerge(
        "flex flex-col items-center rounded-3xl border-2 border-slate-200 px-8 py-10 bg-white",
        props.className
      )}
    >
      {props.children}
    </div>
  );
};
