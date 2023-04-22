"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const BackToIssue = ({ issueId }: { issueId: string }) => {
  const pathname = usePathname();
  const onIssues = pathname.endsWith(`/issues/${issueId}`);
  return (
    <>
      {onIssues ? null : <Link href={`/issues/${issueId}`}>Back to Issue</Link>}
    </>
  );
};

export default BackToIssue;
