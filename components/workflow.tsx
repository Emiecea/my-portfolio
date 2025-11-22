"use client"

import { useRef } from "react"
import { Search, Code, Rocket, GitBranch, Lightbulb } from "lucide-react"
import { useScrollAnimation, useStaggerAnimation, useParallax } from "@/lib/gsap-utils"

export default function Workflow() {
  const headerRef = useScrollAnimation({ triggerStart: "top 80%" })
  const stepsRef = useStaggerAnimation(0.3, { triggerStart: "top 70%" })
  const blob1Ref = useParallax(0.15)

  const workflowSteps = [
    {
      icon: <Search size={32} className=" text-amber-900" />,
      title: "Understand",
      description: "Analyzing requirements, understanding the user's problem, and planning the best technical approach.",
      color: "bg-amber-400",
    },
    {
      icon: <Lightbulb size={32} className="text-white" />,
      title: "Ideation",
      description: "Brainstorming creative concepts, finding inspiration, and crafting unique design solutions.",
      color: "bg-orange-500",
    },
    {
      icon: <Code size={32} className="text-slate-900" />,
      title: "Code",
      description: "Writing clean, efficient, and maintainable code using modern frameworks like Next.js and React.",
      color: "bg-slate-200",
    },
    {
      icon: <Rocket size={32} className="text-white" />,
      title: "Refine",
      description: "Testing, optimizing performance, fixing bugs, and polishing UI/UX before final deployment.",
      color: "bg-gradient-to-r from-amber-500 to-amber-600",
    },
  ]

  return (
    <section id="workflow" className="py-12 sm:py-20 bg-[#1a1918] relative overflow-hidden">
      <div  className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl bg-amber-500/5 blur-3xl rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef as React.RefObject<HTMLDivElement>} className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 sm:space-x-3 mb-4">
            <GitBranch className="text-amber-400 w-7 h-7 sm:w-8 sm:h-8" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">My Workflow</h2>
          </div>
          <div className="w-20 h-1 bg-linear-to-r from-amber-400 to-amber-600 mx-auto rounded-full" />
          <p className="text-gray-400 mt-4 max-w-xl mx-auto text-sm sm:text-base">
            How I turn complex problems into simple, elegant solutions.
          </p>
        </div>

        {/* Steps */}
        <div ref={stepsRef as React.RefObject<HTMLDivElement>} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-white/10 -z-10" />

          {workflowSteps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center text-center group">
              {/* Step Number Badge */}
              <div className="absolute -top-3 -right-3 w-8 h-8 bg-[#252423] border border-white/10 rounded-full flex items-center justify-center text-gray-400 text-sm font-bold z-20">
                {index + 1}
              </div>

              {/* Icon Circle */}
              <div className={`w-24 h-24 ${step.color} cursor-target rounded-2xl rotate-3 group-hover:rotate-6 transition-transform duration-300 flex items-center justify-center shadow-lg mb-6 z-10`}>
                <div className=" -rotate-3 group-hover:-rotate-6 transition-transform duration-300">
                  {step.icon}
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed px-4">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
