"use client";
import Header from '@/components/Header';
import '../styles/globals.css';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import { ThemeProvider } from "next-themes";




export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  return (
    <html suppressHydrationWarning lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head/>
        

      <body>
        <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}

