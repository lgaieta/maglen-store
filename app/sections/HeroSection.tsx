import { ButtonLink } from '@/components/Button';
import Image from 'next/image';

function HeroSection() {
    return (
        <section className='flex m-auto max-w-[900px] w-full items-center justify-center gap-6'>
            <div className='flex flex-col w-full gap-6 items-start'>
                <h1 className='text-[52px] font-bold leading-none text-text-dark'>
                    Elegí tu ropa preferida
                </h1>
                <p>Te ofrecemos ropa buena, bonita y barata.</p>
                <ButtonLink href='/ropa'>COMPRAR</ButtonLink>
            </div>
            <div className='flex items-center justify-center w-full aspect-square'>
                <div className='relative w-3/4 h-full'>
                    <Image
                        className='rounded-xl object-cover hover:scale-105 transition-transform'
                        src='/girl.jpg'
                        alt='Ropa en Maglen store'
                        fill
                    />
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
