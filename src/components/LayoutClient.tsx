'use client';

import { Inter } from 'next/font/google';
import Navbar from "./Navbar";
import { DoodleBackground } from "./DoodleBackground";
import { motion } from "framer-motion";
import { useLayoutEffect, useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function LayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);

  // This effect ensures we don't get hydration mismatches
  useLayoutEffect(() => {
    setMounted(true);
  }, []);

  // Don't render anything on the server to prevent hydration issues
  if (!mounted) {
    return null;
  }

  return (
    <>
      <DoodleBackground />
      <Navbar />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        {children}
      </motion.main>
    </>
  );
}
