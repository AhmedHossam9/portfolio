import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';
import SectionWrapper from '@/components/SectionWrapper';
import { PageTransitionProvider } from '@/contexts/PageTransitionContext';

export default function Home() {
  return (
    <PageTransitionProvider>
      <main>
        <PageTransition />
        <Navbar />
        <SectionWrapper sectionId="home">
          <Hero />
        </SectionWrapper>
        <SectionWrapper sectionId="about">
          <About />
        </SectionWrapper>
        <SectionWrapper sectionId="experience">
          <Experience />
        </SectionWrapper>
        <SectionWrapper sectionId="projects">
          <Projects />
        </SectionWrapper>
        <SectionWrapper sectionId="skills">
          <Skills />
        </SectionWrapper>
        <SectionWrapper sectionId="contact">
          <Contact />
        </SectionWrapper>
        <Footer />
      </main>
    </PageTransitionProvider>
  );
}
