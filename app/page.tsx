"use client"

import React from "react"
import { Header } from "./components/Header"
import { FilterFood } from "./components/FilterFood"
import { Food } from "./components/Food"
import Cart from "./cart/page"
import { AppContextProvider, useAppContext } from "./hook/AppContext"

export default function Home() {
  return (
    <AppContextProvider>
      <div className="xl:grid xl:grid-cols-2 gap-9">
        <div>
          <Header />

          <section className="mt-16 px-8 pb-12">
            <ul className="flex items-center justify-between">
              <FilterFood />
              <FilterFood />
              <FilterFood />
            </ul>
          </section>

          <Food />
        </div>

        <div className="hidden lg:block">
          <Cart />
        </div>
      </div>
    </AppContextProvider>
  )
}
