import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

const buttonStyles =
    'px-4 py-3 leading-none font-bold rounded-lg transition-colors bg-text-dark text-background hover:bg-text';

type ButtonProps<Element extends React.ElementType<any>> = {
    children: React.ReactNode;
} & React.ComponentPropsWithoutRef<Element>;

function Button({ children, className = '', ...rest }: ButtonProps<'button'>) {
    return (
        <button className={twMerge(buttonStyles, className)} {...rest}>
            {children}
        </button>
    );
}

export default Button;

export function ButtonLink({
    children,
    className = '',
    ...rest
}: ButtonProps<'a'> & React.ComponentPropsWithoutRef<typeof Link>) {
    return (
        <Link className={`${buttonStyles} ${className}`} {...rest}>
            {children}
        </Link>
    );
}
