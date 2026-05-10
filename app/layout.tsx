import type React from "react"
import type { Metadata } from "next"
import { League_Spartan } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import NoiseOverlay from "@/components/noise-overlay"
import VibePlayer from "@/components/vibe-player"
import "./globals.css"

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-league-spartan",
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  title: {
    default: "Mica Leeonel | Front-end Engineer & Videografer",
    template: "%s | Mica Leeonel"
  },
  description:
    "Transforming complex problems into elegant web experiences. Explore the portfolio of Mica Leeonel, a Front-end Engineer with immersive UI/UX design.",
  keywords: [
    "Mica Leeonel", 
    "Who is Mica Leeonel",
    "Mica", 
    "Leeonel", 
    "Mica Leeonel Portfolio", 
    "Portofolio Mica Leeonel",  
    "Videografer Indonesia", 
    "Frontend Developer Indonesia",
    "Frontend Engineer", 
    "Web Developer Surakarta", 
    "React Ecosystem Developer",
    "Interactive Web Design",
    "Next.js Developer"
  ],
  authors: [{ name: "Mica Leeonel", url: "https://micaleeonel.my.id" }],
  creator: "Mica Leeonel",
  publisher: "Mica Leeonel",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://micaleeonel.my.id'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: "https://micaleeonel.my.id",
    title: "Mica Leeonel | Front-end Engineer & Videografer",
    description:
      "Transforming complex problems into elegant web experiences. Explore the portfolio of Mica Leeonel, a Front-end Engineer blending the React ecosystem with immersive design.",
    siteName: "Mica Leeonel Portfolio",
    images: [
      {
        url: '/saya-versi-ai.png',
        width: 1200,
        height: 630,
        alt: 'Mica Leeonel -  Web Developer',
      },
    ],
    firstName: "Mica",
    lastName: "Leeonel",
    username: "leeonel",
    gender: "male",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mica Leeonel | Front-end Engineer & Videografer",
    description: "Transforming complex problems into elegant web experiences. Explore the portfolio of Mica Leeonel.",
    images: ['/saya-versi-ai.png'],
    creator: '@micaleeonel',
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: '/favicon.svg',
  },
  manifest: '/manifest.json',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "VaPDMhXb57mnJ9x602y0gB3nvsWj1IFntRvYYI3vasc",
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#1a1918',
}

import { Toaster } from 'sonner'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "url": "https://micaleeonel.my.id",
                "name": "Mica Leeonel Portfolio",
                "description": "Portfolio of Mica Leeonel, a Front-end Engineer and Videografer.",
                "publisher": {
                  "@type": "Person",
                  "name": "Mica Leeonel"
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "ProfilePage",
                "dateCreated": "2024-01-01T00:00:00+07:00",
                "dateModified": new Date().toISOString(),
                "mainEntity": {
                  "@type": "Person",
                  name: "Mica Leeonel",
                  url: "https://micaleeonel.my.id",
                  jobTitle: "Front-end Developer & Videografer",
                  image: "https://micaleeonel.my.id/saya-versi-ai.png",
                  sameAs: [
                    "https://github.com/BranProHengker", 
                    "https://www.linkedin.com/in/mica-leeonel-819455389/",
                    "https://instagram.com/micaleeonel"
                  ],
                  description:
                    "Mica Leeonel is a passionate Front-end Developer and Videografer specializing in building immersive web applications with the React ecosystem and modern web technologies.",
                  knowsAbout: [
                    "Videografer",
                    "Front-end Development",
                    "React Ecosystem",
                    "Next.js",
                    "TypeScript",
                    "Tailwind CSS",
                    "Creative Coding",
                    "GSAP Animation",
                    "Web Developer"
                  ],
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Surakarta",
                    addressRegion: "Central Java",
                    addressCountry: "Indonesia"
                  }
                }
              }
            ]),
          }}
        />
      </head>
      <body className={`${leagueSpartan.variable} font-sans antialiased`}>
        <NoiseOverlay />
        <VibePlayer />
        {children}
        <Toaster position="top-center" richColors theme="dark" />
        <Analytics />
      </body>
    </html>
  )
}
