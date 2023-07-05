import { ReactNode } from 'react';
import '@/global.css';
import { Poppins } from 'next/font/google';
import Header from '@/components/Header';

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
                    'flex flex-col w-full gap-8 items-center text-text ' +
                    poppins.className
                }
            >
                <Header />
                {props.children}
            </body>
        </html>
    );
}

export default Layout;
