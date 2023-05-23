import { ReactNode } from 'react';
import '@/global.css';
import Link from 'next/link';

function Layout(props: { children: ReactNode }) {
    return (
        <html lang='es'>
            <body className='flex flex-col w-full bg-secondary text-primary'>
                <header className='sticky top-0 left-0 flex justify-between bg-secondary w-full py-4 px-4 md:px-section-sides border-b border-b-border'>
                    <Link className='font-bold' href='/'>
                        MAGLEN STORE
                    </Link>
                </header>
                {props.children}
            </body>
        </html>
    );
}

export default Layout;
