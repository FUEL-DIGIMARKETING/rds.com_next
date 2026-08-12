'use client'

import React, { useEffect, useState } from "react"
import { motion } from 'framer-motion'

// Smooth fade-up animation variants
const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
  viewport: { once: true }
}

export { fadeUp }

export const ClientMotionDiv = motion.div
export const ClientMotionH1 = motion.h1
export const ClientMotionH2 = motion.h2
export const ClientMotionH3 = motion.h3
export const ClientMotionP = motion.p