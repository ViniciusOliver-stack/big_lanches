import { useAppContext } from "@/app/hook/AppContext";
import { Plus } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Modal } from "../Modal";
import { motion } from "framer-motion";

type Food = {
  id: string;
  name: string;
  price: number;
  image: string;
  ingredients?: string | null;
};

type FoodWithQuantity = Food & { quantity: number };

export function CardFood() {
  const { listHotDog } = useAppContext();
  const [selectedFood, setSelectedFood] = useState<FoodWithQuantity | null>(
    null
  );

  function openModal(food: Food) {
    const foodWithNumberPrice: FoodWithQuantity = {
      ...food,
      price: Number(food.price),
      quantity: 1,
    };

    setSelectedFood(foodWithNumberPrice);
  }

  function closeModal() {
    setSelectedFood(null);
  }

  return (
    <div className="w-full flex flex-col gap-2 mt-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg p-4">
      {listHotDog.map((food) => {
        return (
          <motion.div
            className="flex items-center gap-2 justify-between mt-4 w-full"
            key={food.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-full">
              <div className="flex gap-1 justify-between w-full" key={1}>
                <div className="flex gap-3 mb-4">
                  <Image
                    src={food.image}
                    width={66}
                    height={66}
                    alt=""
                    className="object-cover h-14 w-14"
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
              </div>
            </div>
          </motion.div>
        );
      })}

      {selectedFood && (
        <Modal
          closeModal={closeModal}
          item={selectedFood as FoodWithQuantity}
        />
      )}
    </div>
  );
}
