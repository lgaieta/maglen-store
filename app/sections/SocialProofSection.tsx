import Review from '@/components/Review';
import Image from 'next/image';

function SocialProofSection() {
    return (
        <section className='flex flex-col items-start justify-center section-width-limits w-full gap-6 py-14 mt-14 border-t border-t-border'>
            <h2 className='text-3xl font-bold text-text-dark'>
                Nuestros clientes
            </h2>
            <ul className='flex flex-col sm:flex-row min-w-full gap-12 sm:gap-4 pt-8'>
                <Review
                    content='Lorem ipsum, dolor sit amet consectetur adipisicing. Magnam soluta ipsam sequi. Et magni doloribus'
                    author='Anonymous'
                    image={
                        <Image
                            src='/girl.jpg'
                            className='rounded-full'
                            alt=''
                            fill
                        />
                    }
                />
                <Review
                    content='Lorem ipsum, dolor sit amet consectetur adipisicing. Magnam soluta ipsam sequi. Et magni doloribus'
                    author='Anonymous'
                    image={
                        <Image
                            src='/girl.jpg'
                            className='rounded-full'
                            alt=''
                            fill
                        />
                    }
                />
                <Review
                    content='Lorem ipsum, dolor sit amet consectetur adipisicing. Magnam soluta ipsam sequi. Et magni doloribus'
                    author='Anonymous'
                    image={
                        <Image
                            src='/girl.jpg'
                            className='rounded-full'
                            alt=''
                            fill
                        />
                    }
                />
            </ul>
        </section>
    );
}

export default SocialProofSection;
