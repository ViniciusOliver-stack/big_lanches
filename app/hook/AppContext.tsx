"use client";

import { ReactNode, createContext, useContext, useState } from "react";

import { listDrinks } from "@utils/listDrinks";
import { listHotDog } from "@utils/listHotDog";
import { listBifeComum } from "@utils/listBifeComum";
import { listBifePicanha } from "@utils/listBifePicanha";
import { listBifeFrango } from "@utils/listBifeFrango";
import { listBifeArtesanal } from "@utils/listBifeArtesanal";

type Item = {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity?: number;
  ingredients?: string | null;
  observation?: string | null;
};

type AppContextType = {
  listDrinks: typeof listDrinks;
  listBifeComum: typeof listBifeComum;
  listBifePicanha: typeof listBifePicanha;
  listBifeFrango: typeof listBifeFrango;
  listBifeArtesanal: typeof listBifeArtesanal;
  listHotDog: typeof listHotDog;
  cart: Item[];
  addToCart: (item: Item) => void;
  updateCartItemQuantity: (itemId: string, quantity: number) => void;
  removeFromCart: (itemId: string) => void;
};

type ItemWithQuantity = Item & { quantity: number; observation?: string };

const AppContext = createContext<AppContextType | undefined>(undefined);

type AppContextProviderProps = {
  children: ReactNode;
};

export function AppContextProvider({ children }: AppContextProviderProps) {
  const [cart, setCart] = useState<ItemWithQuantity[]>([]);

  function addToCart(item: Item | ItemWithQuantity) {
    const existingItemIndex = cart.findIndex(
      (cartItem) => cartItem.id === item.id
    );

    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity +=
        (item as ItemWithQuantity).quantity || 1;
      updatedCart[existingItemIndex].observation =
        (item as ItemWithQuantity).observation || "";
      setCart(updatedCart);
    } else {
      const itemWithQuantity: ItemWithQuantity = {
        ...(item as ItemWithQuantity),
        quantity: (item as ItemWithQuantity).quantity || 1,
        observation: (item as ItemWithQuantity).observation || "",
      };
      setCart((prevCart) => [...prevCart, itemWithQuantity]);
    }
  }

  function updateCartItemQuantity(itemId: string, quantity: number) {
    const updatedCart = cart.map((item) =>
      item.id === itemId ? { ...item, quantity } : item
    );
    setCart(updatedCart);
  }

  function removeFromCart(itemId: string) {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    setCart(updatedCart);
  }

  return (
    <AppContext.Provider
      value={{
        listDrinks,
        listBifeArtesanal,
        listBifeComum,
        listBifeFrango,
        listBifePicanha,
        listHotDog,
        cart,
        addToCart,
        updateCartItemQuantity,
        removeFromCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppContextProvider");
  }
  return context;
};
