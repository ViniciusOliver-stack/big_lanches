import { useAppContext } from "@/app/hook/AppContext"
import Image from "next/image"
import { useState } from "react"
import { FiChevronDown, FiMinus, FiPlus } from "react-icons/fi"

export function CardDrinks() {
  const { listDrinks } = useAppContext()
  const [expandedCard, setExpandedCard] = useState<string | null>(null)

  function toggleExpansion(newCard: string) {
    setExpandedCard((prevExpanded: string | null) =>
      prevExpanded === newCard ? null : newCard
    )
  }

  return (
    <>
      {listDrinks.map((drinks) => (
        <div
          key={drinks.id}
          className={`mt-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-2 rounded-md transition-transform duration-300 ease-in-out w-[130px] text-center ${
            expandedCard === drinks.id
          }`}
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
              <p className="text-lg">{drinks.name}</p>
              <p>R$ {drinks.price}</p>
            </div>
            <div
              className="cursor-pointer"
              onClick={() => toggleExpansion(drinks.id)}
            >
              {expandedCard === drinks.id ? (
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
              expandedCard === drinks.id ? "max-h-96 mt-6" : "max-h-0"
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
      ))}
    </>
  )
}
