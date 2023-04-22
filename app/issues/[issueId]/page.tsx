//@ts-nocheck
import IssueEditor from "@/components/issue-editor";
import { getXataClient } from "@/lib/xata";

export const metadata = {
  title: "Issue",
};

type TIssue = {
  id: string;
  title: string;
  description: string;
  markdown: string;
  board_id: string;
};

async function getIssue(id: string) {
  const xata = getXataClient();
  const issue: TIssue[] = await xata.db.issues
    .filter({
      id: id,
    })
    .getMany();
  if (!issue) {
    return null;
  }
  return issue[0];
}

export default async function Page({
  params: { issueId },
}: {
  params: { issueId: string };
}) {
  const issue = (await getIssue(issueId)) as TIssue;

  return (
    <>
      <div>
        <p>Issue {issueId}</p>
        <ul>
          <li>{issue.title}</li>
          <li>{issue.description}</li>
          <li>{issue.markdown}</li>
        </ul>
        <IssueEditor />
      </div>
    </>
  );
}
