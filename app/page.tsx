import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import TechStackSection from "@/components/tech-stack-section"
import UrgencySection from "@/components/urgency-section"
import AboutSection from "@/components/about-section"
import SaaSSection from "@/components/saas-section"
import TrustedBySection from "@/components/trusted-by-section"
import TestimonialSection from "@/components/testimonial-section"
import ContactSection from "@/components/contact-section"
import FAQSection from "@/components/faq-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <TechStackSection />
      <UrgencySection />
      <AboutSection />
      <SaaSSection />
      <TrustedBySection />
      <TestimonialSection />
      <ContactSection />
      <FAQSection />
      <Footer />
    </main>
  )
}