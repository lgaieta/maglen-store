import { ReactNode } from 'react';
import '@/global.css';
import Link from 'next/link';
import { MdMoreVert } from 'react-icons/md';
import { Poppins } from 'next/font/google';

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
                <header className='flex justify-between items-center w-full p-4 border-border border-b text-text'>
                    <Link className='font-medium' href='/'>
                        Maglen store
                    </Link>
                    <MdMoreVert size={24} />
                </header>
                {props.children}
            </body>
        </html>
    );
}

export default Layout;
