import { ReactNode } from 'react';
import '@/global.css';
import { Poppins } from 'next/font/google';
import Header from '@/(common)/components/Header';
import Footer from '@/(common)/components/Footer';
import { Providers } from '@/providers';

const poppins = Poppins({
    weight: ['400', '500', '700'],
    display: 'swap',
    subsets: ['latin'],
});

function Layout(props: { children: ReactNode }) {
    return (
        <html lang='es' className='light'>
            <body className={poppins.className}>
                <Providers>
                    <div className='flex flex-col w-full items-center'>
                        <Header />
                        {props.children}
                        <Footer />
                    </div>
                </Providers>
            </body>
        </html>
    );
}

export default Layout;
