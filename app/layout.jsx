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

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Binary Core Systems | Advanced Technology Solutions",
    template: "%s | Binary Core Systems",
  },
  description: "Binary Core Systems provides cutting-edge technology solutions for businesses and enterprises.",
  keywords: ["binary systems", "technology", "IT solutions", "software development", "enterprise solutions"],
  metadataBase: new URL("https://binarycoresystems.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Binary Core Systems | Advanced Technology Solutions",
    description: "Binary Core Systems provides cutting-edge technology solutions for businesses and enterprises.",
    url: "https://binarycoresystems.com",
    siteName: "Binary Core Systems",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Binary Core Systems",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Binary Core Systems | Advanced Technology Solutions",
    description: "Binary Core Systems provides cutting-edge technology solutions for businesses and enterprises.",
    images: ["/images/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
}


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

