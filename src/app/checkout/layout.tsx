import { FooterComponent, NavbarComponent } from "@/components";
import type { Metadata } from "next";
import style from '@/styles/base.module.sass'

export const metadata: Metadata = {
  title: "Página de Checkout",
  description: "Página de checkout do carrinho de compras - case técnico starsoft",
};

export default function CheckoutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <body className={`${style.base}`}>
            <NavbarComponent />
                {children}
            <FooterComponent />
        </body>
    </html>
  );
}