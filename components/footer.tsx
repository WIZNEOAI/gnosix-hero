"use client"

import Link from "next/link"
import { Instagram, Linkedin, Facebook } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-gradient-to-br from-black via-neutral-900 to-black text-white px-6 py-16 border-t border-neutral-800">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-sm">
        {/* Brand + About */}
        <div className="space-y-4">
          <div className="mb-4">
            <Image
              src="/logo-gnosix.png"
              alt="GNOSIX"
              width={700}
              height={210}
              className="h-28 w-auto md:h-32"
            />
          </div>
          <p className="text-neutral-400">
            Infraestructura inteligente que transforma negocios a través de sistemas de automatización y escalamiento
            con IA personalizada.
          </p>
        </div>

        {/* Enlaces rápidos */}
        <div>
          <h3 className="font-semibold mb-3 text-white">Enlaces Rápidos</h3>
          <ul className="space-y-2 text-neutral-400">
            <li>
              <button onClick={() => scrollToSection("services")} className="hover:text-yellow-400 transition-colors">
                Servicios
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("about")} className="hover:text-yellow-400 transition-colors">
                Acerca de
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="hover:text-yellow-400 transition-colors"
              >
                Testimonios
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("faq")} className="hover:text-yellow-400 transition-colors">
                Preguntas Frecuentes
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("contact")} className="hover:text-yellow-400 transition-colors">
                Contacto
              </button>
            </li>
          </ul>
        </div>

        {/* Soluciones */}
        <div>
          <h3 className="font-semibold mb-3 text-white">Soluciones</h3>
          <ul className="space-y-2 text-neutral-400">
            <li>Agendamiento automático</li>
            <li>Embudos con IA</li>
            <li>Llamadas en frío con IA</li>
            <li>Automatización Omnicanal</li>
          </ul>
        </div>

        {/* Redes Sociales */}
        <div>
          <h3 className="font-semibold mb-3 text-white">Síguenos</h3>
          <div className="flex space-x-4">
            <Link
              href="https://instagram.com/gnosix"
              target="_blank"
              className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-yellow-400/20 transition-colors hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 text-neutral-400 hover:text-yellow-400" />
            </Link>
            <Link
              href="https://tiktok.com/@gnosix"
              target="_blank"
              className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-yellow-400/20 transition-colors hover:scale-110"
              aria-label="TikTok"
            >
              <svg
                className="w-5 h-5 text-neutral-400 hover:text-yellow-400"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z"
                  fill="currentColor"
                />
              </svg>
            </Link>
            <Link
              href="https://linkedin.com/company/gnosix"
              target="_blank"
              className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-yellow-400/20 transition-colors hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-neutral-400 hover:text-yellow-400" />
            </Link>
            <Link
              href="https://facebook.com/gnosixai"
              target="_blank"
              className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-yellow-400/20 transition-colors hover:scale-110"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5 text-neutral-400 hover:text-yellow-400" />
            </Link>
          </div>
        </div>
      </div>

      {/* Legal */}
      <div className="mt-10 border-t border-neutral-800 pt-6 text-xs text-center text-neutral-500">
        © 2025 Gnosix — Infraestructura IA y Automatización Inteligente
      </div>
    </footer>
  )
}
