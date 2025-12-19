import Nav from "../components/Nav";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import BeforeAfterSection from "../components/BeforeAfterSection";
import ServicesSection from "../components/ServicesSection";
import ProcessSection from "../components/ProcessSection";
import ClientsSection from "../components/ClientsSection";
import GallerySection from "../components/GallerySection";
import ReviewsSection from "../components/ReviewsSection";
import ContactSection from "../components/ContactSection";
 
export default function Home() {
  return (
    <div className="font-sans bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100 min-h-screen flex flex-col scroll-smooth">
      <Nav />
      {/* Hero: Main headline, subheadline, service area, CTA */}
      <section id="hero"><HeroSection /></section>

      {/* About/Legacy: Company history, trust, experience */}
      <section id="about"><AboutSection /></section>

      {/* Before/After: Interactive slider */}
      <section id="beforeafter"><BeforeAfterSection /></section>

      {/* Services: Main services with icons/images */}
      <section id="services"><ServicesSection /></section>

      {/* Process: Step-by-step (Consult, Choose, Install, Enjoy) */}
      <section id="process"><ProcessSection /></section>

      {/* Clients: Who we serve */}
      <section id="clients"><ClientsSection /></section>

      {/* Gallery: Project and team photos */}
      {/* <section id="gallery"><GallerySection /></section> */}

      {/* Reviews: Ratings and badges */}
      {/* <section id="reviews"><ReviewsSection /></section> */}

      {/* Contact: Phone, address, contact form, social links */}
      <section id="contact"><ContactSection /></section>

      <Footer />
    </div>
  );
}