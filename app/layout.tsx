// import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import "./globals.css";
import { Ubuntu, Inter, Saira } from "next/font/google";
import Sidebar from "@/components/layout/Sidebar";
import Footer from "@/components/layout/Footer";
import { CartProvider } from "@/context/CartContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const saira = Saira({
  subsets: ["latin"],
  variable: "--font-saira",
});

const ubuntu = Ubuntu({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-ubuntu",
});

export const metadata = {
  title: "Zyphra | Cyber-Luxury E-commerce",
  description: "Zyphra is a modern, responsive web application built with a clean UI and optimized performance.",
  icons: {
    icon: "/logoo.png",
    type: "image/png",
    sizes: "16x16 32x32",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <body
        className={`${inter.variable} ${ubuntu.variable} ${saira.variable} font-display bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100`}
      >
        <CartProvider>
          <Navbar />
        
          <div className="mx-auto flex max-w-screen-2xl">
            <section className="hidden lg:block sticky top-10">
              <Sidebar />
            </section>
            {children}
          </div>

          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
