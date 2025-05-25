"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

export default function FAQSection() {
  const faqs = [
    {
      question: "¿Cuánto tiempo toma implementar una solución?",
      answer: "La mayoría de nuestras soluciones se implementan en 2-4 semanas. Comenzamos con un diagnóstico gratuito para entender tus necesidades y luego desarrollamos una solución personalizada que se integra perfectamente con tus procesos existentes."
    },
    {
      question: "¿Necesito conocimientos técnicos para usar sus sistemas?",
      answer: "No. Nuestras soluciones están diseñadas para ser intuitivas y fáciles de usar. Proporcionamos capacitación completa y soporte continuo para asegurar que tu equipo pueda aprovechar al máximo la tecnología."
    },
    {
      question: "¿Cómo garantizan el ROI?",
      answer: "Establecemos KPIs claros desde el inicio y monitoreamos el rendimiento continuamente. Nuestros clientes típicamente ven un ROI de 300-500% en los primeros 6 meses a través de mayor eficiencia, más leads calificados y reducción de costos operativos."
    },
    {
      question: "¿Qué pasa si mi negocio crece? ¿La solución escala?",
      answer: "Absolutamente. Nuestras soluciones están diseñadas para escalar con tu negocio. Utilizamos arquitecturas en la nube que se adaptan automáticamente al volumen de trabajo, asegurando rendimiento óptimo sin importar el tamaño."
    },
    {
      question: "¿Ofrecen soporte después de la implementación?",
      answer: "Sí, proporcionamos soporte continuo, actualizaciones regulares y optimizaciones basadas en el rendimiento de tu sistema. Nuestro equipo está disponible para resolver cualquier duda y asegurar que sigas obteniendo los mejores resultados."
    }
  ]

  return (
    <section id="faq" className="bg-gnosix-dark py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Resolvemos las dudas más comunes sobre nuestros servicios de automatización con IA
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-gnosix-card/50 border border-gnosix-gold/20 rounded-lg px-6 py-2 hover:border-gnosix-gold/40 transition-colors duration-300"
              >
                <AccordionTrigger className="text-white hover:text-gnosix-gold text-left font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}