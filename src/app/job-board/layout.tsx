import { ReactNode } from "react";

export default function JobApplicationLayout({
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