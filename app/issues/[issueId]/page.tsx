//@ts-nocheck

import IssueEditor from "@/components/issue-editor";
import Issue from "@/components/issue";

export const metadata = {
  title: "Issue",
};



export default async function Page({
  params: { issueId },
}: {
  params: { issueId: string };
}) {

  return (
    <>
      <div>
        <p>Issue {issueId}</p>
        <Issue id={issueId} />
        <IssueEditor />
      </div>
    </>
  );
}
