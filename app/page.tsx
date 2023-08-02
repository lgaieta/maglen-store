import HeroSection from '@/sections/HeroSection';
import SocialProofSection from './sections/SocialProofSection';
import ProductSection from './sections/ProductSection';

export const metadata = {
    title: 'Inicio - MAGLEN STORE',
};

function Home() {
    return (
        <main className='w-full h-full flex flex-col items-center'>
            <HeroSection />
            <SocialProofSection />
            <ProductSection />
        </main>
    );
}

export default Home;
