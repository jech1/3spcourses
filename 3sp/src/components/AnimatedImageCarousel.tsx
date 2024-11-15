'use client'

import { useRef, useEffect } from 'react'
import { motion, useAnimationFrame, useMotionValue } from 'framer-motion'
import Image from 'next/image'

const images = [
  { src: '/Scientific Writing Badge (1).png?height=500&width=500', alt: 'Image 1' },
  { src: '/circuitbadge.png?height=500&width=500', alt: 'Image 2' },
  { src: '/researchbadge.png?height=500&width=500', alt: 'Image 3' },
  { src: '/CADbadge (1).png?height=500&width=500', alt: 'Image 4' },
  { src: '/c++badge.png?height=500&width=500', alt: 'Image 5' },
  { src: '/caffeinebadge.png?height=500&width=500', alt: 'Image 6' },
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
        x.set(xValue - 2) // Adjust this value to change the speed
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
    <div className="w-full overflow-hidden bg-gray-100 p-40">
      <h2 className="text-3xl font-bold mb-20 text-center text-[#11001C]">
            Awarded Badges
      </h2>
      
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