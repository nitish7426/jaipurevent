import cn from "@/lib/utils";
import { FC } from "react";

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}

const Label: FC<LabelProps> = ({ className, ...props }) => {
  return (
    <label
      className={cn("text-sm text-gray-500 font-semibold", className)}
      {...props}
    />
  );
};

export default Label;
