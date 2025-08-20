import type { PropsWithChildren } from "react";
import Header from "./Head";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
