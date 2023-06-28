import { ButtonLink } from '@/components/Button';
import Carousel from '@/components/Carousel';
import Image from 'next/image';

function HeroSection() {
    return (
        <section className='flex flex-col sm:flex-row-reverse items-center justify-center max-w-[900px] w-full gap-6 px-6'>
            <div className="flex items-center justify-center w-full">
                <Carousel />
            </div>
            <div className='flex flex-col gap-6 items-center justify-center w-full sm:items-start'>
                <h1 className='text-[52px] text-center sm:text-left font-bold leading-none text-text-dark'>
                    Elegí tu ropa preferida
                </h1>
                <p className='text-center sm:text-left'>
                    Te ofrecemos ropa buena, bonita y barata.
                </p>
                <ButtonLink href='#'>COMPRAR</ButtonLink>
            </div>
        </section>
    );
}

export default HeroSection;
