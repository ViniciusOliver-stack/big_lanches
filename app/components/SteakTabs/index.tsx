import { useState } from "react"
import Image from "next/image"
import { useAppContext } from "@/app/hook/AppContext"
import { Plus } from "lucide-react"
import { Modal } from "../Modal"

type Food = {
  id: string
  name: string
  price: number
  ingredients: string
}

type FoodWithQuantity = Food & { quantity: number }

const SteakTabs = () => {
  const [activeTab, setActiveTab] = useState("picanha")
  const [selectedFood, setSelectedFood] = useState<FoodWithQuantity | null>(
    null
  )

  const {
    listBifeArtesanal,
    listBifeComum,
    listBifeFrango,
    listBifePicanha,
    addToCart,
  } = useAppContext()

  const tabs = [
    { id: "picanha", label: "Bife de Picanha", list: listBifePicanha },
    { id: "comum", label: "Bife Comum", list: listBifeComum },
    { id: "frango", label: "Bife de Frango", list: listBifeFrango },
    { id: "artesanal", label: "Bife Artesanal", list: listBifeArtesanal },
  ]

  function handleTabChange(tabId: string) {
    setActiveTab(tabId)
  }

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
    <div className="py-2">
      <section className="w-full flex flex-col gap-5 mt-4 shadow-xl rounded-lg p-4">
        <h3>Escolha o tipo de bife</h3>
        <div className="flex flex-wrap items-center gap-4 text-sm xs:text-base lg:flex-nowrap">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`${
                activeTab === tab.id
                  ? "bg-red-dark text-white"
                  : "bg-gray-200 text-gray-800"
              } px-4 py-2 rounded-md transition-all duration-300 focus:outline-none`}
              onClick={() => handleTabChange(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`mt-4 ${activeTab !== tab.id ? "hidden" : ""}`}
          >
            <div className="flex items-center gap-2 justify-between mt-4 w-full">
              <div className="w-full">
                {tab.list.map((food) => {
                  return (
                    <div
                      className="flex gap-1 justify-between w-full"
                      key={food.id}
                    >
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
                  )
                })}
              </div>
            </div>
          </div>
        ))}

        {selectedFood && (
          <Modal
            closeModal={closeModal}
            food={selectedFood as FoodWithQuantity}
          />
        )}
      </section>
    </div>
  )
}

export default SteakTabs
