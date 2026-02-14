import { lazy, Suspense } from "react"
import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import TargetCursor from "@/components/TargetCursor"

// Lazy load components below the fold
const Skills = lazy(() => import("@/components/skills"))
const Workflow = lazy(() => import("@/components/workflow"))
const Experience = lazy(() => import("@/components/experience"))
const Projects = lazy(() => import("@/components/projects"))
const Contact = lazy(() => import("@/components/contact"))
const Footer = lazy(() => import("@/components/footer"))
const BackToTop = lazy(() => import("@/components/back-to-top"))

// Loading fallback component
function LoadingSection() {
  return (
    <div className="flex items-center justify-center py-20">
      <div className="animate-pulse text-amber-400">Loading...</div>
    </div>
  )
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#1a1918]">
      <Header />
      <Hero />
      <About />
      <Suspense fallback={<LoadingSection />}>
        <Skills />
      </Suspense>
      <Suspense fallback={<LoadingSection />}>
        <Workflow />
      </Suspense>
      <Suspense fallback={<LoadingSection />}>
        <Experience />
      </Suspense>
      <Suspense fallback={<LoadingSection />}>
        <Projects />
      </Suspense>
      <Suspense fallback={<LoadingSection />}>
        <Contact />
      </Suspense>
      <Suspense fallback={<LoadingSection />}>
        <Footer />
      </Suspense>
      <Suspense fallback={null}>
        <BackToTop />
      </Suspense>
      <TargetCursor spinDuration={2} hideDefaultCursor={true} />
    </main>
  )
}
