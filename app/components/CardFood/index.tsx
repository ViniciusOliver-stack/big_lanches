import { useState } from "react"
import Image from "next/image"
import { FiChevronDown, FiMinus, FiPlus } from "react-icons/fi"
import { useAppContext } from "@/app/hook/AppContext"

interface CardFoodProps {
  typeFood: string
}

export function CardFood({ typeFood }: CardFoodProps) {
  const { listFoodMenu, listHotDog } = useAppContext()
  const [expandedItemId, setExpandedItemId] = useState(null)

  const [selectedBife, setSelectedBife] = useState<string | null>(null)
  const [quantity, setQuantity] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)

  function toggleExpansion(foodId) {
    setExpandedItemId((prevId) => (prevId === foodId ? null : foodId))
  }

  function getBifePrice(bifeType: string) {
    switch (bifeType) {
      case "comum":
        return 2.0
      case "picanha":
        return 4.0
      case "frango":
        return 6.0
      case "artesanal":
        return 8.0
      default:
        return 0.0
    }
  }

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1)
    setTotalPrice(
      (prevTotalPrice) =>
        prevTotalPrice + parseFloat(getBifePrice(selectedBife))
    )
  }

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity((prevQuantity) => prevQuantity - 1)
      setTotalPrice(
        (prevTotalPrice) =>
          prevTotalPrice - parseFloat(getBifePrice(selectedBife))
      )
    }
  }

  const handleAddToCart = () => {
    if (selectedBife) {
      const newItem = {
        food: {
          id: Date.now(),
          name: selectedBife,
        },
        quantity,
        totalPrice,
      }

      // Now you can use the newItem as needed (e.g., add to a cart context/state)
      console.log(newItem)
    }
  }

  const foodList = typeFood === "Lanche" ? listFoodMenu : listHotDog

  return (
    <>
      {foodList.map((food) => {
        const foodId = food.id
        const isExpanded = expandedItemId === foodId

        return (
          <div
            className="mt-4 shadow-xl p-2 rounded-md transition-transform duration-300 ease-in-out"
            key={food.id}
          >
            <div className="flex items-center gap-2 justify-between">
              <div>
                <Image
                  src="https://i.imgur.com/GTgaZIH.png"
                  width={66}
                  height={66}
                  alt=""
                />
              </div>
              <div className="flex flex-col gap-1">
                <p>{food.name}</p>
                <p className="text-xs w-[200px]">{food.ingredients}</p>
                <p>R$ {food.price}</p>
              </div>
              <div
                className="cursor-pointer"
                onClick={() => toggleExpansion(foodId)}
              >
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
              {typeFood === "Lanche" && (
                <div>
                  <p>Selecione o bife de sua preferência.</p>
                  <div className="flex items-center justify-between mt-4">
                    <select
                      id="food"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-[60%]"
                      onChange={(e) => setSelectedBife(e.target.value)}
                    >
                      <option disabled selected>
                        Escolha o tipo de bife
                      </option>
                      <option value="comum">Bife Comum - R$ 2,00</option>
                      <option value="picanha">Bife de Picanha - R$ 4,00</option>
                      <option value="frango">Bife de Frango - R$ 6,00</option>
                      <option value="artesanal">
                        Bife Artesanal - R$ 8,00
                      </option>
                    </select>

                    <div className="flex items-center justify-between">
                      {selectedBife && (
                        <div className="flex items-center gap-2">
                          <button onClick={handleDecrement}>
                            <FiMinus />
                          </button>
                          <span>{quantity}</span>
                          <button onClick={handleIncrement}>
                            <FiPlus />
                          </button>
                          <div>
                            <p>{`R$ ${getBifePrice(selectedBife)}`}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="mt-6">
                    <p>Alguma observação?</p>
                    <textarea
                      placeholder="Digite por exemplo: Sem cebola."
                      className="w-full max-h-[160px] resize-none	border border-gray-300 rounded-md p-2 placeholder:italic"
                    ></textarea>
                  </div>
                </div>
              )}

              <div className="w-full flex items-center justify-center">
                <button
                  className="text-center my-3 bg-red-dark text-white px-3 py-2 rounded-lg"
                  onClick={handleAddToCart}
                >
                  {`Adicionar R$ ${totalPrice.toFixed(2)}`}
                </button>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}
