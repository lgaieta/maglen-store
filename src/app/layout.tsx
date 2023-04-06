import { ReactNode } from 'react';
import './global.css';

function Layout(props: { children: ReactNode }) {
    return (
        <html>
            <body>{props.children}</body>
        </html>
    );
}

export default Layout;
