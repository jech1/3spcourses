'use client'

import { useRef, useEffect } from 'react'
import { motion, useAnimationFrame, useMotionValue } from 'framer-motion'
import Image from 'next/image'

const images = [
  { src: '/ScientificWritingB.png?height=400&width=500', alt: 'Image 1' },
  { src: '/ScientificWritingB.png?height=400&width=500', alt: 'Image 2' },
  { src: '/ScientificWritingB.png?height=400&width=500', alt: 'Image 3' },
  { src: '/ScientificWritingB.png?height=400&width=500', alt: 'Image 4' },
  { src: '/ScientificWritingB.png?height=400&width=500', alt: 'Image 5' },
  { src: '/ScientificWritingB.png?height=400&width=500', alt: 'Image 6' },
]

export default function AnimatedImageCarousel() {
  const containerRef = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)

  useAnimationFrame(() => {
    if (containerRef.current) {
      const xValue = x.get()
      const containerWidth = containerRef.current.scrollWidth / 2
      
      if (xValue <= -containerWidth) {
        x.set(0)
      } else {
        x.set(xValue - 1) // Adjust this value to change the speed
      }
    }
  })

  useEffect(() => {
    const container = containerRef.current
    if (container) {
      const clonedItems = container.innerHTML
      container.innerHTML += clonedItems
    }
  }, [])

  return (
    <div className="w-full overflow-hidden bg-gray-100 p-4">
      <motion.div
        ref={containerRef}
        className="flex space-x-4"
        style={{ x }}
      >
        {images.concat(images).map((image, index) => (
          <div key={index} className="flex-shrink-0">
            <Image
              src={image.src}
              alt={image.alt}
              width={300}
              height={200}
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        ))}
      </motion.div>
    </div>
  )
}