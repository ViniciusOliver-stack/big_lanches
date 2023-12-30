import { ReactNode, createContext, useContext } from "react"

import { listDrinks } from "@utils/listDrinks"
import { listHotDog } from "@utils/listHotDog"
import { listBifeComum } from "@utils/listBifeComum"
import { listBifePicanha } from "@utils/listBifePicanha"
import { listBifeFrango } from "@utils/listBifeFrango"
import { listBifeArtesanal } from "@utils/listBifeArtesanal"

type AppContextType = {
  listDrinks: typeof listDrinks
  listBifeComum: typeof listBifeComum
  listBifePicanha: typeof listBifePicanha
  listBifeFrango: typeof listBifeFrango
  listBifeArtesanal: typeof listBifeArtesanal
  listHotDog: typeof listHotDog
}

const AppContext = createContext<AppContextType | undefined>(undefined)

type AppContextProviderProps = {
  children: ReactNode
}

export function AppContextProvider({ children }: AppContextProviderProps) {
  return (
    <AppContext.Provider
      value={{
        listDrinks,
        listBifeArtesanal,
        listBifeComum,
        listBifeFrango,
        listBifePicanha,
        listHotDog,
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
