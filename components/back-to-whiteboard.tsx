"use client";

import { usePathname, useRouter } from "next/navigation";

const BackBtn = ({ issueId }: { issueId: string }) => {
  const router = useRouter();
  const pathname = usePathname();
  const onIssues = pathname.endsWith(`/issues/${issueId}`);
  return (
    <>{onIssues && <button onClick={router.back}>Back to Whiteboard</button>}</>
  );
};

export default BackBtn;
