import { listDrinks } from "@utils/listDrinks"
import { listFoodMenu } from "@utils/listFood"
import { listHotDog } from "@utils/listHotDog"
import { ReactNode, createContext, useContext } from "react"

type AppContextType = {
  listDrinks: typeof listDrinks
  listFoodMenu: typeof listFoodMenu
  listHotDog: typeof listHotDog
}

const AppContext = createContext<AppContextType | undefined>(undefined)

type AppContextProviderProps = {
  children: ReactNode
}

export function AppContextProvider({ children }: AppContextProviderProps) {
  return (
    <AppContext.Provider value={{ listDrinks, listFoodMenu, listHotDog }}>
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
