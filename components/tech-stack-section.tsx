"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useRef, useEffect } from "react"

const techLogos = [
  { name: "Supabase", src: "/logos/supabase.svg" },
  { name: "Vercel", src: "/logos/vercel.svg" },
  { name: "LangChain", src: "/logos/langchain.svg" },
  { name: "Make", src: "/logos/make.svg" },
  { name: "n8n", src: "/logos/n8n.svg" },
  { name: "Perplexity", src: "/logos/perplexity.svg" },
  { name: "Google Gemini", src: "/logos/googlegemini.svg" },
  { name: "Hugging Face", src: "/logos/huggingface.svg" },
  { name: "Anthropic", src: "/logos/anthropic.svg" },
  { name: "React", src: "/logos/react.svg" },
  { name: "GitHub", src: "/logos/github.svg" },
]

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.1,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
}

export default function TechStackSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationId: number
    let scrollPosition = 0
    const scrollSpeed = 0.2

    const animate = () => {
      scrollPosition += scrollSpeed
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0
      }
      scrollContainer.scrollLeft = scrollPosition
      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [])

  return (
    <section className="w-full py-16 px-6 bg-gradient-to-br from-black via-neutral-900 to-black text-white text-center overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-12">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-4">
          <motion.h2 custom={0} variants={fadeInUp} className="text-3xl md:text-4xl font-bold">
            Tecnología que potencia cada solución
          </motion.h2>
          <motion.p custom={0.2} variants={fadeInUp} className="text-lg text-neutral-400 max-w-3xl mx-auto">
            Trabajamos con los frameworks más avanzados del mundo para construir tu infraestructura personalizada.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.4}
          variants={fadeInUp}
          className="relative"
        >
          {/* Fade edges */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

          {/* Scrolling container */}
          <div
            ref={scrollRef}
            className="flex gap-10 overflow-x-hidden scrollbar-hide"
            style={{ scrollBehavior: "auto" }}
          >
            {/* First set of logos */}
            <div className="flex gap-10 flex-shrink-0">
              {techLogos.map((logo, index) => (
                <div
                  key={`first-${index}`}
                  className="w-24 h-24 bg-neutral-800 rounded-xl flex items-center justify-center border border-neutral-700 flex-shrink-0"
                >
                  <Image
                    src={logo.src || "/placeholder.svg"}
                    alt={logo.name}
                    width={48}
                    height={48}
                    className="w-12 h-12 object-contain filter brightness-90"
                  />
                </div>
              ))}
            </div>

            {/* Duplicate set for seamless loop */}
            <div className="flex gap-10 flex-shrink-0">
              {techLogos.map((logo, index) => (
                <div
                  key={`second-${index}`}
                  className="w-24 h-24 bg-neutral-800 rounded-xl flex items-center justify-center border border-neutral-700 flex-shrink-0"
                >
                  <Image
                    src={logo.src || "/placeholder.svg"}
                    alt={logo.name}
                    width={48}
                    height={48}
                    className="w-12 h-12 object-contain filter brightness-90"
                  />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
