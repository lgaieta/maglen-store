import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Inicio - MAGLEN STORE",
};

function Home() {
  return (
    <main className="w-full h-screen flex flex-col bg-white text-gray-900">
      <section className="flex flex-col items-center justify-center w-full h-full">
        <h1 className="text-5xl text-center font-bold z-10">
          Elegí tu ropa preferida
        </h1>
        <p className="text-slate-600 text-md mt-4">
          Ropa moderna para adolescentes
        </p>
        <Link
          className="mt-6 px-8 py-3 text-md font-bold rounded-full transition-colors z-10 bg-gray-900 text-white hover:bg-gray-700"
          href="#"
        >
          Ver ropa
        </Link>
      </section>
      <section>
        <h2>Lo más nuevo</h2>
      </section>
    </main>
  );
}

export default Home;
