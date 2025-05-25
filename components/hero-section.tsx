"use client"

import { motion } from "framer-motion"
import { ArrowRight, Sparkles, Zap, Target } from "lucide-react"
import { Button } from "@/components/ui/button"

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
}

const floatingAnimation = {
  y: [-10, 10, -10],
  transition: {
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut",
  },
}

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToServices = () => {
    const element = document.getElementById("services")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Fixed array of lengths to avoid hydration mismatch
  const lineLengths = [75, 85, 70, 90, 80, 65, 95, 72]

  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden flex items-center justify-center">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gnosix-gold/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gnosix-purple/10 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gnosix-gold/60 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.3, 1, 0.3],
            }}
            transition={
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 bg-gnosix-card/50 backdrop-blur-sm border border-gnosix-gold/30 rounded-full px-6 py-3 text-sm font-medium"
          >
            <Sparkles className="w-4 h-4 text-gnosix-gold" />
            <span className="text-gnosix-gold">Infraestructura de IA por Diseño</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight max-w-5xl mx-auto"
          >
            Sistemas inteligentes{" "}
            <span className="bg-gradient-to-r from-gnosix-gold to-gnosix-lightgold bg-clip-text text-transparent">
              adaptados
            </span>{" "}
            a tus operaciones
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Sin necesidad de experiencia técnica. Automatización inteligente que{" "}
            <span className="text-gnosix-gold font-semibold">escala contigo</span>.
          </motion.p>

          {/* Animated SVG Illustration */}
          <motion.div
            variants={fadeInUp}
            className="relative max-w-4xl mx-auto my-16"
            animate={floatingAnimation}
          >
            <svg
              viewBox="0 0 800 400"
              className="w-full h-auto"
              suppressHydrationWarning
            >
              {/* Background Circuit Pattern */}
              <defs>
                <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#F0B430" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#F6C667" stopOpacity="0.4" />
                </linearGradient>
                <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#8F50EC" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#A855F7" stopOpacity="0.4" />
                </linearGradient>
              </defs>

              {/* Animated Connection Lines */}
              {lineLengths.map((length, i) => (
                <motion.line
                  key={i}
                  x1={100 + i * 80}
                  y1={200}
                  x2={100 + i * 80 + length}
                  y2={200 + (i % 2 === 0 ? -50 : 50)}
                  stroke="url(#goldGradient)"
                  strokeWidth="2"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{
                    duration: 2,
                    delay: i * 0.2,
                    ease: "easeInOut",
                  }}
                />
              ))}

              {/* Central Hub */}
              <motion.circle
                cx="400"
                cy="200"
                r="40"
                fill="url(#goldGradient)"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
              />
              
              {/* Orbiting Elements */}
              {[0, 1, 2, 3].map((i) => (
                <motion.g key={i}>
                  <motion.circle
                    cx="400"
                    cy="200"
                    r="15"
                    fill="url(#purpleGradient)"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: [0, 1, 0],
                      rotate: 360,
                    }}
                    transition={{
                      duration: 4,
                      delay: i * 0.5,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    style={{
                      transformOrigin: "400px 200px",
                      transform: `rotate(${i * 90}deg) translateX(80px)`,
                    }}
                  />
                </motion.g>
              ))}

              {/* Data Flow Particles */}
              {[...Array(12)].map((_, i) => (
                <motion.circle
                  key={`particle-${i}`}
                  r="3"
                  fill="#F0B430"
                  initial={{ opacity: 0 }}
                  animate={{
                    cx: [100, 700],
                    cy: [200 + (i % 3 - 1) * 50, 200 + (i % 3 - 1) * 50],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 3,
                    delay: i * 0.3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </svg>
          </motion.div>

          {/* Feature Pills */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto"
          >
            {[
              { icon: <Zap className="w-4 h-4" />, text: "Automatización 24/7" },
              { icon: <Target className="w-4 h-4" />, text: "ROI Garantizado" },
              { icon: <Sparkles className="w-4 h-4" />, text: "IA Personalizada" },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-2 bg-gnosix-card/30 backdrop-blur-sm border border-gnosix-gold/20 rounded-full px-4 py-2 text-sm"
                whileHover={{ scale: 1.05, borderColor: "rgba(240, 180, 48, 0.5)" }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-gnosix-gold">{feature.icon}</span>
                <span className="text-gray-300">{feature.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
          >
            <Button
              onClick={scrollToContact}
              variant="cta"
              size="lg"
              className="group px-8 py-4 text-lg font-bold tracking-wider"
            >
              SOLICITAR DIAGNÓSTICO GRATUITO
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
            
            <button
              onClick={scrollToServices}
              className="text-gnosix-gold hover:text-gnosix-lightgold font-semibold text-lg tracking-wider transition-colors duration-200 group"
            >
              Ver servicios
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-200">→</span>
            </button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            variants={fadeInUp}
            className="pt-16 border-t border-gnosix-card/30 mt-16"
          >
            <p className="text-gray-400 text-sm mb-6">Confiado por empresas líderes</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {["TechFlow", "InnovateCorp", "ScaleUp", "GrowthLab"].map((company, index) => (
                <motion.div
                  key={index}
                  className="text-gray-500 font-semibold text-lg"
                  whileHover={{ opacity: 1, scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  {company}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}