import Image from "next/image"

import { FiShoppingCart } from "react-icons/fi"
import { Search } from "../Search"

import Logo from "../../assets/logo.svg"
import Link from "next/link"

export function Header() {
  return (
    <header className="relative">
      <Image
        src="https://i.imgur.com/XCQV4Nm.jpg"
        width={1000}
        height={1000}
        alt={""}
        className="md:h-72 object-cover"
      />
      <div className="w-full px-4 py-8 absolute top-0 z-30 text-white flex items-center justify-between lg:justify-start gap-6">
        <div>
          <Image
            src={Logo}
            width={500}
            height={500}
            alt={""}
            className="w-20"
          />
        </div>

        <Search />

        <div className="text-2xl lg:hidden">
          <Link href="/cart">
            <FiShoppingCart />
          </Link>
        </div>
      </div>

      <div className="bg-black-medium mx-6 absolute -bottom-8 text-white rounded-2xl uppercase left-0 right-0  md:w-[450px] md:m-auto">
        {/* Anúncio */}
        <p className="text-center p-2">
          Na compra de qualquer lanche, ganhe um mini{" "}
          <span className="text-yellow-dark">Refrigerante</span>!
        </p>
      </div>
    </header>
  )
}
