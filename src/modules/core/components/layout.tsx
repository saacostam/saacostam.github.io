import { PropsWithChildren } from "react";
import { NavBar } from ".";
import { Footer } from "./footer";

export function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <NavBar />
      <main className="m-4 mt-20 rounded-2xl p-4 max-w-7xl mx-auto">
        {children}
      </main>
      <Footer />
    </>
  );
}
