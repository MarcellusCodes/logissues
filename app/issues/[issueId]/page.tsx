import IssueEditor from "@/components/issue-editor";

export default function Page({ params: { i } }: { params: { i: string } }) {
  return (
    <>
      <div>
        <p>Issue {i}</p>
        <IssueEditor />
      </div>
    </>
  );
}
