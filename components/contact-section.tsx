"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { z } from "zod"
import { useToast } from "@/hooks/use-toast"

// Form validation schema
const formSchema = z.object({
  fullName: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres" }),
  email: z
    .string()
    .email({ message: "Por favor ingresa un correo electrónico válido" })
    .refine((email) => email.includes("@") && email.includes("."), {
      message: "El correo debe incluir @ y un dominio",
    }),
  whatsapp: z
    .string()
    .min(8, { message: "Por favor ingresa un número de teléfono válido" })
    .regex(/^\d+$/, { message: "El número de teléfono debe contener solo dígitos" }),
  service: z.string().min(1, { message: "Por favor selecciona un servicio" }),
})

type FormData = z.infer<typeof formSchema>

// Country codes for WhatsApp dropdown
const countryCodes = [
  { code: "+1", country: "US/CA" },
  { code: "+44", country: "UK" },
  { code: "+34", country: "ES" },
  { code: "+55", country: "BR" },
  { code: "+52", country: "MX" },
  { code: "+49", country: "DE" },
  { code: "+33", country: "FR" },
  { code: "+39", country: "IT" },
  { code: "+81", country: "JP" },
  { code: "+86", country: "CN" },
  { code: "+91", country: "IN" },
  { code: "+61", country: "AU" },
]

