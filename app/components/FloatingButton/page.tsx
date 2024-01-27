"use client";

import { useAppContext } from "@/app/hook/AppContext";
import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi";

export default function FloatingButton() {
  const { cart } = useAppContext();

  return (
    <Link
      href="/cart"
      className="fixed bottom-4 right-4 flex items-center bg-red-dark text-white rounded-full hover:bg-red-700 ease-in-out transition-transform duration-200 p-4 shadow-md focus:outline-none lg:hidden text-xl text-center"
    >
      <FiShoppingCart />

      {cart.length > 0 && (
        <span className="fixed bottom-14 right-4 bg-yellow-dark w-5 h-5 rounded-full ml-2 flex items-center justify-center text-xs">
          !
        </span>
      )}
    </Link>
  );
}
