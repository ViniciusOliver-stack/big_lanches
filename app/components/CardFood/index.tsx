import { useAppContext } from "@/app/hook/AppContext"
import { Plus } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { Modal } from "../Modal"

type Food = {
  id: string
  name: string
  price: number
  ingredients: string
}

export function CardFood() {
  const { listHotDog, addToCart } = useAppContext()
  const [selectedFood, setSelectedFood] = useState<Food | null>(null)

  function openModal(food: Food) {
    const foodWithNumberPrice: Food = {
      ...food,
      price: Number(food.price), // Convertendo para número
    }

    setSelectedFood(foodWithNumberPrice)
  }

  function closeModal() {
    setSelectedFood(null)
  }

  return (
    <div className="w-full flex flex-col gap-2 mt-4 shadow-xl rounded-lg p-4">
      {listHotDog.map((food) => {
        return (
          <div
            className="flex items-center gap-2 justify-between mt-4 w-full"
            key={food.id}
          >
            <div className="w-full">
              <div className="flex gap-1 justify-between w-full" key={1}>
                <div className="flex gap-3 mb-4">
                  <Image
                    src="https://i.imgur.com/GTgaZIH.png"
                    width={66}
                    height={66}
                    alt=""
                  />
                  <div>
                    <p>{food.name}</p>
                    <p className="text-xs w-10/12">{food.ingredients}</p>
                    <p>R$ {food.price.toFixed(2)}</p>
                  </div>
                </div>
                <button onClick={() => openModal(food)}>
                  <Plus />
                </button>
              </div>
            </div>
          </div>
        )
      })}

      {selectedFood && <Modal closeModal={closeModal} food={selectedFood} />}
    </div>
  )
}
