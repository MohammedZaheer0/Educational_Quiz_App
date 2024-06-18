import { Inter } from "next/font/google";
import "./globals.css";
import SideBar from "@/components/Header/SideBar";
import Header from "@/components/homeComponent/Header";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-full overflow-x-hidden grid md:grid-cols-4 grid-cols-1 gap-2">
          <div className="md:col-span-1  relative">
            <SideBar />
          </div>
          <div className="max-w-full md:col-span-3 col-span-4 md:px-4 px-3 py-5 ">
            <Header />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
