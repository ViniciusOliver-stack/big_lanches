import { v4 as uuidv4 } from "uuid";

export const listHotDog = [
  {
    id: uuidv4(),
    name: "Cachorro-quente",
    price: 12.0,
    ingredients: "Pão, 2 salsichas, batata palha e milho verde.",
    image: "https://i.imgur.com/ag1w2nl.png",
  },
  {
    id: uuidv4(),
    name: "Cachorro-quente Premium",
    price: 17.0,
    ingredients: "Pão, 2 salsichas, bacon, queijo, batata palha e milho verde.",
    image: "https://i.imgur.com/BUF1pxQ.png",
  },
  {
    id: uuidv4(),
    name: "Misteg",
    price: 13.0,
    ingredients: "Pão de hambúrguer, ovo, presunto, queijo",
    image: "https://i.imgur.com/4yBbNAj.png",
  },
  {
    id: uuidv4(),
    name: "Misto Quente",
    price: 11.0,
    ingredients: "Pão de forma, presunto, queijo",
    image: "https://i.imgur.com/LHTt9d9.png",
  },
];
