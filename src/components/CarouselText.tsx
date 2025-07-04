"use client";
import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

export default function CarouselText({ children }: Props) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "50%",
        textAlign: "center",
      }}
      className="montserrat-100"
    >
      {children}
    </div>
  );
}
