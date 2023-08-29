import Link from 'next/link';

function Footer() {
    return (
        <footer className='flex flex-col justify-center items-center'>
            <Link href='#'>@maglen.store</Link>
            <Link href='#'>Envianos un mensaje</Link>
            <Link href='#'>maglen.store</Link>
        </footer>
    );
}

export default Footer;
