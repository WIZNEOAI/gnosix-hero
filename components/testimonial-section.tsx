"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"
import { useState } from "react"

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

export default function TestimonialSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Carlos Mendoza",
      position: "CEO, TechFlow Solutions",
      company: "Empresa de Software",
      content: "Gnosix transformó completamente nuestro proceso de ventas. En 3 meses aumentamos nuestros leads calificados en un 400% y redujimos el tiempo de gestión en un 70%. La IA realmente entiende a nuestros clientes.",
      rating: 5,
      results: "+400% leads calificados"
    },
    {
      name: "María González",
      position: "Directora de Marketing",
      company: "Inmobiliaria Premium",
      content: "El sistema de agendamiento automático es increíble. Ahora capturamos leads 24/7 y el 85% de las citas agendadas se convierten en ventas. Nuestro ROI fue del 600% en el primer semestre.",
      rating: 5,
      results: "ROI 600% en 6 meses"
    },
    {
      name: "Roberto Silva",
      position: "Fundador",
      company: "Consultora Estratégica",
      content: "La automatización omnicanal nos permitió escalar de 50 a 200 clientes sin aumentar el equipo. La IA maneja las consultas iniciales mejor que muchos humanos. Impresionante.",
      rating: 5,
      results: "4x crecimiento sin aumentar equipo"
    }
  ]

  return (
    <section id="testimonials" className="bg-gradient-to-br from-gnosix-dark to-gnosix-black py-20 px-6">
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
            Lo que dicen nuestros <span className="text-gnosix-gold">clientes</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Resultados reales de empresas que confiaron en nuestra tecnología
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="group relative bg-gnosix-card/50 backdrop-blur-sm border border-gnosix-gold/20 rounded-2xl p-8 hover:border-gnosix-gold/40 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
              whileHover={{ y: -5 }}
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 text-gnosix-gold/30 group-hover:text-gnosix-gold/50 transition-colors duration-300">
                <Quote className="w-8 h-8" />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gnosix-gold text-gnosix-gold" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-gray-200 leading-relaxed mb-6 text-sm lg:text-base">
                "{testimonial.content}"
              </blockquote>

              {/* Results badge */}
              <div className="inline-block bg-gnosix-gold/20 text-gnosix-gold px-3 py-1 rounded-full text-xs font-semibold mb-4">
                {testimonial.results}
              </div>

              {/* Author */}
              <div className="border-t border-gnosix-gold/20 pt-4">
                <div className="font-semibold text-white">{testimonial.name}</div>
                <div className="text-gnosix-gold text-sm">{testimonial.position}</div>
                <div className="text-gray-400 text-xs">{testimonial.company}</div>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-gnosix-gold/5 to-gnosix-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
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
            ¿Quieres ser el próximo caso de éxito?
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
            SOLICITAR DIAGNÓSTICO GRATUITO
          </button>
        </motion.div>
      </div>
    </section>
  )
}