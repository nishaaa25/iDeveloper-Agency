import { Inter } from 'next/font/google'
import Navbar from "@/components/Navbar";
import "./globals.css";

// Specify the weights you want to load
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // Add the weights you need
});

export const metadata = {
  title: 'iDeveloper-Agency',
  description: 'Enhancing Your Online Presence with Unique Designs',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased max-w-screen overflow-x-hidden`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
