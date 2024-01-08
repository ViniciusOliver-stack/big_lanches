import Image from "next/image"
import React from "react"

interface FilterFoodProps {
  section: {
    name: string
    image: string
    bgColor: string
  }
  onClick: () => void
}

export function FilterFood({ section, onClick }: FilterFoodProps) {
  let heightStyle = "h-[45%]"
  if (section.name === "Hotdog") {
    heightStyle = "h-[50%]"
  } else if (section.name === "Bebidas") {
    heightStyle = "h-[60%]"
  }

  return (
    <div onClick={onClick} className="hover:cursor-pointer">
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
        <p className="text-xs mt-2 text-center">{section.name}</p>
      </div>
    </div>
  )
}
