import Issue from "@/components/issue";

export default async function Page({
  params: { issueId },
}: {
  params: { issueId: string };
}) {
  return (
    <>
      <div>
        <p>Whiteboard Issue {issueId}</p>
        <Issue id={issueId} />
      </div>
    </>
  );
}
