import BackBtn from "@/components/back-to-whiteboard";
import BackToIssue from "@/components/back-to-issue";

export default function Page({ params: { id } }: { params: { id: string } }) {
  return (
    <>
      <div>
        <BackToIssue />
        <p>Whiteboard {id}</p>
        <BackBtn />
      </div>
    </>
  );
}
