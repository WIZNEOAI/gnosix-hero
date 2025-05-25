"use client"

import { motion } from "framer-motion"
import { Database, Cloud, Cpu, Shield, Zap, Globe } from "lucide-react"

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

export default function TechStackSection() {
  const technologies = [
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "IA Avanzada",
      description: "Modelos de lenguaje y machine learning personalizados para tu industria",
      color: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/30"
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Infraestructura Cloud",
      description: "Escalabilidad automática con AWS, Google Cloud y Azure",
      color: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-500/30"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Integraciones",
      description: "Conectamos con CRMs, ERPs y cualquier sistema existente",
      color: "from-green-500/20 to-emerald-500/20",
      borderColor: "border-green-500/30"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Seguridad",
      description: "Encriptación end-to-end y cumplimiento de normativas internacionales",
      color: "from-red-500/20 to-orange-500/20",
      borderColor: "border-red-500/30"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Automatización",
      description: "Workflows inteligentes que se optimizan continuamente",
      color: "from-yellow-500/20 to-amber-500/20",
      borderColor: "border-yellow-500/30"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Omnicanal",
      description: "Unificamos WhatsApp, email, llamadas y redes sociales",
      color: "from-indigo-500/20 to-violet-500/20",
      borderColor: "border-indigo-500/30"
    }
  ]

  return (
    <section className="bg-gnosix-black py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Tecnología de <span className="text-gnosix-gold">Vanguardia</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Utilizamos las mejores herramientas y frameworks para construir soluciones robustas y escalables
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className={`group p-6 rounded-xl border ${tech.borderColor} bg-gradient-to-br ${tech.color} backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-lg`}
              whileHover={{ y: -5 }}
            >
              <div className="text-gnosix-gold mb-4 group-hover:scale-110 transition-transform duration-300">
                {tech.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{tech.title}</h3>
              <p className="text-gray-300 leading-relaxed">{tech.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}