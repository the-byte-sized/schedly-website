import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type TButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  label: string;
};

function Button({ label, className, ...props }: TButtonProps) {
  return (
    <button
      className={clsx(`btn px-4 py-2 ${styles.button}`, className)}
      {...props}
    >
      {label}
    </button>
  );
}

export default Button;
