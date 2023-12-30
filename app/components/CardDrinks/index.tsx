import { useAppContext } from "@/app/hook/AppContext"
import Image from "next/image"
import { useState } from "react"
import { FiChevronDown, FiMinus, FiPlus } from "react-icons/fi"

export function CardDrinks() {
  const { listDrinks } = useAppContext()
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleExpansion = () => {
    setIsExpanded((prevExpanded) => !prevExpanded)
  }

  return (
    <>
      {listDrinks.map((drinks) => {
        return (
          <div
            className="mt-4 shadow-xl p-2 rounded-md transition-transform duration-300 ease-in-out w-[150px] text-center"
            key={drinks.id}
          >
            <div className="flex flex-col items-center gap-2">
              <div>
                <Image
                  src="https://i.imgur.com/5hjGuD8.png"
                  width={100}
                  height={100}
                  alt=""
                />
              </div>
              <div className="flex flex-col gap-1">
                <p>{drinks.name}</p>
                <p>R$ {drinks.price}</p>
              </div>
              <div className="cursor-pointer" onClick={toggleExpansion}>
                {isExpanded ? (
                  <div className="rotate-180">
                    <FiChevronDown />
                  </div>
                ) : (
                  <div className="rotate-0">
                    <FiChevronDown />
                  </div>
                )}
              </div>
            </div>

            <div
              className={`overflow-hidden transition-max-height duration-300 ease-in-out ${
                isExpanded ? "max-h-96 mt-6" : "max-h-0"
              }`}
            >
              <p>Quantidade</p>

              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-2">
                  <button>
                    <FiMinus />
                  </button>
                  <span>0</span>
                  <button>
                    <FiPlus />
                  </button>
                  <div>
                    <p>R$ 12,00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}
