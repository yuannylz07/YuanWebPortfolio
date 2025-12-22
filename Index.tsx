import { Helmet } from 'react-helmet-async';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { EducationSection } from '@/components/sections/EducationSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Yuan Nylz Porcopio | Frontend Developer & IT Student</title>
        <meta 
          name="description" 
          content="Portfolio of Yuan Nylz Porcopio - A passionate Frontend Developer and IT Student specializing in React, Tailwind CSS, and modern web technologies. Available for hire." 
        />
        <meta name="keywords" content="Yuan Nylz Porcopio, Frontend Developer, React Developer, Web Developer, IT Student, Portfolio" />
        <meta property="og:title" content="Yuan Nylz Porcopio | Frontend Developer" />
        <meta property="og:description" content="Passionate Frontend Developer and IT Student building beautiful web experiences." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://yuannylz.dev" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <EducationSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
