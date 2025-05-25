"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Sparkles, Zap, Shield, Database, Cpu, Globe } from "lucide-react"

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const listItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  },
}

export default function SaaSSection() {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)

  const features = [
    {
      icon: <Cpu className="w-5 h-5" />,
      text: "Plataformas privadas con IA integrada adaptada a tus flujos de trabajo",
      color: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/30"
    },
    {
      icon: <Sparkles className="w-5 h-5" />,
      text: "Dashboards predictivos para mejores decisiones",
      color: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-500/30"
    },
    {
      icon: <Globe className="w-5 h-5" />,
      text: "Aplicaciones web o móviles internas y para clientes",
      color: "from-green-500/20 to-emerald-500/20",
      borderColor: "border-green-500/30"
    },
    {
      icon: <Database className="w-5 h-5" />,
      text: "CRMs personalizados entrenados con tus procesos y lenguaje",
      color: "from-amber-500/20 to-yellow-500/20",
      borderColor: "border-amber-500/30"
    },
    {
      icon: <Shield className="w-5 h-5" />,
      text: "Propiedad total de datos — cero dependencia de proveedores",
      color: "from-red-500/20 to-orange-500/20",
      borderColor: "border-red-500/30"
    },
    {
      icon: <Zap className="w-5 h-5" />,
      text: "Agentes privados y seguros que trabajan solo para ti",
      color: "from-indigo-500/20 to-violet-500/20",
      borderColor: "border-indigo-500/30"
    }
  ]

  return (
    <section id="saas" className="bg-black text-white py-20 px-4 md:px-12 relative overflow-hidden">
      {/* Efectos de fondo sutiles */}
      <div className="absolute inset-0 bg-grid-pattern opacity-3"></div>
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-yellow-400/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-purple-500/5 rounded-full filter blur-3xl"></div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Header mejorado */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mb-12"
        >
          <motion.h2
            className="text-3xl md:text-5xl font-bold leading-tight mb-4"
            variants={fadeInUp}
            transition={{ duration: 0.8 }}
          >
            ¿Listo para tu propio{" "}
            <span className="text-yellow-400">ecosistema de IA</span>?
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            variants={fadeInUp}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Construimos infraestructura avanzada, aplicaciones personalizadas y plataformas que escalan con tu negocio —{" "}
            <span className="text-yellow-300 font-semibold">sin dependencias de terceros</span>.
          </motion.p>
        </motion.div>

        {/* Grid de Features - Cards restauradas */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={listItemVariants}
              className={`relative group p-6 lg:p-8 rounded-xl border ${feature.borderColor} bg-gradient-to-br ${feature.color} backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] cursor-pointer min-h-[140px] flex items-center`}
              onMouseEnter={() => setHoveredItem(index)}
              onMouseLeave={() => setHoveredItem(null)}
              whileHover={{ y: -5 }}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-yellow-400/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10 flex items-start gap-4 text-left w-full">
                <motion.div
                  className="flex-shrink-0 p-3 rounded-lg bg-gray-800/50 text-yellow-400"
                  animate={{
                    scale: hoveredItem === index ? 1.1 : 1,
                    rotate: hoveredItem === index ? 5 : 0,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {feature.icon}
                </motion.div>
                <p className="text-gray-200 text-lg leading-relaxed group-hover:text-white transition-colors duration-300 flex-1">
                  {feature.text}
                </p>
              </div>

              {/* Animated border */}
              <motion.div
                className="absolute inset-0 rounded-xl border-2 border-yellow-400/0 group-hover:border-yellow-400/30 transition-all duration-300"
                animate={{
                  opacity: hoveredItem === index ? 1 : 0,
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Simple */}
        <motion.div
          className="mt-12 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a
            href="https://saas.gnosix.io"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gnosix-gold hover:bg-gnosix-gold/90 text-black font-bold text-base tracking-wider px-8 py-4 rounded-lg shadow-lg hover:shadow-gnosix-gold/20 hover:brightness-105 transition-all duration-300 uppercase"
          >
            CONSTRUIR MI ECOSISTEMA
          </a>
        </motion.div>
      </div>
    </section>
  )
}