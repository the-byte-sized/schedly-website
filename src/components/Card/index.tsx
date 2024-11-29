import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type Props = React.HTMLAttributes<HTMLDivElement>;

function Card({ className, ...props }: Props) {
  return <div className={clsx(className, styles.card)}>{props.children}</div>;
}

export default Card;
