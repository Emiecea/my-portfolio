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
  title: "Gusti Gibran - UI/UX Designer & Front-end Developer",
  description:
    "Portfolio of Gusti Gibran, a UI/UX Designer and Front-end Developer specializing in modern web applications and game design. Explore my projects and skills.",
  keywords: ["UI/UX Designer", "Front-end Developer", "React", "Next.js", "Web Design", "Game Design", "TypeScript", "Tailwind CSS", "Portfolio"],
  authors: [{ name: "Gusti Gibran" }],
  creator: "Gusti Gibran",
  publisher: "Gusti Gibran",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://gutsi.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gutsi.vercel.app",
    title: "Gusti Gibran - UI/UX Designer & Front-end Developer",
    description:
      "Portfolio of Gusti Gibran, a UI/UX Designer and Front-end Developer specializing in modern web applications and game design.",
    siteName: "Gusti Gibran Portfolio",
    images: [
      {
        url: '/saya-versi-ai.png',
        width: 1200,
        height: 630,
        alt: 'Gusti Gibran Portfolio',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gusti Gibran - UI/UX Designer & Front-end Developer",
    description: "Explore my portfolio of UI/UX design and front-end development projects.",
    images: ['/saya-versi-ai.png'],
    creator: '@gustigibran',
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: '/favicon.svg',
  },
  manifest: '/manifest.json',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Gusti Gibran",
              url: "https://gutsi.vercel.app",
              jobTitle: "UI/UX Designer & Front-end Developer",
              image: "/saya-versi-ai.png",
              sameAs: ["https://github.com/BranProHengker", "https://www.linkedin.com/in/gusti-gibran"],
              description:
                "UI/UX Designer and Front-end Developer specializing in modern web applications and game design",
              knowsAbout: [
                "UI/UX Design",
                "Front-end Development",
                "React",
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
                "Game Design",
                "Web Development"
              ],
              hasCredential: {
                "@type": "EducationalOccupationalCredential",
                credentialCategory: "degree",
                educationalLevel: "Student",
              },
              worksFor: {
                "@type": "Organization",
                name: "Freelance"
              }
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              url: "https://gutsi.vercel.app",
              name: "Gusti Gibran Portfolio",
              description: "Portfolio of Gusti Gibran - UI/UX Designer & Front-end Developer",
              author: {
                "@type": "Person",
                name: "Gusti Gibran"
              },
              potentialAction: {
                "@type": "SearchAction",
                target: "https://gutsi.vercel.app/#projects",
                "query-input": "required name=search_term_string"
              }
            }),
          }}
        />
      </head>
      <body className={`${leagueSpartan.variable} font-sans antialiased`}>
        <NoiseOverlay />
        <VibePlayer />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
