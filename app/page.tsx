import HeroSection from "../sections/HeroSection";
import TrendingSection from "../sections/TrendingSection";

export const metadata = {
  title: "Inicio - MAGLEN STORE",
};

function Home() {
  return (
    <main className="w-full h-full flex flex-col">
      <HeroSection />
      <TrendingSection />
    </main>
  );
}

export default Home;
