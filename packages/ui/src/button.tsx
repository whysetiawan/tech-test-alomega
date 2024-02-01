"use client";

import { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

// interface IBaseButton extends React.ReactElement {
//   Primary: React.FC<ButtonHTMLAttributes<HTMLButtonElement>>;
//   Secondary: React.FC<ButtonHTMLAttributes<HTMLButtonElement>>;
// }
// const BaseButton: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
//   return (
//     <button {...props} className=" rounded-2xl px-12 py-4 bg-blue-500 text-white hover:bg-blue-700">
//       {props.children}
//     </button>
//   );
// };

const PrimaryButton: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = (
  props
) => {
  return (
    <button
      {...props}
      className={twMerge(
        "bg-blue-500 border-2 border-blue-500 hover:border-blue-700 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded",
        props.className
      )}
    >
      {props.children}
    </button>
  );
};

const SecondaryButton: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = (
  props
) => {
  return (
    <button
      {...props}
      className={twMerge(
        "bg-white border-2 border-blue-500  text-blue-500 font-medium py-2 px-4 rounded-md hover:bg-blue-700 hover:text-white hover:border-blue-700",
        props.className
      )}
    >
      {props.children}
    </button>
  );
};

export const Button = {
  Primary: PrimaryButton,
  Secondary: SecondaryButton,
};
