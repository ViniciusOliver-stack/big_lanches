import { useState } from "react"
import Image from "next/image"
import { FiMinus, FiPlus, FiTrash } from "react-icons/fi"
import { useAppContext } from "@/app/hook/AppContext"
import { Plus } from "lucide-react"
import { Modal } from "../Modal"

const SteakTabs = () => {
  const [activeTab, setActiveTab] = useState("comum")
  const [selectedFood, setSelectedFood] = useState(null)
  const { listBifeArtesanal, listBifeComum, listBifeFrango, listBifePicanha } =
    useAppContext()

  const tabs = [
    { id: "comum", label: "Bife Comum", list: listBifeComum },
    { id: "picanha", label: "Bife de Picanha", list: listBifePicanha },
    { id: "frango", label: "Bife de Frango", list: listBifeFrango },
    { id: "artesanal", label: "Bife Artesanal", list: listBifeArtesanal },
  ]

  function handleTabChange(tabId: string) {
    setActiveTab(tabId)
  }

  function openModal(food) {
    setSelectedFood(food)
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
                          <p>R$ {food.price}</p>
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

        {selectedFood && <Modal closeModal={closeModal} food={selectedFood} />}
      </section>
    </div>
  )
}

export default SteakTabs
