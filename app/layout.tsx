import type React from "react"
import type { Metadata } from "next"
import { Inter, Plus_Jakarta_Sans } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"
import ChatButton from "@/components/chat-button"
import AutoPopupSystem from "@/components/auto-popup-system"
import { ChatProvider } from "@/context/chat-context"

// Load Inter for body text
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

// Load Plus Jakarta Sans for headings
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
})

export const metadata: Metadata = {
  title: "Gnosix - Infraestructura de IA por Diseño",
  description: "Sistemas inteligentes adaptados a tus operaciones — sin necesidad de experiencia técnica.",
  generator: 'v0.dev',
  keywords: "IA, inteligencia artificial, automatización, n8n, webhooks, agentes IA, infraestructura",
  authors: [{ name: "Gnosix" }],
  icons: {
    icon: [
      { url: "/logo-isotipo.png", sizes: "48x48", type: "image/png" },
      { url: "/logo-isotipo.png", sizes: "32x32", type: "image/png" },
      { url: "/logo-isotipo.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/logo-isotipo.png",
    apple: "/logo-isotipo.png",
    other: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "48x48",
        url: "/logo-isotipo.png",
      },
    ],
  },
  openGraph: {
    title: "Gnosix - Infraestructura de IA por Diseño",
    description: "Sistemas inteligentes adaptados a tus operaciones — sin necesidad de experiencia técnica.",
    type: "website",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gnosix - Infraestructura de IA por Diseño",
    description: "Sistemas inteligentes adaptados a tus operaciones — sin necesidad de experiencia técnica.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${plusJakarta.variable} font-body bg-gnosix-black`}>
        <ChatProvider>
          {children}
          <Toaster />
          <ChatButton />
          <AutoPopupSystem />
        </ChatProvider>
      </body>
    </html>
  )
}