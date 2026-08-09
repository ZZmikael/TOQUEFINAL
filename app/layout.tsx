import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Toque Final | Estética especializada em motos em Minas Novas",
  description: "Detalhamento, vitrificação e polimento técnico para motos em Minas Novas, MG. Fale com a Toque Final e descubra o cuidado indicado para a sua moto.",
  openGraph: {
    title: "Toque Final | Sua moto bem cuidada até onde quase ninguém olha",
    description: "Estética especializada em motos em Minas Novas, MG.",
    images: ["/og.png"],
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
