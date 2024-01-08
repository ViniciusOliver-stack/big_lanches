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
  imageFood: string
}

type FoodWithQuantity = Food & { quantity: number }

export function CardFood() {
  const { listHotDog, addToCart } = useAppContext()
  const [selectedFood, setSelectedFood] = useState<FoodWithQuantity | null>(
    null
  )

  function openModal(food: Food) {
    const foodWithNumberPrice: FoodWithQuantity = {
      ...food,
      price: Number(food.price),
      quantity: 1,
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
                    src={food.imageFood}
                    width={66}
                    height={66}
                    alt=""
                    className="object-cover h-14 w-14"
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

      {selectedFood && (
        <Modal
          closeModal={closeModal}
          food={selectedFood as FoodWithQuantity}
        />
      )}
    </div>
  )
}