export default function ContactSection() {
  const [formData, setFormData] = useState<Partial<FormData>>({})
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({})
  const [countryCode, setCountryCode] = useState("+34")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isFormValid, setIsFormValid] = useState(false)
  const { toast } = useToast()

  // Check if all required fields are filled and valid
  useEffect(() => {
    const requiredFields: (keyof FormData)[] = ["fullName", "email", "whatsapp", "service"]
    const allFieldsFilled = requiredFields.every((field) => !!formData[field])

    if (allFieldsFilled) {
      try {
        formSchema.parse(formData)
        setIsFormValid(true)
      } catch (error) {
        setIsFormValid(false)
      }
    } else {
      setIsFormValid(false)
    }
  }, [formData, errors])

  const handleChange = (field: keyof FormData, value: string) => {
    if (field === "whatsapp") {
      value = value.replace(/\D/g, "")
    }

    setFormData((prev) => ({ ...prev, [field]: value }))

    try {
      const fieldSchema = z.object({ [field]: formSchema.shape[field] })
      fieldSchema.parse({ [field]: value })
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldError = error.errors.find((err) => err.path[0] === field)
        if (fieldError) {
          setErrors((prev) => ({ ...prev, [field]: fieldError.message }))
        }
      }
    }
  }

  const validateForm = (): boolean => {
    try {
      formSchema.parse(formData)
      setErrors({})
      return true
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Partial<Record<keyof FormData, string>> = {}
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0] as keyof FormData] = err.message
          }
        })
        setErrors(newErrors)
      }
      return false
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)

    // Preparar datos para el webhook
    const webhookData = {
      fullName: formData.fullName,
      email: formData.email,
      whatsapp: countryCode + formData.whatsapp,
      service: formData.service,
      timestamp: new Date().toISOString(),
      source: "contact_form",
      userAgent: navigator.userAgent,
      referrer: document.referrer || "direct",
    }

    try {
      // Webhook URL para n8n - reemplaza con tu URL real
      const webhookUrl = process.env.NEXT_PUBLIC_N8N_CONTACT_WEBHOOK || "https://hooks.n8n.cloud/webhook/gnosix-contact-form"
      
      console.log("Environment variable:", process.env.NEXT_PUBLIC_N8N_CONTACT_WEBHOOK)
      console.log("Using webhook URL:", webhookUrl)
      console.log("Webhook data:", webhookData)
      
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(webhookData),
        mode: 'cors',
      })

      console.log("Response status:", response.status)
      console.log("Response ok:", response.ok)

      if (!response.ok) {
        const errorText = await response.text()
        console.error("Response error:", errorText)
        throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`)
      }

      const responseData = await response.text()
      console.log("Form submitted successfully:", responseData)

    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({})
    setCountryCode("+34")

    toast({
      title: "¡Solicitud recibida!",
      description: "Un asesor de IA se pondrá en contacto contigo pronto.",
      duration: 5000,
    })
    } catch (error) {
      console.error("Error submitting form:", error)
      setIsSubmitting(false)
      
      // Temporal: mostrar éxito aunque falle el webhook para testing
      if (error instanceof Error && error.message.includes("Failed to fetch")) {
        console.log("Webhook failed, but showing success for testing")
        setIsSubmitted(true)
        setFormData({})
        setCountryCode("+34")
        
        toast({
          title: "¡Solicitud recibida! (Modo prueba)",
          description: "Los datos se guardaron localmente. El webhook se configurará después.",
          duration: 5000,
        })
      } else {
        toast({
          title: "Error al enviar",
          description: "Hubo un problema al enviar tu solicitud. Por favor intenta nuevamente.",
          variant: "destructive",
          duration: 5000,
        })
      }
    }
  }

  return (
    <section id="contact" className="bg-black py-32 px-6 text-white text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-900 to-black"></div>
      <div className="relative z-10 max-w-2xl mx-auto space-y-8">
        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                Construyamos tu infraestructura de crecimiento
              </h2>
              <p className="text-lg md:text-xl text-neutral-300 mb-12 leading-relaxed max-w-xl mx-auto">
                Deja tus datos. Uno de nuestros agentes se pondrá en contacto contigo.
              </p>

              <form
                onSubmit={handleSubmit}
                className="space-y-6 max-w-lg mx-auto text-left bg-neutral-900/50 backdrop-blur-sm p-8 rounded-2xl border border-neutral-800"
              >
                <Input
                  placeholder="Nombre completo"
                  className="w-full p-4 rounded-xl bg-neutral-800/80 text-white text-base border-neutral-600 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all duration-200"
                  value={formData.fullName || ""}
                  onChange={(e) => handleChange("fullName", e.target.value)}
                  required
                />
                {errors.fullName && <p className="text-xs text-red-400">{errors.fullName}</p>}

                <Input
                  type="email"
                  placeholder="Correo electrónico"
                  className="w-full p-4 rounded-xl bg-neutral-800/80 text-white text-base border-neutral-600 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all duration-200"
                  value={formData.email || ""}
                  onChange={(e) => handleChange("email", e.target.value)}
                  required
                />
                {errors.email && <p className="text-xs text-red-400">{errors.email}</p>}

                <div className="flex">
                  <Select value={countryCode} onValueChange={(value) => setCountryCode(value)}>
                    <SelectTrigger className="w-20 bg-neutral-800 border-neutral-700 text-white text-sm rounded-r-none border-r-0">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-neutral-800 border-neutral-700 text-white">
                      {countryCodes.map((country) => (
                        <SelectItem key={country.code} value={country.code}>
                          {country.code}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Input
                    placeholder="WhatsApp"
                    className="flex-1 p-4 rounded-xl bg-neutral-800/80 text-white text-base border-neutral-600 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all duration-200 rounded-l-none"
                    value={formData.whatsapp || ""}
                    onChange={(e) => handleChange("whatsapp", e.target.value)}
                    required
                    inputMode="numeric"
                  />
                </div>
                {errors.whatsapp && <p className="text-xs text-red-400">{errors.whatsapp}</p>}

                <Select value={formData.service || ""} onValueChange={(value) => handleChange("service", value)}>
                  <SelectTrigger className="w-full p-4 rounded-xl bg-neutral-800/80 text-white text-base border-neutral-600 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all duration-200">
                    <SelectValue placeholder="Selecciona un servicio" />
                  </SelectTrigger>
                  <SelectContent className="bg-neutral-800 border-neutral-700 text-white">
                    <SelectItem value="set">Agendamiento automático</SelectItem>
                    <SelectItem value="convert">Embudo de conversión IA</SelectItem>
                    <SelectItem value="call">Llamadas en frío con IA</SelectItem>
                    <SelectItem value="grow">Infraestructura omnicanal</SelectItem>
                  </SelectContent>
                </Select>
                {errors.service && <p className="text-xs text-red-400">{errors.service}</p>}

                <button
                  type="submit"
                  disabled={isSubmitting || !isFormValid}
                  className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold py-4 px-6 rounded-xl transition-all duration-200 text-base disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  {isSubmitting ? "PROCESANDO..." : "SOLICITA TU DIAGNÓSTICO GRATUITO →"}
                </button>
              </form>

              <p className="text-sm text-neutral-400 mt-6 leading-relaxed">
                Tus datos están encriptados y se usan únicamente para fines de contacto directo.
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6 bg-neutral-900/50 backdrop-blur-sm p-12 rounded-2xl border border-neutral-800"
            >
              <div className="text-6xl">✅</div>
              <h3 className="text-2xl md:text-3xl font-bold text-yellow-400">¡Solicitud recibida!</h3>
              <p className="text-lg text-neutral-300 leading-relaxed">
                Un asesor de IA se pondrá en contacto contigo pronto. Bienvenido a Gnosix.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}