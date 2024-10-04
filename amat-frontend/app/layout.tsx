import "./globals.css";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";
import { Roboto } from "next/font/google";

export const metadata = {
  title: "Amat Frontend",
};

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className="bg-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
