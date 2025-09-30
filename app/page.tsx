import Header from "@/components/header"
import HeroBanner from "@/components/hero-banner"
import AboutSection from "@/components/about-section"
import AcademicsSection from "@/components/academics-section"
import AdmissionsSection from "@/components/admissions-section"
import FacultySection from "@/components/faculty-section"
import GallerySection from "@/components/gallery-section"
import NoticesSection from "@/components/notices-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroBanner />
        <AboutSection />
        <AcademicsSection />
        <AdmissionsSection />
        <FacultySection />
        <GallerySection />
        <NoticesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
