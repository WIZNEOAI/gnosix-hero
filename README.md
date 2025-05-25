# 🚀 Gnosix Hero - Landing Page Oficial

Landing page oficial de **Gnosix** - Infraestructura de IA por Diseño. Una experiencia web premium construida con las últimas tecnologías.

## ✨ Características

- 🎨 **Diseño Premium**: Interfaz moderna con animaciones fluidas
- 📱 **Responsive**: Optimizado para todos los dispositivos
- ⚡ **Performance**: Construido con Next.js 15 y React 19
- 🤖 **Chat IA**: Asistente inteligente integrado
- 📧 **Webhooks**: Integración con n8n para automatización
- 🎭 **Animaciones**: Efectos visuales con Framer Motion
- 🎯 **SEO Optimizado**: Meta tags y estructura semántica

## 🛠️ Stack Tecnológico

- **Framework**: Next.js 15
- **Frontend**: React 19, TypeScript
- **Styling**: Tailwind CSS
- **Animaciones**: Framer Motion
- **UI Components**: Radix UI
- **Validación**: Zod
- **Iconos**: Lucide React

## 🚀 Instalación y Desarrollo

### Prerrequisitos
- Node.js 18+ 
- npm o pnpm

### Configuración

1. **Clonar el repositorio**
```bash
git clone https://github.com/WIZNEOAI/gnosix-hero.git
cd gnosix-hero
```

2. **Instalar dependencias**
```bash
npm install --legacy-peer-deps
# o
pnpm install
```

3. **Configurar variables de entorno**
```bash
cp env.example .env.local
```

Edita `.env.local` con tus URLs de webhook:
```env
NEXT_PUBLIC_N8N_CONTACT_WEBHOOK=https://tu-webhook-contacto
NEXT_PUBLIC_N8N_CHAT_WEBHOOK=https://tu-webhook-chat
```

4. **Ejecutar en desarrollo**
```bash
npm run dev
# o
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📁 Estructura del Proyecto

```
gnosix-hero/
├── app/                    # App Router de Next.js
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Página principal
│   └── globals.css        # Estilos globales
├── components/            # Componentes React
│   ├── ui/               # Componentes base (Radix UI)
│   ├── navigation.tsx    # Barra de navegación
│   ├── hero-section.tsx  # Sección hero
│   ├── services-section.tsx # Servicios
│   ├── saas-section.tsx  # Sección SaaS
│   ├── contact-section.tsx # Formulario contacto
│   ├── footer.tsx        # Footer
│   └── chat-button.tsx   # Chat IA
├── context/              # Contextos React
├── hooks/                # Custom hooks
├── lib/                  # Utilidades
├── public/               # Assets estáticos
│   ├── logo-gnosix.png   # Logo principal
│   └── logo-isotipo.png  # Favicon
└── styles/               # Estilos adicionales
```

## 🎨 Componentes Principales

### 🏠 Hero Section
- Animación SVG personalizada
- Call-to-action principal
- Efectos de partículas

### 🛠️ Services Section
- Grid de servicios
- Modales informativos
- Animaciones staggered

### 🤖 SaaS Section
- Cards interactivas
- CTA para saas.gnosix.io
- Efectos hover avanzados

### 📞 Contact Section
- Formulario validado con Zod
- Integración webhook n8n
- Manejo de errores

### 💬 Chat Button
- Asistente IA simulado
- Formulario de captura
- Validación de leads

## 🔧 Configuración de Webhooks

El proyecto está configurado para integrarse con n8n:

### Webhook de Contacto
- **Variable**: `NEXT_PUBLIC_N8N_CONTACT_WEBHOOK`
- **Uso**: Formulario principal de contacto
- **Datos enviados**: nombre, email, whatsapp, servicio

### Webhook de Chat
- **Variable**: `NEXT_PUBLIC_N8N_CHAT_WEBHOOK`
- **Uso**: Chat del asistente IA
- **Datos enviados**: datos completos + calificación de lead

## 🎯 Funcionalidades

### ✅ Implementado
- [x] Diseño responsive completo
- [x] Navegación suave entre secciones
- [x] Formularios con validación
- [x] Chat interactivo
- [x] Animaciones premium
- [x] SEO optimizado
- [x] Webhooks configurados

### 🔄 En Desarrollo
- [ ] Integración real con IA
- [ ] Analytics avanzados
- [ ] A/B Testing
- [ ] PWA capabilities

## 🚀 Deployment

### Vercel (Recomendado)
```bash
npm run build
vercel --prod
```

### Netlify
```bash
npm run build
# Subir carpeta .next/
```

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --legacy-peer-deps
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 🎨 Personalización

### Colores (Tailwind)
```js
// tailwind.config.ts
colors: {
  'gnosix-gold': '#F0B430',
  'gnosix-purple': '#8F50EC',
  'gnosix-black': '#0C0C0C',
  'gnosix-dark': '#1A1A1A',
  'gnosix-card': '#2A2A2A'
}
```

### Fuentes
- **Headings**: Plus Jakarta Sans
- **Body**: Inter

## 📊 Performance

- **Lighthouse Score**: 95+
- **First Contentful Paint**: <1.5s
- **Largest Contentful Paint**: <2.5s
- **Cumulative Layout Shift**: <0.1

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto es propiedad de **Gnosix**. Todos los derechos reservados.

## 📞 Contacto

- **Website**: [gnosix.io](https://gnosix.io)
- **SaaS Platform**: [saas.gnosix.io](https://saas.gnosix.io)
- **Email**: contacto@gnosix.io

---

**Construido con ❤️ por el equipo de Gnosix**