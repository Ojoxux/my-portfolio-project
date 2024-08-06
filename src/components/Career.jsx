import { forwardRef, useState, useEffect, useRef } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
} from '@yamada-ui/react';
import {
  FaGraduationCap,
  FaBuilding,
  FaChevronDown,
  FaChevronRight,
  FaExternalLinkAlt,
} from 'react-icons/fa';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';

const MotionBox = motion(Box);
const MotionVStack = motion(VStack);

const CareerItemDetail = ({
  isOpen,
  onClose,
  title,
  subtitle,
  period,
  description,
  link,
}) => {
  const bgColor = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.900', 'gray.100');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size='xl'>
      <ModalOverlay backdropFilter='blur(5px)' />
      <Box bg={bgColor} borderRadius='xl' overflow='hidden' maxW='100%' m={4}>
        <Box borderBottom='1px' borderColor={borderColor} p={6}>
          <ModalHeader p={0} mb={2}>
            <Heading size='lg' color={textColor} fontWeight='bold'>
              {title}
            </Heading>
          </ModalHeader>
          <Text fontWeight='medium' color={textColor} fontSize='md'>
            {subtitle}
          </Text>
          <Text fontSize='sm' color='gray.500' mt={1}>
            {period}
          </Text>
        </Box>
        <ModalCloseButton />
        <ModalBody p={6}>
          <Text color={textColor} fontSize='md' lineHeight='tall' mb={6}>
            {description}
          </Text>
          {link && (
            <Button
              as='a'
              href={link}
              target='_blank'
              rel='noopener noreferrer'
              rightIcon={<FaExternalLinkAlt />}
              colorScheme='blue'
              size='md'
              fontWeight='medium'
              w='full'
            >
              公式サイトを確認
            </Button>
          )}
        </ModalBody>
      </Box>
    </Modal>
  );
};

CareerItemDetail.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  period: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string,
};

const CareerItem = ({
  icon,
  title,
  subtitle,
  period,
  description,
  link,
  index,
  isLast,
  bgColor,
  iconColor,
  headingColor,
  subtitleColor,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isHovered, setIsHovered] = useState(false);

  const arrowColor = useColorModeValue('gray.400', 'gray.600');
  const hoverBgColor = useColorModeValue('gray.50', 'gray.700');

  return (
    <MotionBox
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <MotionBox
        bg={bgColor}
        borderRadius='xl'
        p={6}
        boxShadow='sm'
        onClick={onOpen}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        cursor='pointer'
        whileHover={{ backgroundColor: hoverBgColor }}
        whileTap={{ scale: 0.98 }}
        textAlign='left'
        position='relative'
        display='flex'
        alignItems='center'
        transition='all 0.3s'
      >
        <Box color={iconColor} fontSize='3xl' mr={4}>
          {icon}
        </Box>
        <VStack align='start' spacing={1} flex={1}>
          <Text fontWeight='semibold' color={headingColor} fontSize='lg'>
            {title}
          </Text>
          <Text fontSize='sm' color={subtitleColor}>
            {subtitle}
          </Text>
          <Text fontSize='xs' color='gray.500'>
            {period}
          </Text>
        </VStack>
        <MotionBox
          initial={{ opacity: 0.6, x: -10 }}
          animate={{ opacity: isHovered ? 1 : 0.6, x: isHovered ? 0 : -10 }}
          transition={{ duration: 0.2 }}
        >
          <FaChevronRight color={arrowColor} size={16} />
        </MotionBox>
      </MotionBox>
      <CareerItemDetail
        isOpen={isOpen}
        onClose={onClose}
        title={title}
        subtitle={subtitle}
        period={period}
        description={description}
        link={link}
      />
      {!isLast && (
        <Box textAlign='center' my={4}>
          <MotionBox
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          >
            <FaChevronDown color={arrowColor} size={24} />
          </MotionBox>
        </Box>
      )}
    </MotionBox>
  );
};

CareerItem.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  period: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string,
  index: PropTypes.number.isRequired,
  isLast: PropTypes.bool.isRequired,
  bgColor: PropTypes.string.isRequired,
  iconColor: PropTypes.string.isRequired,
  headingColor: PropTypes.string.isRequired,
  subtitleColor: PropTypes.string.isRequired,
};

