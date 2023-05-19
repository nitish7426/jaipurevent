import cn from "@/lib/utils";
import { FC } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input: FC<InputProps> = ({ className, ...props }) => {
  return (
    <input
      className={cn(
        "py-2.5 px-4 rounded-xl border border-gray-300 outline-none focus-visible:ring-2 focus:border-white ring-pink-600",
        className
      )}
      {...props}
    />
  );
};

export default Input;
