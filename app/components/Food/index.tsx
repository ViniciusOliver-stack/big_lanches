import { CardDrinks } from "../CardDrinks";
import { CardFood } from "../CardFood";
import SteakTabs from "../SteakTabs";

export function Food() {
  return (
    <section className="px-8 w-full flex flex-col gap-10 mb-12">
      <div id="sectionLanches">
        <h2 className="text-2xl md:text-3xl md:font-medium">Lanches</h2>
        <SteakTabs />
      </div>

      <div id="sectionHotdog">
        <h2 className="text-2xl md:text-3xl md:font-medium">Cachorro-quente</h2>

        <CardFood />
      </div>

      <div id="sectionBebidas">
        <h2 className="text-2xl md:text-3xl md:font-medium">Bebidas</h2>

        <div className="flex items-center flex-wrap gap-4">
          <CardDrinks />
        </div>
      </div>
    </section>
  );
}
