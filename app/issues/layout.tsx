//@ts-nocheck
import Link from "next/link";
import { ReactNode } from "react";

import { getXataClient } from "@/lib/xata";

export const metadata = {
  title: "Issues",
};

export default async function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
