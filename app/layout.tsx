import Navbar from "@/components/Navbar";
import "./globals.css";
import { Figtree, Inter, Sacramento } from "next/font/google";
import ToasterContext from "@/context/ToasterContext";
import cn from "@/lib/utils";
import Footer from "@/components/Footer";
import { Metadata } from "next";
import { keywords } from "@/constants";

const figtree = Figtree({ subsets: ["latin"] });
const sacramento = Sacramento({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-cursive",
});
export const metadata: Metadata = {
  title: "Jaipur Event",
  description:
    "Transform your event with mesmerizing balloon decorations that add a touch of magic and elegance. Our talented team specializes in vibrant balloon arches, whimsical centerpieces, and creative sculptures. Contact us now to elevate your celebration and create unforgettable memories.",
  keywords: keywords,
  creator: "Nitish Mahawar",
  openGraph: {
    type: "website",
    title: "Jaipur Event",
    description: `Jaipur Event: Your premier balloon decoration event organizer in Jaipur. We create magical balloon arches, centerpieces, and sculptures for weddings, parties, and corporate events. Let us bring your vision to life and make your Jaipur event unforgettable.`,
    url: "https://jaipurevent.vercel.app",
    images: ["/image2.jpeg", "/image10.jpeg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(figtree.className, sacramento.variable)}>
        <ToasterContext />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
