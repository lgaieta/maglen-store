import { ButtonLink } from '@/components/Button';
import Carousel from '@/components/Carousel';

function HeroSection() {
    return (
        <section className='flex flex-col'>
            <div className='flex flex-col items-center justify-center gap-6'>
                <Carousel />
                <h1 className='text-[52px] text-center font-bold leading-none px-6 text-text-dark'>
                    Elegí tu ropa preferida
                </h1>
                <p className='text-center px-6'>
                    Te ofrecemos ropa buena, bonita y barata.
                </p>
                <ButtonLink href='#'>COMPRAR</ButtonLink>
            </div>
        </section>
    );
}

export default HeroSection;
