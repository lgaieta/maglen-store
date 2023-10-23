import { ButtonLink } from '@/components/Button';
import Carousel from '@/components/Carousel';
import Image from 'next/image';

function HeroSection() {
    return (
        <section className='flex flex-col sm:flex-row-reverse bg-background items-center justify-center max-w-section w-full gap-6 px-4 lg:px-0'>
            <div className='flex items-center justify-center w-full'>
                <Carousel />
            </div>
            <div className='flex flex-col gap-6 items-center justify-center w-full sm:items-start'>
                <h1 className='text-[52px] text-center sm:text-left font-bold leading-tight text-text-highlight'>
                    Elegí tu ropa preferida
                </h1>
                <p className='text-center sm:text-left text-text-secondary'>
                    Te ofrecemos ropa buena, bonita y barata.
                </p>
                <ButtonLink
                    href='#'
                    className='bg-gradient-to-r from-pink-700 to-pink-500 shadow-xl shadow-pink-600/20 text-white'
                >
                    COMPRAR
                </ButtonLink>
            </div>
        </section>
    );
}

export default HeroSection;
