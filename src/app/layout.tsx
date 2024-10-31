import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import styles from '../styles/base.module.sass'

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Starsoft",
  description: "Starsoft Case, by Henrique Costa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${styles.base}`}>
        {children}
      </body>
    </html>
  );
}
