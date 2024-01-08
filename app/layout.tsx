import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { AppContextProvider } from "./hook/AppContext"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Big lanches - Trailer do Edelio",
  description:
    "Descubra os sabores irresistíveis do Big Lanches - Trailer do Edélio. Faça seu pedido online com facilidade e aproveite uma experiência gastronômica única. Peça agora!",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <AppContextProvider>{children}</AppContextProvider>
      </body>
    </html>
  )
}
