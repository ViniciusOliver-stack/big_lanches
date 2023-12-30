import { ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import Logo from "../assets/logo.svg"
import {
  FiCreditCard,
  FiDollarSign,
  FiMapPin,
  FiMinus,
  FiPlus,
  FiTrash,
} from "react-icons/fi"
import { PiBankDuotone, PiMoney } from "react-icons/pi"

import { Input } from "../components/Input"

export default function Cart() {
  return (
    <div className="px-4 py-6">
      <Link href="/" className="lg:hidden">
        <ArrowLeft />
      </Link>
      <header className="flex items-center gap-2 mt-8 lg:mt-2">
        <Image src={Logo} alt="" width={66} height={66} />
        <div>
          <p>Big Lanches - Trailer do Edélio</p>
          <Link href="/">
            <p className="text-red-dark">Adicionar mais lanches</p>
          </Link>
        </div>
      </header>

      <section className="mt-8">
        <h3>Finalize seu pedido</h3>

        <div className="flex flex-col gap-5 mt-4 shadow-xl p-4 rounded-lg">
          <div className="flex items-center gap-2 justify-between mt-4">
            <div>
              <Image
                src="https://i.imgur.com/GTgaZIH.png"
                width={66}
                height={66}
                alt=""
              />
            </div>
            <div className="flex flex-col gap-1">
              <p>Hambúrguer</p>
              <p className="text-xs w-[200px]">
                Pão, bife comum, alface, tomate, batata palha e milho verde.
              </p>
              <p>R$ 12,00</p>
            </div>
            <div className="cursor-pointer flex flex-col gap-4 items-end">
              <div className="flex flex-col items-center gap-2">
                <div className="flex gap-2">
                  <button>
                    <FiMinus />
                  </button>
                  <span>0</span>
                  <button>
                    <FiPlus />
                  </button>
                </div>
              </div>
              <div className="text-2xl">
                <FiTrash />
              </div>
            </div>
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="2"
            viewBox="0 0 368 2"
            fill="none"
            className="w-[90%]"
          >
            <path d="M0 1H368" stroke="#E6E5E5" />
          </svg>

          <div className="flex items-center gap-2 justify-between mt-4">
            <div>
              <Image
                src="https://i.imgur.com/GTgaZIH.png"
                width={66}
                height={66}
                alt=""
              />
            </div>
            <div className="flex flex-col gap-1">
              <p>Hambúrguer</p>
              <p className="text-xs w-[200px]">
                Pão, bife comum, alface, tomate, batata palha e milho verde.
              </p>
              <p>R$ 12,00</p>
            </div>
            <div className="cursor-pointer flex flex-col gap-4 items-end">
              <div className="flex flex-col items-center gap-2">
                <div className="flex gap-2">
                  <button>
                    <FiMinus />
                  </button>
                  <span>0</span>
                  <button>
                    <FiPlus />
                  </button>
                </div>
              </div>
              <div className="text-2xl">
                <FiTrash />
              </div>
            </div>
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="2"
            viewBox="0 0 368 2"
            fill="none"
            className="w-[90%]"
          >
            <path d="M0 1H368" stroke="#E6E5E5" />
          </svg>

          <div className="flex items-center gap-2 justify-between mt-4">
            <div>
              <Image
                src="https://i.imgur.com/GTgaZIH.png"
                width={66}
                height={66}
                alt=""
              />
            </div>
            <div className="flex flex-col gap-1">
              <p>Hambúrguer</p>
              <p className="text-xs w-[200px]">
                Pão, bife comum, alface, tomate, batata palha e milho verde.
              </p>
              <p>R$ 12,00</p>
            </div>
            <div className="cursor-pointer flex flex-col gap-4 items-end">
              <div className="flex flex-col items-center gap-2">
                <div className="flex gap-2">
                  <button>
                    <FiMinus />
                  </button>
                  <span>0</span>
                  <button>
                    <FiPlus />
                  </button>
                </div>
              </div>
              <div className="text-2xl">
                <FiTrash />
              </div>
            </div>
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="2"
            viewBox="0 0 368 2"
            fill="none"
            className="w-[90%]"
          >
            <path d="M0 1H368" stroke="#E6E5E5" />
          </svg>

          <div className="bg-yellow-dark rounded-2xl flex flex-col items-center py-5 px-7 text-center">
            <div>
              <p className="uppercase text-white">Brindes</p>
            </div>

            <p>Você acaba de ganhar 2x mini refrigerantes!</p>
          </div>

          <div className="flex flex-col gap-2">
            <p>Resumo de valores</p>

            <div className="flex items-center justify-between">
              <p className="italic">Subtotal</p>
              <p>R$ 27,00</p>
            </div>

            <div className="flex items-center justify-between">
              <p className="italic">Taxa de entrega</p>
              <p>R$ 05,00</p>
            </div>

            <div className="flex items-center justify-between">
              <p className="italic">Total</p>
              <p>R$ 32,00</p>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-5 mt-4 shadow-xl rounded-lg p-4">
        <div>
          <div className="flex items-center gap-3">
            <div className="text-2xl text-red-dark">
              <FiMapPin />
            </div>
            <div>
              <p>Endereço de Entrega</p>
              <p className="text-xs">
                Informe o endereço onde deseja receber seu pedido.
              </p>
            </div>
          </div>

          <form className="mt-4 flex flex-col gap-3">
            <Input
              type="text"
              placeholder="CEP"
              className="border rounded-md p-3 focus:outline-yellow-dark"
            />
            <Input
              type="text"
              placeholder="Rua"
              className="border rounded-md p-3 focus:outline-yellow-dark"
            />
            <div className="grid grid-cols-2 gap-2">
              <Input
                type="text"
                placeholder="Número"
                className="border rounded-md p-3 focus:outline-yellow-dark"
              />
              <Input
                type="text"
                placeholder="Complemento"
                className="border rounded-md p-3 focus:outline-yellow-dark"
              />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <Input
                type="text"
                placeholder="Bairro"
                className="border rounded-md p-3 focus:outline-yellow-dark"
              />
              <Input
                type="text"
                placeholder="UF"
                className="border rounded-md p-3 focus:outline-yellow-dark"
              />
            </div>
            <Input
              type="text"
              placeholder="Cidade"
              className="border rounded-md p-3 focus:outline-yellow-dark"
            />
          </form>
        </div>
      </section>

      <section className="flex flex-col gap-5 mt-4 shadow-xl rounded-lg p-4">
        <div className="flex items-center gap-3">
          <div className="text-2xl text-red-dark">
            <div className="text-2xl">
              <FiDollarSign />
            </div>
          </div>
          <div>
            <p>Forma de pagamento</p>
            <p className="text-xs">O pagamento é feito na entrega.</p>
            <p className="text-xs">Escolha o meio de pagamento</p>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <button className="flex items-center gap-3 bg-base-button border rounded-md p-4 hover:border-purple transition-all duration-75 uppercase  text-xs">
            <div className="text-2xl">
              <FiCreditCard />
            </div>
            <span>Cartão de Crédito</span>
          </button>

          <button className="flex items-center gap-3 bg-base-button border rounded-md p-4 hover:border-purple transition-all duration-75 uppercase  text-xs">
            <div className="text-2xl">
              <PiBankDuotone />
            </div>
            <span>Cartão de Débito</span>
          </button>

          <button className="flex items-center gap-3 bg-base-button border rounded-md p-4 hover:border-purple transition-all duration-75 uppercase  text-xs">
            <div className="text-2xl">
              <PiMoney />
            </div>
            <span>Dinheiro ou PIX</span>
          </button>
        </div>
      </section>
    </div>
  )
}
