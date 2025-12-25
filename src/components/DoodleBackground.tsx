"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";

interface DoodleProps {
  className?: string;
  delay?: number;
  doodleType?: number;
}

interface DoodleItem {
  id: number;
  x: number;
  y: number;
  delay: number;
  size: number;
  randomX: number;
  randomRotate: number;
  randomDuration: number;
  randomRepeatDelay: number;
  randomDoodleDelay: number;
  doodleType: number;
}

interface AnimationProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

const Doodle = ({ className = "", delay = 0, doodleType = 0 }: DoodleProps) => {
  // const doodleType = Math.floor(Math.random() * 4); // 0: circle, 1: square, 2: triangle, 3: star
  
  return (
    <motion.div
      className={`absolute opacity-100 dark:opacity-100 pointer-events-none ${className}`}
      initial={{ opacity: 0 }}
      animate={{
        opacity: [0, 0.9, 0],
        y: [0, -30, 0],
        x: [0, Math.random() * 40 - 20, 0],
        rotate: [0, 360],
      }}
      transition={{
        duration: 15 + Math.random() * 15,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-16 h-16 md:w-20 md:h-20"
      >
        {doodleType === 0 && (
          // Circle doodle with animated dash
          <motion.circle
            cx="100"
            cy="100"
            r="45"
            stroke="#3b82f6"
            strokeWidth="4"
            strokeDasharray="10,5"
            initial={{ pathLength: 0, rotate: 0 }}
            animate={{
              pathLength: 1,
              rotate: 360,
            }}
            transition={{
              pathLength: { duration: 3, delay },
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            }}
          />
        )}
        {doodleType === 1 && (
          // Square doodle with morphing
          <motion.rect
            x="55"
            y="55"
            width="90"
            height="90"
            stroke="#8b5cf6"
            strokeWidth="4"
            strokeDasharray="8,4"
            initial={{ pathLength: 0, rotate: 0 }}
            animate={{
              pathLength: 1,
              rotate: 360,
              borderRadius: [0, 20, 0],
            }}
            transition={{
              pathLength: { duration: 3, delay },
              rotate: { duration: 25, repeat: Infinity, ease: "linear" },
              borderRadius: { duration: 8, repeat: Infinity, ease: "easeInOut" },
            }}
          />
        )}
        {doodleType === 2 && (
          // Triangle doodle
          <motion.polygon
            points="100,30 170,140 30,140"
            stroke="#ec4899"
            strokeWidth="4"
            strokeDasharray="12,6"
            fill="none"
            initial={{ pathLength: 0, rotate: 0 }}
            animate={{
              pathLength: 1,
              rotate: 360,
            }}
            transition={{
              pathLength: { duration: 3, delay },
              rotate: { duration: 18, repeat: Infinity, ease: "linear" },
            }}
          />
        )}
        {doodleType === 3 && (
          // Star doodle
          <motion.path
            d="M100,20 L115,65 L165,65 L125,100 L140,145 L100,115 L60,145 L75,100 L35,65 L85,65 Z"
            stroke="#06b6d4"
            strokeWidth="4"
            strokeDasharray="6,3"
            fill="none"
            initial={{ pathLength: 0, rotate: 0 }}
            animate={{
              pathLength: 1,
              rotate: 360,
            }}
            transition={{
              pathLength: { duration: 3, delay },
              rotate: { duration: 22, repeat: Infinity, ease: "linear" },
            }}
          />
        )}
      </svg>
    </motion.div>
  );
};

export const DoodleBackground = () => {
  const [doodles, setDoodles] = useState<DoodleItem[]>([]);

  useEffect(() => {
    // Generate random doodles - increased count for more visual interest
    const newDoodles = Array.from({ length: 12 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 8,
      size: Math.floor(20 + Math.random() * 40), // Random size between 20-60
      randomX: Math.random() * 80 - 40,
      randomRotate: Math.random() * 720 - 360,
      randomDuration: 25 + Math.random() * 25,
      randomRepeatDelay: 3 + Math.random() * 5,
      randomDoodleDelay: Math.random() * 2,
      doodleType: Math.floor(Math.random() * 4),
    }));
    setDoodles(newDoodles);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {doodles.map((doodle) => (
        <motion.div
          key={doodle.id}
          className="absolute"
          style={{
            left: `${doodle.x}%`,
            top: `${doodle.y}%`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 0.8, 0],
            y: [0, -60, -120],
            x: [0, doodle.randomX, 0],
            scale: [0.5, 1, 0.8],
            rotate: [0, doodle.randomRotate],
          }}
          transition={{
            duration: doodle.randomDuration,
            delay: doodle.delay,
            repeat: Infinity,
            repeatDelay: doodle.randomRepeatDelay,
            ease: "easeInOut",
          }}
        >
          <Doodle className={`w-${doodle.size} h-${doodle.size}`} delay={doodle.randomDoodleDelay} doodleType={doodle.doodleType} />
        </motion.div>
      ))}
    </div>
  );
};

export const FadeIn = ({ children, delay = 0, className = "" }: AnimationProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

export const StaggerContainer = ({ children, className = "" }: AnimationProps) => (
  <motion.div
    initial="hidden"
    animate="show"
    variants={{
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1,
        },
      },
    }}
    className={className}
  >
    {children}
  </motion.div>
);

export const StaggerItem = ({ children, className = "" }: AnimationProps) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 20 },
      show: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.6,
          ease: "easeOut",
        },
      },
    }}
    className={className}
  >
    {children}
  </motion.div>
);
