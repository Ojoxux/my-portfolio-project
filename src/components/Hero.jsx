import { forwardRef } from 'react';
import { Box, Heading, Text, Flex, Container } from '@yamada-ui/react';
import { motion } from 'framer-motion';
import CodeAnimation from './CodeAnimation';

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);

const Hero = forwardRef((props, ref) => {
  return (
    <Box
      ref={ref}
      bg='linear-gradient(135deg, #1e1e1e 0%, #2d3748 100%)'
      color='white'
      minHeight='100vh'
      position='relative'
      zIndex={1}
      overflow='hidden'
    >
      <Container maxW='container.xl' h='100%'>
        <Flex
          direction='row' // 常に横並びにする
          align='center'
          justify='space-between'
          h='100%'
          py={20}
        >
          <MotionBox
            w='45%' // 幅を指定して横並びを確保
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <MotionHeading
              as='h1'
              size='4xl'
              mb={4}
              bgGradient='linear(to-r, #7928CA, #FF0080)'
              bgClip='text'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Jou Okuyama
            </MotionHeading>
            <MotionText
              fontSize='2xl'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Student Developer
            </MotionText>
          </MotionBox>
          <MotionBox
            w='50%' // 幅を指定して横並びを確保
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Box
              borderRadius='xl'
              overflow='hidden'
              boxShadow='0 0 20px rgba(0,0,0,0.2)'
              bg='rgba(255,255,255,0.05)'
              backdropFilter='blur(10px)'
              p={4}
            >
              <CodeAnimation />
            </Box>
          </MotionBox>
        </Flex>
      </Container>
      {/* Decorative elements */}
      <Box
        position='absolute'
        top='-20%'
        left='-10%'
        width='40%'
        height='40%'
        borderRadius='full'
        bg='radial-gradient(circle, rgba(120,40,200,0.3) 0%, rgba(120,40,200,0) 70%)'
        filter='blur(40px)'
        zIndex={0}
      />
      <Box
        position='absolute'
        bottom='-20%'
        right='-10%'
        width='40%'
        height='40%'
        borderRadius='full'
        bg='radial-gradient(circle, rgba(255,0,128,0.3) 0%, rgba(255,0,128,0) 70%)'
        filter='blur(40px)'
        zIndex={0}
      />
    </Box>
  );
});

Hero.displayName = 'Hero';
export default Hero;
