import { Inter } from "next/font/google";
import "../globals.css";
import Navbar from '@/components/layout/navigationbar'
import Footer from "@/components/layout/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <div>
      <div className={inter.className}>
        <header>
          <Navbar/>
        </header>
        {children}
        <Footer/>
      </div>
    </div>
  );
}
