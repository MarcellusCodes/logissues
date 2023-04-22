import Link from "next/link";
import { getXataClient } from "@/lib/xata";

type TIssue = {
  id: string;
  title: string;
  description: string;
  markdown: string;
  board_id: { id: string };
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

const Issue = async ({ id }: { id: string }) => {
  const issue = (await getIssue(id)) as TIssue;
  return (
    <ul>
      <Link href="/issues">Back to Issues</Link>
      <li>{issue.title}</li>
      <li>{issue.description}</li>
      <li>{issue.markdown}</li>
      <Link href={`/whiteboard/${issue.board_id.id}`}>Go to Board</Link>
    </ul>
  );
};

export default Issue;
