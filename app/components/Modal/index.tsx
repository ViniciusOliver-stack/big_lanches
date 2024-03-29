import { useAppContext } from "@/app/hook/AppContext";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

type Item = {
  id: string;
  name: string;
  price: number;
  ingredients?: string | null;
  image: string;
};

type ItemWithQuantity = Item & { quantity: number };

type ItemWithObservation = ItemWithQuantity & { observation: string | null };

type ModalProps = {
  closeModal: () => void;
  item: ItemWithQuantity;
};

export function Modal({ closeModal, item }: ModalProps) {
  const [quantity, setQuantity] = useState(item?.quantity || 1);
  const [observation, setObservation] = useState("");

  const modalVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const transition = {
    duration: 0.4,
    delay: 0.2,
  };

  const { addToCart } = useAppContext();

  useEffect(() => {
    function handleEscapeKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeModal();
      }
    }

    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [closeModal]);

  function increaseQuantity() {
    setQuantity(quantity + 1);
  }

  function decreaseQuantity() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  const priceQuantity = item?.price * quantity;

  function handleObservationChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setObservation(e.target.value);
  }

  function handleAddClick() {
    const ItemWithObservation: ItemWithObservation = {
      ...item,
      quantity,
      observation,
    };
    addToCart(ItemWithObservation);
    closeModal();
  }

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <>
      <motion.div
        className="fixed inset-0 overflow-y-auto overflow-x-hidden z-50 flex justify-center items-center bg-black/80"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={overlayVariants}
        transition={transition}
      >
        <motion.div
          className="relative p-4 w-full max-w-md max-h-full"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={modalVariants}
          transition={transition}
        >
          <div className="relative bg-white rounded-lg shadow">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
              <h3 className="text-lg font-semibold text-gray-900">
                {item?.name}
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
                    R$ {priceQuantity.toFixed(2)}
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
              <p className="text-sm text-gray-700">{item?.ingredients}</p>

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
        </motion.div>
      </motion.div>
    </>
  );
}