const Career = forwardRef((props, ref) => {
  const careerData = [
    {
      icon: <FaGraduationCap />,
      title: '山形県立鶴岡工業高等学校',
      subtitle: '情報通信科',
      period: '2020年4月 - 2023年3月',
      description:
        'モットーは常に進化を続ける情報通信の最先端へ。コンピュータを構成している回路や機器のしくみ、コンピュータに仕事を行わせたり、モノを制御するためのプログラムの作成、情報をやりとりする通信やネットワークの基礎的な知識や技術に関する学習。',
      link: 'http://www.tsuruoka-th.ed.jp/course/information/',
    },
    {
      icon: <FaBuilding />,
      title: '株式会社ソネット',
      subtitle: 'C#プログラマー（インターン）',
      period: '2021年8月',
      description: 'WFAを使ったWindows アプリケーション開発 (1week)',
      link: 'https://www.sonet-inc.co.jp',
    },
    {
      icon: <FaGraduationCap />,
      title: '新潟コンピュータ専門学校',
      subtitle: 'IT総合学科 情報システム専攻',
      period: '2023年4月 - 2027年3月',
      description:
        'プログラミング、クラウド、OS、Web、セキュリティ、ネイティブアプリ開発',
      link: 'https://www.ncc-net.ac.jp/department/it-expert',
    },
  ];

  // 背景色を紫と青のグラデーションに変更
  const bgColor1 = useColorModeValue(
    'rgba(138,43,226,0.6)',
    'rgba(25,25,112,0.6)'
  ); // 明るい紫 to 濃い青
  const bgColor2 = useColorModeValue(
    'rgba(65,105,225,0.6)',
    'rgba(0,0,128,0.6)'
  ); // ロイヤルブルー to ネイビー

  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createGradient = () => {
      const gradient = ctx.createLinearGradient(
        0,
        0,
        canvas.width,
        canvas.height
      );
      gradient.addColorStop(0, bgColor1);
      gradient.addColorStop(1, bgColor2);
      return gradient;
    };

    const drawBackground = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = createGradient();
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    const animate = () => {
      drawBackground();
      animationFrameId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    animate();

    window.addEventListener('resize', resizeCanvas);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [bgColor1, bgColor2]);

  // CareerItemコンポーネントの色も調整
  const itemBgColor = useColorModeValue('purple.50', 'blue.900');
  const itemIconColor = useColorModeValue('purple.500', 'blue.200');
  const itemHeadingColor = useColorModeValue('purple.700', 'blue.100');
  const itemSubtitleColor = useColorModeValue('purple.600', 'blue.300');

  return (
    <Box
      ref={ref}
      py={{ base: 16, md: 24 }}
      position='relative'
      overflow='hidden'
    >
      <Box position='absolute' top={0} left={0} right={0} bottom={0} zIndex={0}>
        <canvas
          ref={canvasRef}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
        />
      </Box>
      <Container maxW='container.md' position='relative' zIndex={1}>
        <MotionBox
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          mb={{ base: 10, md: 14 }}
        >
          <Heading
            as='h2'
            fontSize={{ base: '4xl', md: '5xl' }}
            textAlign='center'
            fontWeight='bold'
            color={useColorModeValue('purple.800', 'blue.100')}
            textShadow='2px 2px 4px rgba(0,0,0,0.1)'
          >
            Career Journey
          </Heading>
        </MotionBox>
        <MotionVStack
          spacing={8}
          align='stretch'
          initial='hidden'
          animate='visible'
          variants={{
            visible: { transition: { staggerChildren: 0.3 } },
          }}
        >
          <AnimatePresence>
            {careerData.map((item, index) => (
              <CareerItem
                key={index}
                {...item}
                index={index}
                isLast={index === careerData.length - 1}
                bgColor={itemBgColor}
                iconColor={itemIconColor}
                headingColor={itemHeadingColor}
                subtitleColor={itemSubtitleColor}
              />
            ))}
          </AnimatePresence>
        </MotionVStack>
      </Container>
    </Box>
  );
});

Career.displayName = 'Career';

export default Career;
