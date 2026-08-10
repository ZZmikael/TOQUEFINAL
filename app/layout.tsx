import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vdetalhes | Estética especializada em motos em Turmalina",
  description: "Detalhamento, vitrificação e polimento técnico para motos em Turmalina, MG. Fale com a Vdetalhes e descubra o cuidado indicado para sua moto.",
  openGraph: {
    title: "Vdetalhes | Sua moto bem cuidada até onde quase ninguém olha",
    description: "Estética especializada em motos em Turmalina, MG.",
    images: ["/og.png"],
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
