import { createRef } from 'react'
import Navbar from '@/components/partials/Navbar'
import HeroSection from './HeroSection'
import Presale from './Presale'
import FirstLook from './FirstLook'
import AboutSection from './AboutSection'
import Tokenomics from './Tokenomics'
import Roadmap from './Roadmap'
import Footer from '@/components/partials/Footer'

export default function LandingPage() {
  const trailerRef = createRef<HTMLDivElement>();
  const aboutRef = createRef<HTMLDivElement>();
  const roadmapRef = createRef<HTMLDivElement>();
  const tokenomicsRef = createRef<HTMLDivElement>();
  
  const scrollToRef = (to:string) => {
      if(to=='trailer'){
        trailerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }else if(to=='about'){
        aboutRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }else if(to=='roadmap'){
        roadmapRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }else if(to=='tokenomics'){
        tokenomicsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
  };

  return (
    <>
      <Navbar scrollTo={scrollToRef} />
      <HeroSection />
      <Presale />
      <FirstLook ref={trailerRef}  />
      <AboutSection ref={aboutRef}/>
      <Roadmap ref={roadmapRef}/>
      <Tokenomics ref={tokenomicsRef}/>
      <Footer scrollTo={scrollToRef} />
    </>
  )
}
