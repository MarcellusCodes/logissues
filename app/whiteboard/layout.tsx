import { ReactNode } from "react";
import Link from "next/link";

export const metadata = {
  title: "Whiteboard",
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      
      {children}
    </>
  );
}
