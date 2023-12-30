import Image from "next/image"

export function FilterFood() {
  return (
    <div>
      <div className="relative">
        <div className="absolute inset-x-[-16%] bottom-0 h-1/2 bg-red-dark -z-10 rounded-lg"></div>

        <Image
          src="https://i.imgur.com/ScbDw7S.png"
          alt="Imagem"
          width={66}
          height={66}
          className="object-cover"
        />
      </div>
      <div>
        <p className="text-xs mt-2 text-center">Lanches</p>
      </div>
    </div>
  )
}
