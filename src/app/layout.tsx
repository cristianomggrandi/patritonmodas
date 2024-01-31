import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "./components/header"
import { CartContextProvider } from "./contexts/CartContext"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "Patriton Modas",
    description: "Generated by create next app",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" className="h-screen">
            <CartContextProvider>
                <body className={`${inter.className} min-h-screen flex flex-col`}>
                    <Header />
                    {children}
                </body>
            </CartContextProvider>
        </html>
    )
}
