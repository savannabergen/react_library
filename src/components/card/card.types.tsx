import { ReactNode } from "react";

export type CardProps = {
  title: ReactNode;
  children: ReactNode;
  disabled?: boolean;
};