import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React from 'react'

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
    return(
        <>
            <Header></Header>
            <div className='px-24 mb-16'>
                {children}
            </div>
            <Footer></Footer>
        </>
    )
}