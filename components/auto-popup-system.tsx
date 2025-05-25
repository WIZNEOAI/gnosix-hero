"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, MessageCircle, Sparkles } from "lucide-react"
import { useChat } from "@/context/chat-context"

export default function AutoPopupSystem() {
  const [showPopup, setShowPopup] = useState(false)
  const [hasShownPopup, setHasShownPopup] = useState(false)
  const { openChat } = useChat()

  useEffect(() => {
    // Check if popup was already shown in this session
    const popupShown = sessionStorage.getItem("gnosix-popup-shown")
    if (popupShown) {
      setHasShownPopup(true)
      return
    }

    // Show popup after 30 seconds if user hasn't interacted
    const timer = setTimeout(() => {
      if (!hasShownPopup) {
        setShowPopup(true)
        setHasShownPopup(true)
        sessionStorage.setItem("gnosix-popup-shown", "true")
      }
    }, 30000) // 30 seconds

    // Cleanup timer
    return () => clearTimeout(timer)
  }, [hasShownPopup])

  // Auto-hide popup after 10 seconds
  useEffect(() => {
    if (showPopup) {
      const hideTimer = setTimeout(() => {
        setShowPopup(false)
      }, 10000) // 10 seconds

      return () => clearTimeout(hideTimer)
    }
  }, [showPopup])

  const handleOpenChat = () => {
    setShowPopup(false)
    openChat()
  }

  const handleClose = () => {
    setShowPopup(false)
  }

  return (
    <AnimatePresence>
      {showPopup && (
        <motion.div
          className="fixed bottom-24 right-6 z-40 max-w-sm"
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.8 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="bg-gradient-to-br from-gnosix-dark to-gnosix-black border border-gnosix-gold/30 rounded-2xl p-6 shadow-2xl backdrop-blur-sm relative overflow-hidden">
            {/* Background glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-gnosix-gold/5 to-gnosix-purple/5 rounded-2xl"></div>
            
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 text-gray-400 hover:text-white transition-colors duration-200 z-10"
              aria-label="Cerrar popup"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Content */}
            <div className="relative z-10">
              {/* Icon */}
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gnosix-gold/20 rounded-lg">
                  <Sparkles className="w-5 h-5 text-gnosix-gold" />
                </div>
                <div className="text-sm font-semibold text-gnosix-gold">Asistente IA</div>
              </div>

              {/* Message */}
              <h3 className="text-white font-bold text-lg mb-2 leading-tight">
                ¿Necesitas ayuda para automatizar tu negocio?
              </h3>
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                Nuestro asistente inteligente puede ayudarte a encontrar la solución perfecta para tu empresa.
              </p>

              {/* CTA Button */}
              <motion.button
                onClick={handleOpenChat}
                className="w-full bg-gradient-to-r from-gnosix-gold to-gnosix-lightgold hover:from-gnosix-lightgold hover:to-gnosix-gold text-black font-bold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-gnosix-gold/20"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <MessageCircle className="w-4 h-4" />
                Hablar con el asistente
              </motion.button>

              {/* Dismiss option */}
              <button
                onClick={handleClose}
                className="w-full text-gray-400 hover:text-gray-300 text-xs mt-2 transition-colors duration-200"
              >
                No, gracias
              </button>
            </div>

            {/* Animated border */}
            <div className="absolute inset-0 rounded-2xl border border-gnosix-gold/20 pointer-events-none">
              <motion.div
                className="absolute inset-0 rounded-2xl border border-gnosix-gold/40"
                animate={{
                  opacity: [0.4, 0.8, 0.4],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </div>

          {/* Floating particles effect */}
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-gnosix-gold/60 rounded-full animate-ping"></div>
          <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-gnosix-purple/60 rounded-full animate-pulse"></div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}