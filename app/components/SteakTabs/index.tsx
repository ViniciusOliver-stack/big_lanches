import { useEffect, useState } from "react"
import Image from "next/image"
import { useAppContext } from "@/app/hook/AppContext"
import { Plus } from "lucide-react"
import { motion, AnimateSharedLayout } from "framer-motion"
import { Modal } from "../Modal"

type Food = {
  id: string
  name: string
  price: number
  ingredients: string
  imageFood?: string
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
      <section className="w-full flex flex-col gap-5 mt-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg p-4">
        <h3 className="text-xl mt-4">Escolha o tipo de bife</h3>
        <div className="flex md:flex-wrap items-center gap-4 text-sm xs:text-base lg:flex-nowrap overflow-x-auto py-4">
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              layoutId={tab.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              className={`${
                activeTab === tab.id
                  ? "bg-red-dark text-white"
                  : "bg-gray-200 text-gray-800"
              } px-4 py-2 rounded-md transition-all duration-300 focus:outline-none`}
              onClick={() => handleTabChange(tab.id)}
            >
              <p className="whitespace-nowrap">{tab.label}</p>
            </motion.button>
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
                    <motion.div
                      className="flex gap-1 justify-between w-full"
                      key={food.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="flex gap-3 mb-4">
                        <Image
                          src={food.imageFood}
                          width={66}
                          height={66}
                          alt=""
                          className="object-cover h-14 w-auto"
                        />
                        <div>
                          <p className="font-medium md:text-lg">{food.name}</p>
                          <p className="text-xs w-10/12">{food.ingredients}</p>
                          <p>
                            R${" "}
                            <span className="text-red-dark font-medium text-lg">
                              {food.price.toFixed(2)}
                            </span>
                          </p>
                        </div>
                      </div>
                      <button onClick={() => openModal(food)}>
                        <Plus />
                      </button>
                    </motion.div>
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
