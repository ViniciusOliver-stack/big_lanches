"use client"

import { ReactNode, createContext, useContext, useState } from "react"

import { listDrinks } from "@utils/listDrinks"
import { listHotDog } from "@utils/listHotDog"
import { listBifeComum } from "@utils/listBifeComum"
import { listBifePicanha } from "@utils/listBifePicanha"
import { listBifeFrango } from "@utils/listBifeFrango"
import { listBifeArtesanal } from "@utils/listBifeArtesanal"

type Food = {
  id: string
  name: string
  price: number
  ingredients: string
  quantity?: number
}

type AppContextType = {
  listDrinks: typeof listDrinks
  listBifeComum: typeof listBifeComum
  listBifePicanha: typeof listBifePicanha
  listBifeFrango: typeof listBifeFrango
  listBifeArtesanal: typeof listBifeArtesanal
  listHotDog: typeof listHotDog
  cart: Food[]
  addToCart: (food: Food) => void
  updateCartItemQuantity: (itemId: string, quantity: number) => void
  removeFromCart: (itemId: string) => void
}

type FoodWithQuantity = Food & { quantity: number }

const AppContext = createContext<AppContextType | undefined>(undefined)

type AppContextProviderProps = {
  children: ReactNode
}

export function AppContextProvider({ children }: AppContextProviderProps) {
  const [cart, setCart] = useState<FoodWithQuantity[]>([])

  function addToCart(food: Food | FoodWithQuantity) {
    const existingItemIndex = cart.findIndex((item) => item.id === food.id)

    if (existingItemIndex !== -1) {
      const updatedCart = [...cart]
      updatedCart[existingItemIndex].quantity +=
        (food as FoodWithQuantity).quantity || 1
      setCart(updatedCart)
    } else {
      const foodWithQuantity: FoodWithQuantity = {
        ...(food as FoodWithQuantity),
        quantity: (food as FoodWithQuantity).quantity || 1,
      }
      setCart((prevCart) => [...prevCart, foodWithQuantity])
    }
  }

  function updateCartItemQuantity(itemId: string, quantity: number) {
    const updatedCart = cart.map((item) =>
      item.id === itemId ? { ...item, quantity } : item
    )
    setCart(updatedCart)
  }

  function removeFromCart(itemId: string) {
    const updatedCart = cart.filter((item) => item.id !== itemId)
    setCart(updatedCart)
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
  )
}

export const useAppContext = () => {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error("useAppContext must be used within an AppContextProvider")
  }
  return context
}
