import { ReactNode } from 'react';
import '@/global.css';
import { Poppins } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const poppins = Poppins({
    weight: ['400', '500', '700'],
    display: 'swap',
    subsets: ['latin'],
});

function Layout(props: { children: ReactNode }) {
    return (
        <html lang='es'>
            <body
                className={
                    'flex flex-col w-full items-center text-text ' +
                    poppins.className
                }
            >
                <Header />
                {props.children}
                <Footer />
            </body>
        </html>
    );
}

export default Layout;
