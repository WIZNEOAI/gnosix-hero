// Chat responses for the AI assistant
export const chatResponses = {
  greeting: [
    "¡Hola! Soy tu asistente inteligente. ¿En qué puedo ayudarte hoy?",
    "¡Bienvenido! Estoy aquí para ayudarte con cualquier pregunta sobre nuestros servicios.",
    "¡Hola! ¿Tienes alguna pregunta sobre automatización con IA?"
  ],
  
  services: [
    "Ofrecemos 4 servicios principales:\n\n🤖 **Agendamiento automático** - Sistemas que califican y agendan leads 24/7\n\n🎯 **Embudos con IA** - Secuencias inteligentes que se adaptan a cada prospecto\n\n📞 **Llamadas en frío con IA** - Agentes virtuales que hacen llamadas de prospección\n\n🚀 **Infraestructura omnicanal** - Automatización completa de ventas y operaciones\n\n¿Te interesa alguno en particular?",
    "Nuestros servicios están diseñados para automatizar y escalar tu negocio:\n\n• Agendamiento inteligente que nunca duerme\n• Embudos que se optimizan solos\n• Llamadas automatizadas con IA conversacional\n• Infraestructura completa de crecimiento\n\n¿Cuál es tu mayor desafío actual?"
  ],
  
  pricing: [
    "Nuestros precios varían según las necesidades específicas de tu negocio. Ofrecemos:\n\n💡 **Diagnóstico gratuito** - Evaluamos tu situación actual\n🎯 **Propuesta personalizada** - Solución adaptada a tu caso\n📈 **ROI garantizado** - Resultados medibles desde el primer mes\n\n¿Te gustaría agendar una consulta gratuita?",
    "Cada negocio es único, por eso nuestras soluciones son personalizadas. El primer paso es siempre un diagnóstico gratuito donde:\n\n✅ Analizamos tus procesos actuales\n✅ Identificamos oportunidades de automatización\n✅ Calculamos el ROI potencial\n�n¿Quieres que agendemos tu diagnóstico?"
  ],
  
  automation: [
    "La automatización con IA puede transformar tu negocio:\n\n🔄 **Procesos 24/7** - Nunca pierdas un lead\n📊 **Decisiones inteligentes** - IA que aprende de tus datos\n⚡ **Escalabilidad** - Crece sin aumentar costos operativos\n🎯 **Personalización** - Cada cliente recibe atención única\n\n¿Qué proceso te gustaría automatizar primero?",
    "Con nuestras soluciones de IA puedes:\n\n• Automatizar la calificación de leads\n• Personalizar comunicaciones en masa\n• Optimizar horarios y recursos\n• Predecir comportamientos de clientes\n• Escalar sin perder calidad\n\n¿Cuál es tu mayor cuello de botella operativo?"
  ],
  
  results: [
    "Nuestros clientes típicamente ven:\n\n📈 **300% más leads calificados** en los primeros 30 días\n⏰ **80% reducción** en tiempo de gestión manual\n💰 **ROI de 400%** en los primeros 6 meses\n🎯 **95% precisión** en calificación automática\n\n¿Te gustaría ver casos de éxito específicos de tu industria?",
    "Los resultados que obtienes con Gnosix:\n\n✅ Más leads, mejor calificados\n✅ Procesos que funcionan mientras duermes\n✅ Decisiones basadas en datos reales\n✅ Crecimiento predecible y escalable\n\n¿Quieres que calculemos tu ROI potencial?"
  ],
  
  fallback: [
    "Interesante pregunta. Para darte la mejor respuesta, ¿podrías ser más específico sobre lo que necesitas?",
    "Me gustaría ayudarte mejor. ¿Podrías contarme más detalles sobre tu situación?",
    "Esa es una buena pregunta. Para darte una respuesta precisa, necesito entender mejor tu contexto."
  ]
}

// Function to get a random response from a category
export const getRandomResponse = (category: keyof typeof chatResponses): string => {
  const responses = chatResponses[category]
  return responses[Math.floor(Math.random() * responses.length)]
}

// Function to determine response category based on user input
export const categorizeInput = (input: string): keyof typeof chatResponses => {
  const lowerInput = input.toLowerCase()
  
  if (lowerInput.includes('servicio') || lowerInput.includes('qué hacen') || lowerInput.includes('ofrecen')) {
    return 'services'
  }
  
  if (lowerInput.includes('precio') || lowerInput.includes('costo') || lowerInput.includes('cuánto')) {
    return 'pricing'
  }
  
  if (lowerInput.includes('automatiz') || lowerInput.includes('ia') || lowerInput.includes('inteligencia')) {
    return 'automation'
  }
  
  if (lowerInput.includes('resultado') || lowerInput.includes('roi') || lowerInput.includes('beneficio')) {
    return 'results'
  }
  
  return 'fallback'
}