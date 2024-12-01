import { forwardRef } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Flex,
  useColorModeValue,
  Icon,
  VStack,
} from '@yamada-ui/react';
import PropTypes from 'prop-types';
import { motion, useAnimation } from 'framer-motion';
import { FaCode, FaGraduationCap, FaPuzzlePiece } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

const StrengthCard = ({ icon, title, description, index }) => {
  const cardBg = useColorModeValue(
    'rgba(255, 255, 255, 0.8)',
    'rgba(26, 32, 44, 0.8)'
  );
  const iconColor = useColorModeValue('blue.500', 'blue.300');
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.2,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <MotionBox
      ref={ref}
      variants={cardVariants}
      initial='hidden'
      animate={controls}
      bg={cardBg}
      borderRadius='2xl'
      p={8}
      boxShadow='xl'
      backdropFilter='blur(10px)'
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      maxWidth='1000px'
      width='100%'
      mx='auto'
    >
      <Flex align='center' mb={4}>
        <MotionBox
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            delay: index * 0.2 + 0.3,
            type: 'spring',
            stiffness: 260,
            damping: 20,
          }}
        >
          <Icon as={icon} boxSize={8} color={iconColor} mr={4} />
        </MotionBox>
        <Heading as='h3' size='lg'>
          {title}
        </Heading>
      </Flex>
      <Text fontSize='md' lineHeight='tall'>
        {description}
      </Text>
    </MotionBox>
  );
};

StrengthCard.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

const Strengths = forwardRef((props, ref) => {
  const bgGradient = useColorModeValue(
    'linear(to-br, blue.50, purple.50, pink.50)',
    'linear(to-br, blue.900, purple.900, pink.900)'
  );
  const headingColor = useColorModeValue('gray.800', 'white');

  const strengths = [
    {
      icon: FaCode,
      title: '技術的適応力',
      description:
        'C#、Java、JavaScript、React、TypeScriptなど、多様なプログラミング言語やフレームワークを学習してきました。新しい技術にも迅速に適応し、プロジェクトのニーズに合わせて最適な技術を選択・適用できる能力があります。',
    },
    {
      icon: FaGraduationCap,
      title: '継続的学習能力',
      description:
        '高校から専門学校まで一貫して情報技術を学び続け、さらにインターンシップでも実践的なスキルを磨いています。技術の進化が速いIT業界で、常に最新の知識とスキルを吸収し続ける姿勢を持っています。',
    },
    {
      icon: FaPuzzlePiece,
      title: '実践的問題解決力',
      description:
        'インターンシップでのWindows アプリケーション開発経験や、様々なプロジェクトへの参加を通じて、実際の開発現場での問題解決能力を培っています。理論だけでなく、実践的なアプローチで課題に取り組み、効果的な解決策を提案・実装できます。',
    },
  ];

  return (
    <Box
      ref={ref}
      py={{ base: 20, md: 32 }}
      bgGradient={bgGradient}
      position='relative'
      overflow='hidden'
    >
      <MotionBox
        position='absolute'
        top='-50%'
        left='-50%'
        width='200%'
        height='200%'
        backgroundImage="url('data:image/svg+xml,...')" // SVGパターンを追加
        backgroundRepeat='repeat'
        opacity={0.05}
        initial={{ rotate: -30, scale: 1.2 }}
        animate={{ rotate: 0, scale: 1 }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'linear',
        }}
      />
      <Container maxW='container.xl' position='relative'>
        <MotionFlex
          direction='column'
          align='center'
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          mb={16}
        >
          <Heading
            as='h2'
            fontSize={{ base: '4xl', md: '5xl' }}
            textAlign='center'
            fontWeight='bold'
            color={headingColor}
            mb={4}
          >
            My Strengths
          </Heading>
          <Text fontSize='xl' textAlign='center' maxW='3xl'>
            今までの学習や個人開発の経験を通じて培った、私の主な強みです。
          </Text>
        </MotionFlex>
        <VStack spacing={8} align='stretch'>
          {strengths.map((strength, index) => (
            <StrengthCard key={index} {...strength} index={index} />
          ))}
        </VStack>
      </Container>
    </Box>
  );
});

Strengths.displayName = 'Strengths';

export default Strengths;
