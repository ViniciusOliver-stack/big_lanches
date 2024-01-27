import { Modal } from "@/app/components/Modal";
import { useAppContext } from "@/app/hook/AppContext";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

type Drink = {
  id: string;
  name: string;
  price: number;
  image: string;
  ingredients?: string | null;
};

type DrinksWithQuantity = Drink & { quantity: number };

export function CardDrinks() {
  const { listDrinks } = useAppContext();
  const [selectedDrink, setSelectedDrink] = useState<DrinksWithQuantity | null>(
    null
  );

  function openModal(drink: Drink) {
    const drinkWithNumberPrice: DrinksWithQuantity = {
      ...drink,
      price: Number(drink.price),
      quantity: 1,
    };

    setSelectedDrink(drinkWithNumberPrice);
  }

  function closeModal() {
    setSelectedDrink(null);
  }

  return (
    <>
      {listDrinks.map((drinks) => (
        <motion.div
          key={drinks.id}
          className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-2 rounded-md transition-transform duration-300 ease-in-out w-[130px] h-[240px] text-center flex flex-col items-center justify-between"
        >
          <div>
            <Image src={drinks.image} width={100} height={100} alt="" />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-lg">{drinks.name}</p>
            <p>
              R${" "}
              <span className="text-red-dark font-medium text-lg">
                {drinks.price.toFixed(2)}
              </span>
            </p>
          </div>
          <button
            className="bg-red-dark text-white rounded-sm"
            onClick={() => openModal(drinks)}
          >
            <Plus />
          </button>
        </motion.div>
      ))}

      {selectedDrink && (
        <Modal
          closeModal={closeModal}
          item={selectedDrink as DrinksWithQuantity}
        />
      )}
    </>
  );
}
