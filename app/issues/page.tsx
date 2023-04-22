//@ts-nocheck
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { getXataClient } from "@/lib/xata";

type TIssue = {
  id: string;
  title: string;
  description: string;
  markdown: string;
  board_id: string;
};

async function getIssues() {
  const xata = getXataClient();
  const issues: TIssue[] = await xata.db.issues.getMany();
  if (!issues) {
    return null;
  }
  return issues;
}

export default async function Page() {
  const issues = (await getIssues()) as TIssue[];
  return (
    <>
      <p>Issues</p>
      <div className="flex flex-col gap-3 items-start">
        {issues.map((issue) => (
          <Link
            key={issue.id}
            href={`/issues/${issue.id}`}
            className="border border-purple-600 px-12 py-3 bg-purple-300 text-white"
          >
            {issue.title}
          </Link>
        ))}
      </div>
    </>
  );
}
