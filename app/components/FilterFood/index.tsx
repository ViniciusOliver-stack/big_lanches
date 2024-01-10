import Image from "next/image"
import React, { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"

interface FilterFoodProps {
  section: {
    name: string
    image: string
    bgColor: string
  }
  onClick: () => void
}

export function FilterFood({ section, onClick }: FilterFoodProps) {
  let heightStyle = "h-[43%] mb-1"
  if (section.name === "Hotdog") {
    heightStyle = "h-[50%] mt-2"
  } else if (section.name === "Bebidas") {
    heightStyle = "h-[55%] mt-2"
  }

  const controls = useAnimation()

  useEffect(() => {
    controls.start("visible")
  }, [controls])

  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  }

  const transition = {
    duration: 0.3,
  }

  return (
    <motion.div
      onClick={onClick}
      className="hover:cursor-pointer"
      initial="hidden"
      animate={controls}
      variants={variants}
      transition={transition}
    >
      <div className={`relative`}>
        <div
          className={`absolute inset-x-[-16%] bottom-0 ${heightStyle} -z-10 rounded-lg ${section.bgColor}`}
        ></div>

        <Image
          src={section.image}
          alt={section.name}
          width={66}
          height={66}
          className="object-cover"
        />
      </div>
      <div>
        <p className={`text-xs text-center ${heightStyle}`}>{section.name}</p>
      </div>
    </motion.div>
  )
}
