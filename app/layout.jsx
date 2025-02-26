import { Inter } from 'next/font/google';
import { ThemeProvider } from "next-themes";
import "./globals.css";
import ClientWrapper from "../components/ClientWrapper"
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { MobileNavbar } from '@/components/mobile-navbar';
import MouseMoveEffect from "@/components/mouse-move-effect"
import { MobileNav } from '@/components/mobileNav';
import { Toaster } from 'sonner';
// Define metadata as part of a server component
export const metadata = {
  title: "Binary Core Systems",
  description: "Binary Core Systems offers cutting-edge web development, mobile app development, and networking services.",
};

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`min-h-screen bg-background font-sans antialiased ${inter.className}`}>
      <MouseMoveEffect />
       
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
        
          <Toaster/>
          <Navbar></Navbar>
          < ClientWrapper>
            {children}
          </ClientWrapper>
        </ThemeProvider>
        <Footer/>
        <MobileNav/>
      </body>
    </html>
  );
}

