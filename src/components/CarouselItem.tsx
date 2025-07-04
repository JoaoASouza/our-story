"use client";
import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

export default function CarouselItem({ children }: Props) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        width: "100%",
      }}
    >
      {children}
    </div>
  );
}
