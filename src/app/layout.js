import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "SL International | Overseas Manpower Consultants",
    template: "%s | SL International",
  },
  description:
    "SL International is a licensed overseas manpower consultancy connecting skilled, semi-skilled and unskilled professionals with global employment opportunities.",
  keywords: [
    "SL International",
    "overseas manpower consultants",
    "overseas recruitment",
    "international jobs",
    "visa assistance",
    "manpower consultancy",
    "overseas employment",
  ],
  authors: [{ name: "SL International" }],
  creator: "SL International",
  metadataBase: new URL("https://www.sl-international.com"),
  openGraph: {
    title: "SL International | Overseas Manpower Consultants",
    description:
      "Connecting the right talent with the right opportunities worldwide.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-900">
        <Navbar />

        <main className="flex-1">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
