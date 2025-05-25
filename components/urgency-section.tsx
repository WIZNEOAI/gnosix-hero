"use client"

import { motion } from "framer-motion"

export default function UrgencySection() {
  return (
    <section className="bg-gnosix-purple/10 py-12 px-6">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-gnosix-gold font-semibold text-lg">
          ⚡ Mientras lees esto, tus competidores ya están automatizando
        </p>
      </motion.div>
    </section>
  )
}