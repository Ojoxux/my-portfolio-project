import { forwardRef, useEffect } from 'react';
import { Box, Container, Heading, Text, Flex } from '@yamada-ui/react';
import { motion, useAnimation } from 'framer-motion';

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionFlex = motion(Flex);

const About = forwardRef((props, ref) => {
  const controls = useAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start('visible');
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [ref, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <MotionBox
      ref={ref}
      py='32'
      bg='linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'
      color='gray.800'
      initial='hidden'
      animate={controls}
      variants={containerVariants}
      overflow='hidden'
      position='relative'
      zIndex={1}
    >
      {/* Decorative elements */}
      <MotionBox
        position='absolute'
        top='-10%'
        left='-5%'
        width='300px'
        height='300px'
        borderRadius='full'
        bg='linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
        opacity='0.1'
        variants={itemVariants}
        animate={{
          y: [0, 20, 0],
          transition: {
            duration: 5,
            repeat: Infinity,
            repeatType: 'reverse',
          },
        }}
        //style={{ zIndex: 1 }}
      />
      <MotionBox
        position='absolute'
        bottom='-15%'
        right='-10%'
        width='400px'
        height='400px'
        borderRadius='full'
        bg='linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
        opacity='0.1'
        variants={itemVariants}
        animate={{
          y: [0, -30, 0],
          transition: {
            duration: 7,
            repeat: Infinity,
            repeatType: 'reverse',
          },
        }}
        //style={{ zIndex: 1 }}
      />

      {/* Content */}
      <Container maxW='container.md' position='relative' zIndex={2}>
        <MotionFlex
          direction='column'
          align='center'
          justify='center'
          bg='rgba(255, 255, 255, 0.7)'
          backdropFilter='blur(10px)'
          borderRadius='2xl'
          p='12'
          boxShadow='xl'
          variants={itemVariants}
        >
          <MotionHeading
            as='h2'
            fontSize={{ base: '4xl', md: '5xl' }}
            fontWeight='bold'
            mb='6'
            bgGradient='linear(to-r, #4facfe 0%, #00f2fe 100%)'
            bgClip='text'
          >
            About Me
          </MotionHeading>
          <MotionText
            fontSize={{ base: 'lg', md: 'xl' }}
            textAlign='center'
            lineHeight='tall'
            maxW='2xl'
          >
            As a passionate frontend developer, I craft elegant and intuitive
            user experiences. With a keen eye for design and a love for clean
            code, I bring ideas to life through the power of modern web
            technologies.
          </MotionText>
        </MotionFlex>
      </Container>
    </MotionBox>
  );
});

About.displayName = 'About';

export default About;
