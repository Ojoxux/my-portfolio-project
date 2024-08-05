import { motion } from 'framer-motion';
import { Box } from '@yamada-ui/react';

const CodeAnimation = () => {
  const colors = {
    background: '#1e1e1e',
    text: '#d4d4d4',
    keyword: '#569cd6',
    string: '#ce9178',
    number: '#b5cea8',
    comment: '#6a9955',
    function: '#dcdcaa',
    operator: '#d4d4d4',
  };

  const codeElements = [
    { type: 'rect', width: 120, height: 15, x: 20, y: 50, color: colors.keyword },
    { type: 'circle', r: 5, cx: 150, cy: 57, color: colors.operator },
    { type: 'rect', width: 180, height: 15, x: 165, y: 50, color: colors.string },
    { type: 'rect', width: 140, height: 15, x: 355, y: 50, color: colors.function },
    { type: 'circle', r: 5, cx: 505, cy: 57, color: colors.operator },
    
    { type: 'rect', width: 240, height: 15, x: 20, y: 80, color: colors.keyword },
    { type: 'rect', width: 15, height: 15, x: 270, y: 80, color: colors.operator },
    { type: 'circle', r: 5, cx: 295, cy: 87, color: colors.operator },
    
    { type: 'circle', r: 5, cx: 20, cy: 117, color: colors.operator },
    { type: 'rect', width: 160, height: 15, x: 35, y: 110, color: colors.text },
    
    { type: 'rect', width: 120, height: 15, x: 20, y: 140, color: colors.keyword },
    { type: 'rect', width: 15, height: 15, x: 150, y: 140, color: colors.operator },
    { type: 'rect', width: 180, height: 15, x: 175, y: 140, color: colors.function, fill: 'none', stroke: colors.function, strokeWidth: 2 },
    
    { type: 'rect', width: 200, height: 15, x: 20, y: 170, color: colors.keyword },
    { type: 'circle', r: 5, cx: 230, cy: 177, color: colors.operator },
    { type: 'rect', width: 280, height: 15, x: 245, y: 170, color: colors.string },
    
    { type: 'rect', width: 140, height: 15, x: 20, y: 200, color: colors.text },
    { type: 'rect', width: 160, height: 15, x: 170, y: 200, color: colors.text },
    { type: 'rect', width: 120, height: 15, x: 340, y: 200, color: colors.text },
    
    { type: 'rect', width: 15, height: 15, x: 20, y: 230, color: colors.operator },
    { type: 'rect', width: 200, height: 15, x: 45, y: 230, color: colors.comment },
    { type: 'rect', width: 220, height: 15, x: 255, y: 230, color: colors.comment },
    { type: 'rect', width: 15, height: 15, x: 485, y: 230, color: colors.operator },
  ];

  return (
    <Box w="100%" h="100%" minHeight="300px" bg={colors.background} borderRadius="md" overflow="hidden" position="relative" zIndex="1">
      <svg width="100%" height="100%" viewBox="0 0 520 270" preserveAspectRatio="xMidYMid meet">
        {/* Window controls */}
        <circle cx="20" cy="20" r="6" fill="#ff5f56" />
        <circle cx="40" cy="20" r="6" fill="#ffbd2e" />
        <circle cx="60" cy="20" r="6" fill="#27c93f" />

        {codeElements.map((element, index) => {
          if (element.type === 'rect') {
            return (
              <motion.rect
                key={index}
                x={element.x}
                y={element.y}
                width={element.width}
                height={element.height}
                fill={element.fill || element.color}
                stroke={element.stroke}
                strokeWidth={element.strokeWidth}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              />
            );
          } else if (element.type === 'circle') {
            return (
              <motion.circle
                key={index}
                cx={element.cx}
                cy={element.cy}
                r={element.r}
                fill={element.color}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              />
            );
          }
          return null;
        })}
      </svg>
    </Box>
  );
};

export default CodeAnimation;