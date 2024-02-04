import type { Metadata } from "next"
import { DM_Sans } from "next/font/google"
import "./globals.css"
import { AppContextProvider } from "./hook/AppContext"

const dmSans = DM_Sans({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Big lanches - Trailer do Edelio",
  description:
    "Descubra os sabores irresistíveis do Big Lanches - Trailer do Edélio. Faça seu pedido online com facilidade e aproveite uma experiência gastronômica única. Peça agora!",
  openGraph: {
    images: [
      "https://scontent-gru1-1.xx.fbcdn.net/v/t39.30808-6/305322855_465676388912502_1258770910836682795_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=783fdb&_nc_ohc=2HayzYsEQkEAX9yl03K&_nc_ht=scontent-gru1-1.xx&oh=00_AfBGCgvlBEzDnpenoneY3Hd8JtLHjfJZGiTR-Yj8C4_p0A&oe=65C48FC3",
    ],
    authors: ["Big Lanches - Trailer do Edelio"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <link rel="icon" href="/favicon.png" type="image/x-icon" />
      <body className={dmSans.className}>
        <AppContextProvider>{children}</AppContextProvider>
      </body>
    </html>
  )
}
