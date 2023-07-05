import HeroSection from '@/sections/HeroSection';
import SocialProofSection from './sections/SocialProofSection';

export const metadata = {
    title: 'Inicio - MAGLEN STORE',
};

function Home() {
    return (
        <main className='w-full h-full flex flex-col items-center'>
            <HeroSection />
            <SocialProofSection />
        </main>
    );
}

export default Home;
