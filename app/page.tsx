"use client"

import React from "react"
import { Header } from "./components/Header"
import { FilterFood } from "./components/FilterFood"
import { Food } from "./components/Food"
import Cart from "./cart/page"

export default function Home() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  const linkSections = [
    {
      name: "Lanches",
      image: "https://i.imgur.com/GTgaZIH.png",
      bgColor: "bg-red-dark",
    },
    {
      name: "Hotdog",
      image: "https://i.imgur.com/6hGQKaZ.png",
      bgColor: "bg-yellow-500",
    },
    {
      name: "Bebidas",
      image: "https://i.imgur.com/YEwyruF.png",
      bgColor: "bg-blue-500",
    },
  ]

  return (
    <div className="xl:grid xl:grid-cols-2 gap-9">
      <div>
        <Header />

        <section className="mt-16 px-8 pb-12">
          <ul className="flex items-center justify-around">
            {linkSections.map((section) => (
              <FilterFood
                key={section.name}
                section={section}
                onClick={() => scrollToSection(`section${section.name}`)}
              />
            ))}
          </ul>
        </section>
        <Food />
      </div>

      <div className="hidden lg:block">
        <Cart />
      </div>
    </div>
  )
}
