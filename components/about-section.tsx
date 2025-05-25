"use client"

import { motion } from "framer-motion"
import { Users, Award, Zap, Target, TrendingUp, Shield } from "lucide-react"

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

export default function AboutSection() {
  const stats = [
    {
      icon: <Users className="w-8 h-8" />,
      number: "500+",
      label: "Empresas transformadas",
      color: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/30"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      number: "400%",
      label: "ROI promedio",
      color: "from-green-500/20 to-emerald-500/20",
      borderColor: "border-green-500/30"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      number: "24/7",
      label: "Automatización activa",
      color: "from-yellow-500/20 to-amber-500/20",
      borderColor: "border-yellow-500/30"
    },
    {
      icon: <Award className="w-8 h-8" />,
      number: "99.9%",
      label: "Uptime garantizado",
      color: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-500/30"
    }
  ]

  const values = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Resultados Medibles",
      description: "Cada implementación viene con KPIs claros y métricas de éxito definidas desde el día uno."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Seguridad Primero",
      description: "Protocolos de seguridad enterprise y cumplimiento de normativas internacionales."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Innovación Continua",
      description: "Actualizaciones constantes y nuevas funcionalidades basadas en IA de vanguardia."
    }
  ]

  return (
    <section id="about" className="bg-gradient-to-br from-gnosix-black via-gnosix-dark to-gnosix-black py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Quiénes <span className="text-gnosix-gold">Somos</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Somos especialistas en infraestructura de IA que transformamos negocios a través de 
            automatización inteligente y sistemas escalables.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className={`group text-center p-6 rounded-xl border ${stat.borderColor} bg-gradient-to-br ${stat.color} backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-lg`}
              whileHover={{ y: -5 }}
            >
              <div className="text-gnosix-gold mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-2xl md:text-3xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-sm text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Story Section */}
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Nuestra <span className="text-gnosix-gold">Misión</span>
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Democratizar el acceso a la inteligencia artificial empresarial. Creemos que toda empresa, 
              sin importar su tamaño, debería poder aprovechar el poder de la IA para automatizar procesos, 
              mejorar la eficiencia y escalar sus operaciones.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Nuestro enfoque único combina tecnología de vanguardia con implementación práctica, 
              asegurando que nuestros clientes vean resultados tangibles desde el primer mes.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <div className="w-12 h-12 bg-gnosix-gold/20 rounded-full flex items-center justify-center">
                <Target className="w-6 h-6 text-gnosix-gold" />
              </div>
              <div>
                <div className="font-semibold text-white">Enfoque en Resultados</div>
                <div className="text-sm text-gray-400">ROI medible desde el día uno</div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="relative">
            <div className="bg-gnosix-card/50 backdrop-blur-sm border border-gnosix-gold/20 rounded-2xl p-8">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-gnosix-gold mb-2">5+ años</div>
                  <div className="text-gray-300">de experiencia en IA empresarial</div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-white">50+</div>
                    <div className="text-xs text-gray-400">Industrias</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">15+</div>
                    <div className="text-xs text-gray-400">Países</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Values */}
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="group text-center p-6 rounded-xl bg-gnosix-card/30 backdrop-blur-sm border border-gnosix-gold/20 hover:border-gnosix-gold/40 transition-all duration-300 hover:scale-[1.02]"
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 bg-gnosix-gold/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-gnosix-gold/30 transition-colors duration-300">
                <span className="text-gnosix-gold">{value.icon}</span>
              </div>
              <h4 className="text-xl font-bold text-white mb-3">{value.title}</h4>
              <p className="text-gray-300 leading-relaxed text-sm">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-gray-300 mb-6">
            ¿Listo para transformar tu negocio con IA?
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact')
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
              }
            }}
            className="bg-gnosix-gold hover:bg-gnosix-gold/90 text-black font-bold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            COMENZAR AHORA
          </button>
        </motion.div>
      </div>
    </section>
  )
}