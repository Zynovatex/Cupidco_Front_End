import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./layouts/footer/footer";
import Header from "./layouts/header/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Cupidco",
    template: "%s | Cupidco",
  },
  description: "Welcome to Cupidco!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <div
          className="bg-cover bg-center bg-no-repeat h-full"
          style={{ backgroundImage: "url(/images/FooterBgImage.png)" }}
        >
          <div className="flex justify-center  ">
            <div className="max-w-screen-2xl">
              <Footer />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
