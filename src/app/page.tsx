import { ButtonLink } from "@/components/Button";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Inicio - MAGLEN STORE",
};

function Home() {
  return (
    <main className="w-full h-full flex flex-col bg-white text-gray-900">
      <section className="flex flex-col md:flex-row-reverse gap-8 md:gap-12 items-center justify-center pt-8 md:px-section-sides md:pt-12 w-full h-[80vh]">
        <div className="flex items-center justify-between w-full gap-8 h-full min-h-[20rem]">
          <div className="w-1/6 md:w-1/3 h-4/5 bg-gray-900 rounded-lg" />
          <div className="w-2/3 md:w-1/2 h-full bg-gray-900 rounded-lg" />
          <div className="w-1/6 md:w-1/3 h-4/5 bg-gray-900 rounded-lg" />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-5xl text-center font-bold">
            Elegí tu ropa preferida
          </h1>
          <p className="text-slate-600 text-md mt-5">
            Ropa moderna para adolescentes
          </p>
          <ButtonLink href="#" className="mt-5">
            Ver ropa
          </ButtonLink>
        </div>
      </section>
    </main>
  );
}

export default Home;
