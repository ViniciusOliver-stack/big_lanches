import { v4 as uuidv4 } from "uuid"

export const listHotDog = [
  {
    id: uuidv4(),
    name: "Cachorro-quente",
    price: "11.00",
    ingredients: "Pão, 2 salsichas, batata palha e milho verde.",
  },
  {
    id: uuidv4(),
    name: "Cachorro-quente Premium",
    price: "16.00",
    ingredients: "Pão, 2 salsichas, bacon, queijo, batata palha e milho verde.",
  },
  {
    id: uuidv4(),
    name: "Misteg",
    price: "12.00",
    ingredients: "Pão de hambúrguer, ovo, presunto, queijo",
  },
  {
    id: uuidv4(),
    name: "Misto Quente",
    price: "10.00",
    ingredients: "Pão de forma, presunto, queijo",
  },
]
