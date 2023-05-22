import Image from "next/image";

function TrendingSection() {
  return (
    <section className="flex flex-col px-4 pt-8 md:px-section-sides">
      <h2 className="text-3xl font-bold w-full border-t border-t-border pt-12">
        Lo más nuevo
      </h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
        <li className="relative flex flex-col justify-end w-full p-4 rounded-2xl">
          <Image src="/fashion.jpg" alt="Fashion" layout="fill" />
          <p className="text-2xl text-primary">Ropa 1</p>
          <p className="text-lg text-primary">4500$</p>
        </li>
      </ul>
    </section>
  );
}

export default TrendingSection;
