import { ButtonLink } from "@/components/Button";

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
      <section className="flex flex-col px-4 pt-8 md:px-section-sides">
        <h2 className="text-3xl font-bold w-full border-t border-t-gray-200 pt-12">
          Lo más nuevo
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
          <li className="flex flex-col justify-end w-full bg-gray-900 aspect-[16/9] p-4 rounded-2xl">
            <p className="text-2xl text-white">Ropa 1</p>
            <p className="text-lg text-white">4500$</p>
          </li>
          <li className="flex flex-col justify-end w-full bg-gray-900 aspect-[16/9] p-4 rounded-2xl">
            <p className="text-2xl text-white">Ropa 1</p>
            <p className="text-lg text-white">4500$</p>
          </li>
        </ul>
      </section>
    </main>
  );
}

export default Home;
