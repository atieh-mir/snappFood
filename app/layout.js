'use client'

import './globals.css'
import Header from './components/header/Header'
import { usePathname } from 'next/navigation';
import Footer from './components/footer/Footer';
import { ReduxProvider } from '@/redux/provider';
import Navbar from './components/header/Navbar';




export default function RootLayout({ children }) {
  const pathname = usePathname();

  return (
    <html>
      <body>
        {pathname === "/"  && <Header/>}
        {pathname === "/restaurant" && <Header/>}
        {pathname === "/order" && <Navbar/>}
        <ReduxProvider>{children} </ReduxProvider> 
        <Footer/>
        </body>
    </html>
  )
}
  