import './globals.css'

import InstallBanner from "@/components/InstallBanner"
import type { Metadata } from "next"
import type React from "react"

export const metadata: Metadata = {
  title: {
    default: "My Awesome PWA",
    template: "%s | My Awesome PWA",
  },
  description: "A comprehensive PWA built with Next.js",
  applicationName: "My Awesome PWA",
  authors: [{ name: "Your Name" }],
  generator: "Next.js",
  keywords: ["Next.js", "React", "JavaScript", "PWA"],
  referrer: "origin-when-cross-origin",
  themeColor: "#000000",
  colorScheme: "dark",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/shortcut-icon.png",
    apple: "/apple-icon.png",
    other: [
      {
        rel: "apple-touch-icon-precomposed",
        url: "/apple-touch-icon-precomposed.png",
      },
    ],
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    siteName: "My Awesome PWA",
    title: "My Awesome PWA",
    description: "A comprehensive PWA built with Next.js",
    url: "https://myawesomepwa.com",
    images: [
      {
        url: "https://myawesomepwa.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "My Awesome PWA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@yourtwitterhandle",
    creator: "@yourtwitterhandle",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "My Awesome PWA",
  },
  formatDetection: {
    telephone: false,
  },
  other: {
    "mobile-web-app-capable": "yes",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <InstallBanner />
      <body>{children}</body>
    </html>
  )
}



