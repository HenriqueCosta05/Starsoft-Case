import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import styles from "../styles/base.module.sass";
import ReduxProvider from './redux-provider';
import { ReactQueryClientProvider } from "./react-query-client-provider";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Starsoft",
  description: "Starsoft Case, by Henrique Costa",
  icons: [
    {
      url: "./images/logo.svg",
      rel: "favicon",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactQueryClientProvider>
    <html lang="pt-br">
      <body className={`${poppins.variable} ${styles.base}`}>
        <ReduxProvider>
          {children}
        </ReduxProvider>
      </body>
    </html>
    </ReactQueryClientProvider>
  );
}