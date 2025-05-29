import React from 'react';
import Footer from './Footer';
import Header from './Header';

interface LoginLayoutProps {
    children: React.ReactNode;
}

async function LoginLayout({
    children
}: LoginLayoutProps): Promise<React.ReactElement> {

    return (
        <div className='flex flex-col min-h-screen'>
            <Header/>
            {children}
            <Footer />
        </div>
    )
}

export default LoginLayout