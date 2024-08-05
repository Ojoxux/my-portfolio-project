import { useState, useEffect, useRef } from 'react';
import { Box, Button } from '@yamada-ui/react';
import { FaChevronUp } from 'react-icons/fa';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Career from './components/Career';
import Strengths from './components/Strengths'; // 新しく追加
import './App.css';

function App() {
  const [showHeader, setShowHeader] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY.current) {
        // スクロールダウン
        setShowHeader(false);
      } else {
        // スクロールアップ
        setShowHeader(true);
      }
      lastScrollY.current = window.scrollY;

      setShowScrollTop(window.scrollY > window.innerHeight / 2);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = ref => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleNavClick = section => {
    switch (section) {
      case 'About':
        scrollTo(aboutRef);
        break;
      case 'Skills':
        scrollTo(skillsRef);
        break;
      case 'Career':
        scrollTo(careerRef);
        break;
      case 'Strengths':
        scrollTo(strengthsRef);
        break;
      default:
        break;
    }
  };

  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const careerRef = useRef(null);
  const strengthsRef = useRef(null); // 新しく追加

  return (
    <Box>
      <Header show={showHeader} onNavClick={handleNavClick} />
      <Hero />
      <About ref={aboutRef} />
      <Skills ref={skillsRef} />
      <Career ref={careerRef} />
      <Strengths ref={strengthsRef} /> {/* Contactの代わりにStrengthsを使用 */}
      {showScrollTop && (
        <Button
          position='fixed'
          bottom='4'
          right='4'
          borderRadius='full'
          bg='gray.800'
          color='white'
          _hover={{ bg: 'gray.700' }}
          onClick={scrollToTop}
          boxShadow='lg'
          size='lg'
          zIndex={2000}
        >
          <FaChevronUp />
        </Button>
      )}
    </Box>
  );
}

export default App;
