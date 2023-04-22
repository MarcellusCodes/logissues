import { ReactNode } from "react";

export const metadata = {
  title: "Whiteboard",
};

export default function Layout({
  children,
  issuePreview,
}: {
  children: ReactNode;
  issuePreview: ReactNode;
}) {
  return (
    <>
      {issuePreview}
      {children}
    </>
  );
}
