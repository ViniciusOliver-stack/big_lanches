"use client"

import { useState, useEffect, ChangeEvent, useCallback } from "react"
import { ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import {
  FiCreditCard,
  FiDollarSign,
  FiMapPin,
  FiMinus,
  FiPlus,
  FiTrash,
} from "react-icons/fi"
import { PiBankDuotone, PiMoney } from "react-icons/pi"

import Logo from "../assets/logo.svg"
import { Input } from "../components/Input"
import { useAppContext } from "../hook/AppContext"
import cartEmpty from "../assets/cartEmpty.svg"

interface AddressState {
  cep: string
  address: string
  number: string
  complement: string
  neighborhood: string
  city: string
  uf: string
}

export default function Cart() {
  const { cart, updateCartItemQuantity, removeFromCart } = useAppContext()
  const [deliveryFee, setDeliveryFee] = useState(6)
  const [subtotal, setSubtotal] = useState(0)
  const [total, setTotal] = useState(subtotal + deliveryFee)
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string>("")
  const [addressState, setAddressState] = useState<AddressState>({
    cep: "",
    address: "",
    number: "",
    complement: "",
    neighborhood: "",
    city: "",
    uf: "",
  })
  const [miniRefrigerantes, setMiniRefrigerantes] = useState(0)

  const { cep, address, number, complement, neighborhood, city, uf } =
    addressState

  useEffect(() => {
    const totalLanches = cart.reduce((total, item) => total + item.quantity!, 0)
    const novaQuantidadeMiniRefrigerantes = totalLanches

    setMiniRefrigerantes(novaQuantidadeMiniRefrigerantes)
  }, [cart])

  const fetchAddressInfo = useCallback(async () => {
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
      const data = await response.json()

      if (!data.erro) {
        setAddressState((prev) => ({
          ...prev,
          address: data.logradouro,
          number: data.numero || "",
          complement: data.complemento || "",
          neighborhood: data.bairro,
          city: data.localidade,
          uf: data.uf,
        }))
      }
    } catch (error) {
      console.error("Error fetching address:", error)
    }
  }, [cep])

  useEffect(() => {
    if (cep.length >= 5) {
      fetchAddressInfo()
    }
  }, [cep, fetchAddressInfo])

  const handleInputChange =
    (key: keyof AddressState) => (e: ChangeEvent<HTMLInputElement>) => {
      setAddressState((prev) => ({ ...prev, [key]: e.target.value }))
    }

  useEffect(() => {
    const newSubtotal = cart.reduce(
      (total, item) => total + item.price * item.quantity!,
      0
    )
    setSubtotal(newSubtotal)

    let newDeliveryFee = deliveryFee

    if (neighborhood.toLowerCase() === "brumal" || cep === "35966-971") {
      newDeliveryFee = 15
    }

    setTotal(newSubtotal + newDeliveryFee)

    setDeliveryFee(newDeliveryFee)
  }, [cart, deliveryFee, neighborhood, cep])

  const handlePaymentMethodSelection = (method: string) => {
    setSelectedPaymentMethod(method)
  }

  function handleIncrement(itemId: string) {
    updateCartItemQuantity(
      itemId,
      (cart.find((item) => item.id === itemId)?.quantity || 0) + 1
    )
  }

  function handleDecrement(itemId: string) {
    const selectedItem = cart.find((item) => item.id === itemId)
    const newQuantity = Math.max((selectedItem?.quantity ?? 1) - 1, 1)

    updateCartItemQuantity(itemId, newQuantity)
  }

  function handleRemove(itemId: string) {
    removeFromCart(itemId)
  }

  const handleFinishOrder = () => {
    if (cart.length === 0) {
      toast.error("Adicione itens ao carrinho antes de finalizar o pedido.")
      return
    }

    if (!cep || !address || !selectedPaymentMethod) {
      toast.error(
        "Preencha todos os campos obrigatórios antes de finalizar o pedido."
      )
      return
    }

    const itemsText = cart
      .map((item) => {
        const itemText = `*${item.name}*%0AQuantidade: ${
          item.quantity
        }%0AValor: R$ ${(item.price * item.quantity!).toFixed(2)}`

        // Inclua a observação se existir
        if (item.observation) {
          return `${itemText}%0AObservação: ${item.observation}%0A------------------------------------------`
        }

        return `${itemText}%0A------------------------------------------`
      })
      .join("%0A------------------------------------------%0A")

    const pedidoText = `*Olá, gostaria de fazer um pedido*%0A*Os itens escolhidos são:*%0A%0A${itemsText}%0A%0AResumo de valores:*%0ASubtotal: R$ ${subtotal.toFixed(
      2
    )} %0ATaxa de Entrega: R$ ${deliveryFee.toFixed(
      2
    )} %0ATotal: R$ ${total.toFixed(
      2
    )} %0A%0A*Forma de Pagamento:* ${selectedPaymentMethod} %0A%0A*Endereço para entrega:*%0A*CEP*: ${cep}%0A*Rua:* ${address}%0A*Número:* ${number}%0A*Complemento:* ${complement}%0A*Bairro:* ${neighborhood}%0A*Cidade:* ${city}%0A*UF:* ${uf}`

    const whatsappLink = `https://api.whatsapp.com/send?phone=5577988129537&text=${pedidoText}`

    window.open(whatsappLink, "_blank")
  }

  return (
    <div className="px-4 py-6">
      <Link href="/" className="lg:hidden">
        <ArrowLeft />
      </Link>
      <header className="flex items-center gap-2 mt-8 lg:mt-2">
        <Image src={Logo} alt="" width={66} height={66} />
        <div>
          <p className="text-xl">Big Lanches - Trailer do Edélio</p>
          <Link href="/">
            <p className="text-red-dark">Adicionar mais lanches</p>
          </Link>
        </div>
      </header>

      <section className="mt-8">
        <h3 className="md:text-3xl md:font-medium">Finalize seu pedido</h3>

        <div className="flex flex-col gap-5 mt-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-4 rounded-lg">
          {cart.length === 0 ? (
            <div className="w-full flex flex-col items-center justify-center gap-4">
              <Image src={cartEmpty} width={150} height={150} alt="" />
              <p className="md:text-lg font-medium">
                Ops, não tem nenhum lanche aqui.
              </p>
            </div>
          ) : (
            <div>
              {cart.map((item) => (
                <div
                  className="flex items-center gap-2 justify-between mt-4"
                  key={item.id}
                >
                  <div>
                    <Image
                      src="https://i.imgur.com/GTgaZIH.png"
                      width={66}
                      height={66}
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <p>{item.name}</p>
                    <p className="text-xs w-[200px]">{item.ingredients}</p>
                    <p>
                      R$ {item.price.toFixed(2)} x {item.quantity} ={" "}
                      {(item.price * item.quantity!).toFixed(2)}
                    </p>
                    {item.observation && (
                      <p className="text-xs">Observation: {item.observation}</p>
                    )}
                  </div>
                  <div className="cursor-pointer flex flex-col gap-4 items-end">
                    <div className="flex flex-col items-center gap-2">
                      <div className="flex gap-2">
                        <button onClick={() => handleDecrement(item.id)}>
                          <FiMinus />
                        </button>
                        <span>{item.quantity}</span>
                        <button onClick={() => handleIncrement(item.id)}>
                          <FiPlus />
                        </button>
                      </div>
                    </div>
                    <div className="text-2xl">
                      <button onClick={() => handleRemove(item.id)}>
                        <FiTrash />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="flex flex-col gap-2">
            {cart.length > 0 && (
              <div className="flex flex-col gap-8">
                <div className="bg-yellow-dark rounded-2xl flex flex-col items-center py-5 px-7 text-center">
                  <div>
                    <p className="uppercase text-white">Brindes</p>
                  </div>

                  <p>
                    Você acaba de ganhar {miniRefrigerantes}x mini
                    refrigerantes!
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  <p>Resumo de valores</p>

                  <div className="flex items-center justify-between mt-4">
                    <p className="italic">Subtotal</p>
                    <p>R$ {subtotal.toFixed(2)}</p>
                  </div>

                  <div className="flex items-center justify-between">
                    <p className="italic">Taxa de entrega</p>
                    <p>R$ {deliveryFee.toFixed(2)}</p>
                  </div>

                  <div className="flex items-center justify-between">
                    <p className="italic">Total</p>
                    <p>R$ {total.toFixed(2)}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-5 mt-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg p-4">
        <div>
          <div className="flex items-center gap-3">
            <div className="text-2xl text-red-dark">
              <FiMapPin />
            </div>
            <div>
              <p className="text-lg font-medium">Endereço de Entrega</p>
              <p className="text-xs">
                Informe o endereço onde deseja receber seu pedido.
              </p>
            </div>
          </div>

          <form className="mt-4 flex flex-col gap-3">
            <Input
              type="text"
              placeholder="CEP"
              value={cep}
              onChange={handleInputChange("cep")}
              className="border rounded-md p-3 focus:outline-yellow-dark"
            />

            <Input
              type="text"
              placeholder="Rua"
              value={address}
              onChange={handleInputChange("address")}
              className="border rounded-md p-3 focus:outline-yellow-dark"
            />

            <div className="grid grid-cols-2 gap-2">
              <Input
                type="text"
                placeholder="Número"
                value={number}
                onChange={handleInputChange("number")}
                className="border rounded-md p-3 focus:outline-yellow-dark"
              />
              <Input
                type="text"
                placeholder="Complemento"
                value={complement}
                onChange={handleInputChange("complement")}
                className="border rounded-md p-3 focus:outline-yellow-dark"
              />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <Input
                type="text"
                placeholder="Bairro"
                value={neighborhood}
                onChange={handleInputChange("neighborhood")}
                className="border rounded-md p-3 focus:outline-yellow-dark"
              />
              <Input
                type="text"
                placeholder="UF"
                value={uf}
                onChange={handleInputChange("uf")}
                className="border rounded-md p-3 focus:outline-yellow-dark"
              />
            </div>
            <Input
              type="text"
              placeholder="Cidade"
              value={city}
              onChange={handleInputChange("city")}
              className="border rounded-md p-3 focus:outline-yellow-dark"
            />
          </form>
        </div>
      </section>

      <section className="flex flex-col gap-5 mt-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg p-4">
        <div className="flex items-center gap-3">
          <div className="text-2xl text-red-dark">
            <div className="text-2xl">
              <FiDollarSign />
            </div>
          </div>
          <div>
            <p className="text-lg font-medium">Forma de pagamento</p>
            <p className="text-xs">O pagamento é feito na entrega.</p>
            <p className="text-xs">Escolha o meio de pagamento</p>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <button
            className={`flex items-center gap-3 bg-base-button border rounded-md p-4 hover:border-purple transition-all duration-75 uppercase text-xs ${
              selectedPaymentMethod === "Cartao de Credito"
                ? "border border-yellow-dark transition-all duration-150"
                : ""
            }`}
            onClick={() => handlePaymentMethodSelection("Cartao de Credito")}
          >
            <div className="text-2xl">
              <FiCreditCard />
            </div>
            <span>Cartão de Crédito</span>
          </button>

          <button
            className={`flex items-center gap-3 bg-base-button border rounded-md p-4 hover:border-purple transition-all duration-75 uppercase text-xs ${
              selectedPaymentMethod === "Cartao de Debito"
                ? "border border-yellow-dark transition-all duration-150"
                : ""
            }`}
            onClick={() => handlePaymentMethodSelection("Cartao de Debito")}
          >
            <div className="text-2xl">
              <PiBankDuotone />
            </div>
            <span>Cartão de Débito</span>
          </button>

          <button
            className={`flex items-center gap-3 bg-base-button border rounded-md p-4 hover:border-purple transition-all duration-75 uppercase text-xs ${
              selectedPaymentMethod === "Dinheiro ou Pix"
                ? "border border-yellow-dark transition-all duration-150"
                : ""
            }`}
            onClick={() => handlePaymentMethodSelection("Dinheiro ou Pix")}
          >
            <div className="text-2xl">
              <PiMoney />
            </div>
            <span>Dinheiro ou PIX</span>
          </button>
        </div>
      </section>

      <div className="flex items-center justify-center mt-12">
        <button
          className="bg-red-dark text-white px-4 py-2 rounded-lg"
          onClick={handleFinishOrder}
        >
          Finalizar Pedido
        </button>
      </div>

      <ToastContainer />
    </div>
  )
}
