"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const BackToIssue = () => {
  const pathname = usePathname();
  const onIssues = pathname.endsWith("/issues/1");
  return <>{onIssues ? null : <Link href="/issues/1">Back to Issue</Link>}</>;
};

export default BackToIssue;
