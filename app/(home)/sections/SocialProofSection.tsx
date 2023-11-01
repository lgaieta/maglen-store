import Review from '@/(home)/components/Review';
import NextImage from 'next/image';
import { Image } from '@nextui-org/image';

function SocialProofSection() {
    return (
        <section className='flex flex-col items-start justify-center section-width-limits w-full gap-6 py-14 mt-14 border-t border-t-divider'>
            <h2 className='text-3xl font-bold text-text-dark'>
                Nuestros clientes
            </h2>
            <ul className='flex flex-col sm:flex-row min-w-full gap-12 sm:gap-4 pt-8'>
                <Review
                    content='Muy buena la calidad!! Super contentas con mi hermana'
                    author='Marcela Granara'
                    image={
                        <Image
                            as={NextImage}
                            src='/opinion1.jpg'
                            className='rounded-full w-full aspect-square object-cover'
                            alt='Opinión 1 - Maglen store'
                            radius='full'
                            width={52}
                            height={52}
                        />
                    }
                />
                <Review
                    content='Me gustó la atención que me dieron para solucionar mis dudas'
                    author='Raquel Pucheta'
                    image={
                        <Image
                            as={NextImage}
                            src='/opinion2.jpg'
                            className='rounded-full w-full aspect-square object-cover'
                            alt='Opinión 2 - Maglen store'
                            radius='full'
                            width={52}
                            height={52}
                        />
                    }
                />
                <Review
                    content='Compré la remera grande Clean y la quiero usar todos los dias jaja'
                    author='Lorenzo Álvarez'
                    image={
                        <Image
                            as={NextImage}
                            src='/opinion3.jpg'
                            className='rounded-full w-full aspect-square object-cover'
                            alt='Opinión 3 - Maglen store'
                            radius='full'
                            width={52}
                            height={52}
                        />
                    }
                />
            </ul>
        </section>
    );
}

export default SocialProofSection;
