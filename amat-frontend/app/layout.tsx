import "./globals.css";
import Navbar from "./components/Navbar";
import { Roboto } from "next/font/google";

export const metadata = {
  title: "Amat Frontend",
};
const roboto = Roboto({
  weight: ["400", "700"], // Specify the weights you need
  subsets: ["latin"],
});

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className="bg-white">
        <Navbar />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
