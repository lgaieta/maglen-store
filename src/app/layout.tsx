import { ReactNode } from "react";
import "./global.css";
import Link from "next/link";

function Layout(props: { children: ReactNode }) {
  return (
    <html>
      <body className="flex flex-col w-full bg-white text-gray-900">
        <header className="sticky top-0 left-0 flex justify-between bg-white w-full py-4 px-4 md:px-section-sides border-b border-b-gray-200">
          <Link className="font-bold" href="/">
            MAGLEN STORE
          </Link>
        </header>
        {props.children}
      </body>
    </html>
  );
}

export default Layout;
