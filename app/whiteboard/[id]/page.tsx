import BackBtn from "@/components/back-to-whiteboard";
import BackToIssue from "@/components/back-to-issue";

import { getXataClient } from "@/lib/xata";

export const metadata = {
  title: "Board",
};

type TBoard = {
  id: string;
};

async function getBoard(id: string) {
  const xata = getXataClient();
  const board: TBoard[] = await xata.db.boards
    .filter({
      id: id,
    })
    .getMany();
  if (!board) {
    return null;
  }
  return board[0];
}

export default async function Page({
  params: { id },
}: {
  params: { id: string };
}) {
  const board = (await getBoard(id)) as TBoard;

  return (
    <>
      <div>
        <BackToIssue issueId={board.issue.id} />
        <p>Whiteboard {id}</p>
        <BackBtn issueId={board.issue.id} />
      </div>
    </>
  );
}
