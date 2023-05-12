import { ReactNode } from "react";
import "./global.css";
import Link from "next/link";

function Layout(props: { children: ReactNode }) {
  return (
    <html>
      <body className="flex flex-col w-full bg-white text-gray-900">
        <header className="flex justify-between w-full py-4 px-4 md:px-64 border-b border-b-gray-200">
          <Link className="font-bold" href="/">
            MAGLEN
          </Link>
        </header>
        {props.children}
      </body>
    </html>
  );
}

export default Layout;
