"use client";

import { motion } from "framer-motion";

export function VideoSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-5xl mx-auto"
    >
      <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-700 bg-black">
        <video
          className="w-full h-full object-cover"
          controls
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/videos/demo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </motion.div>
  );
}
