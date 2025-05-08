import { ReactNode } from "react";

export default function JobBoardLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
}