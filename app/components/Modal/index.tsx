import { useState, useEffect } from "react"
import { FiMinus, FiPlus } from "react-icons/fi"

export function Modal({ closeModal, food }) {
  const [quantity, setQuantity] = useState(1)
  const [observation, setObservation] = useState("")

  useEffect(() => {
    // Add event listener to handle the 'Escape' key press to close the modal
    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        closeModal()
      }
    }

    // Attach the event listener
    document.addEventListener("keydown", handleEscapeKey)

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("keydown", handleEscapeKey)
    }
  }, [closeModal])

  const increaseQuantity = () => {
    setQuantity(quantity + 1)
  }

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const handleObservationChange = (e) => {
    setObservation(e.target.value)
  }

  const handleAddClick = () => {
    // Add functionality here
    // You can use 'quantity' and 'observation' in your logic
  }

  useEffect(() => {
    // Add a class to the body element to disable scrolling
    document.body.style.overflow = "hidden"

    // Cleanup: Remove the class on component unmount
    return () => {
      document.body.style.overflow = ""
    }
  }, [])

  return (
    <>
      <div className="fixed inset-0 overflow-y-auto overflow-x-hidden z-50 flex justify-center items-center bg-black/80">
        <div className="relative p-4 w-full max-w-md max-h-full">
          <div className="relative bg-white rounded-lg shadow">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
              <h3 className="text-lg font-semibold text-gray-900">
                {food.name}
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                onClick={closeModal}
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <div className="p-4 md:p-5 overflow-y-auto max-h-[70vh]">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    Valor do lanche:
                  </p>
                  <p className="text-lg font-semibold text-gray-900">
                    R$ {food.price * quantity}
                  </p>
                </div>
                <div className="flex items-center">
                  <button
                    type="button"
                    className="bg-gray-200 text-gray-800 rounded-md px-2 py-2 mr-2"
                    onClick={decreaseQuantity}
                  >
                    <FiMinus />
                  </button>
                  <p className="text-lg font-semibold text-gray-900">
                    {quantity}
                  </p>
                  <button
                    type="button"
                    className="bg-gray-200 text-gray-800 rounded-md px-2 py-2 ml-2"
                    onClick={increaseQuantity}
                  >
                    <FiPlus />
                  </button>
                </div>
              </div>

              <p className="text-sm font-medium text-gray-900 mt-4">
                Descrição:
              </p>
              <p className="text-sm text-gray-700">{food.ingredients}</p>

              <p className="text-sm font-medium text-gray-900 mt-4">
                Alguma observação?
              </p>
              <textarea
                className="border p-2 rounded-md w-full resize-none"
                placeholder="Ex: 4 lanches sem cebola."
                value={observation}
                onChange={handleObservationChange}
              ></textarea>
              <button
                type="button"
                className="mt-4 bg-red-dark text-white rounded-md px-4 py-2"
                onClick={handleAddClick}
              >
                Adicionar
              </button>
            </div>
          </div>
        </div>
        {/* Overlay */}
      </div>
    </>
  )
}
