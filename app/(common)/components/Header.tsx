import NextLink from 'next/link';
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
} from '@nextui-org/navbar';
import { Button } from '@nextui-org/button';

function Header() {
    return (
        <Navbar
            classNames={{
                base: 'w-full border-b border-b-divider',
                wrapper: 'w-full section-width-limits',
            }}
        >
            <NavbarBrand>
                <NextLink href='/' className='font-bold text-inherit'>
                    Maglen store
                </NextLink>
            </NavbarBrand>
            <NavbarContent justify='end'>
                <NavbarItem>
                    <Button
                        as={NextLink}
                        href='/subir-ropa'
                        color='primary'
                        variant='flat'
                    >
                        Subir ropa
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}

export default Header;