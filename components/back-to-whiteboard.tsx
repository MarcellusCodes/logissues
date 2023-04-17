"use client";

import { usePathname, useRouter } from "next/navigation";

const BackBtn = () => {
  const router = useRouter();
  const pathname = usePathname();
  const onIssues = pathname.endsWith("/issues/1");
  return (
    <>
      {onIssues ? (
        <button onClick={router.back}>Back to Whiteboard</button>
      ) : null}
    </>
  );
};

export default BackBtn;
