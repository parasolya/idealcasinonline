import localFont from "next/font/local";
import "./globals.css";
import Header from "@/sections/Header";
import Footer from "@/sections/Footer";



export const metadata = {
  title: "Idealcasinonline",
  description: "Parc Broekhuizen met casino speelkamer l Culinair landgoed",
};

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
