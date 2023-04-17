import Link from "next/link";
import { ReactNode } from "react";

export const metadata = {
  title: "Issues",
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <p>Issues</p>
      <Link href="/issues/1">Issue 1</Link>
      <Link href="/issues/2">Issue 2</Link>
      <Link href="/issues/3">Issue 3</Link>
      {children}
    </>
  );
}
