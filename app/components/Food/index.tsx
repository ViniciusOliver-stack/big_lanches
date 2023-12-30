import { CardDrinks } from "../CardDrinks"
import SteakTabs from "../SteakTabs"

export function Food() {
  return (
    <section className="px-8 w-full flex flex-col gap-10 mb-12">
      <div>
        <h2 className="text-2xl">Lanches</h2>
        <SteakTabs />
      </div>

      <div>
        <h2 className="text-2xl">Cachorro-quente</h2>

        {/* <CardFood typeFood="HotDog" /> */}
      </div>

      <div>
        <h2 className="text-2xl">Bebidas</h2>

        <div className="flex items-center flex-wrap gap-4">
          <CardDrinks />
        </div>
      </div>
    </section>
  )
}
