import Link from 'next/link';

function Footer() {
    return (
        <footer className='flex flex-col gap-4 bg-background-dark text-text justify-center items-center py-8 w-full border-t border-border'>
            <Link href='#'>@maglen.store</Link>
            <Link href='#'>Envianos un mensaje</Link>
            <Link href='#'>maglen.store</Link>
        </footer>
    );
}

export default Footer;
