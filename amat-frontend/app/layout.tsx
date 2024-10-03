import "./globals.css";
import Navbar from "./_components/Navbar";
import { Roboto } from "next/font/google";
import HeroCard from "./_components/HeroCard";
import ServiceCards from "./_components/ServiceCards";

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
        <HeroCard />
        <ServiceCards />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
