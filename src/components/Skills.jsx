import { forwardRef, useEffect, useState } from 'react';
import {
  Box,
  Container,
  Heading,
  VStack,
  Text,
  SimpleGrid,
  Flex,
} from '@yamada-ui/react';
import PropTypes from 'prop-types';
import { motion, useAnimation } from 'framer-motion';

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);

const SkillIcon = ({ icon, index, isVisible }) => {
  return (
    <MotionBox
      width='70px'
      height='70px'
      borderRadius='2xl'
      overflow='hidden'
      bg='rgba(255, 255, 255, 0.1)'
      display='flex'
      alignItems='center'
      justifyContent='center'
      m='2'
      backdropFilter='blur(10px)'
      boxShadow='0 4px 6px rgba(0, 0, 0, 0.1)'
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isVisible ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{
        scale: 1.1,
        rotate: 5,
        boxShadow: '0 8px 12px rgba(0, 0, 0, 0.2)',
        transition: { duration: 0.2, type: 'spring', stiffness: 300 },
      }}
    >
      <img
        src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}/${icon}-original.svg`}
        alt={icon}
        style={{ width: '60%', height: '60%', objectFit: 'contain' }}
      />
    </MotionBox>
  );
};

SkillIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  isVisible: PropTypes.bool.isRequired,
};

const SkillCategory = ({ title, icons, emoji, index, isVisible }) => {
  return (
    <MotionBox
      bg='rgba(255, 255, 255, 0.05)'
      borderRadius='3xl'
      overflow='hidden'
      boxShadow='lg'
      border='1px solid rgba(255, 255, 255, 0.1)'
      p='6'
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
    >
      <VStack spacing={6} align='stretch'>
        <Text
          fontSize='xl'
          fontWeight='bold'
          display='flex'
          alignItems='center'
          color='white'
        >
          <Box as='span' mr='2' fontSize='1.2em'>
            {emoji}
          </Box>{' '}
          {title}
        </Text>
        <motion.div>
          <Flex flexWrap='wrap' justifyContent='center'>
            {icons.map((icon, idx) => (
              <SkillIcon
                key={idx}
                icon={icon}
                index={idx}
                isVisible={isVisible}
              />
            ))}
          </Flex>
        </motion.div>
      </VStack>
    </MotionBox>
  );
};

SkillCategory.propTypes = {
  title: PropTypes.string.isRequired,
  icons: PropTypes.arrayOf(PropTypes.string).isRequired,
  emoji: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  isVisible: PropTypes.bool.isRequired,
};

const Skills = forwardRef((props, ref) => {
  const controls = useAnimation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
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

  return (
    <MotionBox
      ref={ref}
      py='24'
      bg='linear-gradient(135deg, #000000 0%, #434343 100%)'
      color='white'
      overflow='hidden'
      initial='hidden'
      animate={controls}
    >
      <Container maxW='container.xl'>
        <VStack spacing='12' align='center'>
          <MotionHeading
            as='h2'
            fontSize={{ base: '4xl', md: '5xl' }}
            textAlign='center'
            mb='8'
            bgGradient='linear(to-r, #4facfe 0%, #00f2fe 100%)'
            bgClip='text'
            initial={{ opacity: 0, y: -20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            My Skills
          </MotionHeading>
          <SimpleGrid columns={[1, 1, 2]} spacing='8' width='100%'>
            {[
              {
                title: 'FrontEnd',
                icons: [
                  'javascript',
                  'typescript',
                  'html5',
                  'css3',
                  'react',
                  'jquery',
                  'tailwindcss',
                  'vitejs',
                ],
                emoji: '💻',
              },
              {
                title: 'BackEnd',
                icons: ['go', 'php', 'nodejs', 'laravel', 'firebase'],
                emoji: '💻',
              },
              {
                title: 'Other, Tools',
                icons: [
                  'c',
                  'cplusplus',
                  'csharp',
                  'java',
                  'python',
                  'unity',
                  'figma',
                  'git',
                  'github',
                ],
                emoji: '🛠️',
              },
              {
                title: 'Mobile Development',
                icons: [
                  'swift',
                  'flutter', // Flutterも追加すると良いかもしれません
                ],
                emoji: '📱',
              },
              /*
              {
                title: 'Studying',
                icons: [
                  'typescript',
                  'react',
                  'rails-plain',
                  'laravel',
                  'ruby',
                  'rust',
                ],
                emoji: '✏️',
              },
              */
            ].map((category, index) => (
              <SkillCategory
                key={index}
                {...category}
                index={index}
                isVisible={isVisible}
              />
            ))}
          </SimpleGrid>
        </VStack>
      </Container>

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
        animate={{
          y: [0, 20, 0],
          scale: [1, 1.1, 1],
          transition: {
            duration: 8,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          },
        }}
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
        animate={{
          y: [0, -30, 0],
          scale: [1, 1.2, 1],
          transition: {
            duration: 10,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          },
        }}
      />
    </MotionBox>
  );
});

Skills.displayName = 'Skills';

export default Skills;
