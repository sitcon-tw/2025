import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-blue text-light-brown">
      <div className="container mx-auto">{children}</div>
    </div>
  );
}
