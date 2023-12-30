import { v4 as uuidv4 } from "uuid"

export const listFoodMenu = [
  {
    id: uuidv4(),
    name: "Hambúrguer",
    price: "12.00",
    ingredients: "Pão, bife comum, alface, tomate, batata palha e milho verde.",
    meatOptions: [
      { type: "Bife Comum", price: 2.0 },
      { type: "Bife de Picanha", price: 4.0 },
      { type: "Bife de Frango", price: 6.0 },
      { type: "Bife Artesanal", price: 8.0 },
    ],
  },
  {
    id: uuidv4(),
    name: "X-Burguer",
    price: "15.00",
    ingredients:
      "Pão, bife comum, queijo, alface, tomate, batata palha e milho verde.",
    meatOptions: [
      { type: "Bife Comum", price: 2.0 },
      { type: "Bife de Picanha", price: 4.0 },
      { type: "Bife de Frango", price: 6.0 },
      { type: "Bife Artesanal", price: 8.0 },
    ],
  },
  {
    id: uuidv4(),
    name: "X-Salada",
    price: "12.00",
    ingredients:
      "Pão, bife comum, queijo, alface, presunto, tomate, batata palha e milho verde.",
    meatOptions: [
      { type: "Bife Comum", price: 2.0 },
      { type: "Bife de Picanha", price: 4.0 },
      { type: "Bife de Frango", price: 6.0 },
      { type: "Bife Artesanal", price: 8.0 },
    ],
  },
  {
    id: uuidv4(),
    name: "Egg Burguer",
    price: "16.00",
    ingredients:
      "Pão, bife comum, ovo, alface, tomate, batata palha e milho verde.",
    meatOptions: [
      { type: "Bife Comum", price: 2.0 },
      { type: "Bife de Picanha", price: 4.0 },
      { type: "Bife de Frango", price: 6.0 },
      { type: "Bife Artesanal", price: 8.0 },
    ],
  },
  {
    id: uuidv4(),
    name: "X-Egg Burguer",
    price: "20.00",
    ingredients:
      "Pão, bife comum, ovo, queijo, alface, tomate, batata palha e milho verde.",
    meatOptions: [
      { type: "Bife Comum", price: 2.0 },
      { type: "Bife de Picanha", price: 4.0 },
      { type: "Bife de Frango", price: 6.0 },
      { type: "Bife Artesanal", price: 8.0 },
    ],
  },
  {
    id: uuidv4(),
    name: "X-Bacon Burguer",
    price: "20.00",
    ingredients:
      "Pão, bife comum, bacon, queijo, alface, tomate, batata palha e milho verde.",
    meatOptions: [
      { type: "Bife Comum", price: 2.0 },
      { type: "Bife de Picanha", price: 4.0 },
      { type: "Bife de Frango", price: 6.0 },
      { type: "Bife Artesanal", price: 8.0 },
    ],
  },
  {
    id: uuidv4(),
    name: "Bacon Burguer",
    price: "17.00",
    ingredients:
      "Pão, bife comum, bacaon, alface, tomate, batata palha e milho verde.",
    meatOptions: [
      { type: "Bife Comum", price: 2.0 },
      { type: "Bife de Picanha", price: 4.0 },
      { type: "Bife de Frango", price: 6.0 },
      { type: "Bife Artesanal", price: 8.0 },
    ],
  },
  {
    id: uuidv4(),
    name: "X-Egg Bacon Burguer",
    price: "24.00",
    ingredients:
      "Pão, bife comum, bacon, ovo, queijo, alface, tomate, batata palha e milho verde.",
    meatOptions: [
      { type: "Bife Comum", price: 2.0 },
      { type: "Bife de Picanha", price: 4.0 },
      { type: "Bife de Frango", price: 6.0 },
      { type: "Bife Artesanal", price: 8.0 },
    ],
  },
  {
    id: uuidv4(),
    name: "X-Tudo",
    price: "26.00",
    ingredients:
      "Pão, bife comum, bacon, ovo, queijo, presunto, alface, tomate, batata palha e milho verde.",
    meatOptions: [
      { type: "Bife Comum", price: 2.0 },
      { type: "Bife de Picanha", price: 4.0 },
      { type: "Bife de Frango", price: 6.0 },
      { type: "Bife Artesanal", price: 8.0 },
    ],
  },
  {
    id: uuidv4(),
    name: "Hambúrguer de Picanha",
    price: "16.00",
    ingredients:
      "Pão, bife de picanha, alface, tomate, batata palha e milho verde.",
    meatOptions: [
      { type: "Bife Comum", price: 2.0 },
      { type: "Bife de Picanha", price: 4.0 },
      { type: "Bife de Frango", price: 6.0 },
      { type: "Bife Artesanal", price: 8.0 },
    ],
  },
  {
    id: uuidv4(),
    name: "X-Picanha",
    price: "18.00",
    ingredients:
      "Pão, bife de picanha, queijo, alface, tomate, batata palha e milho verde.",
    meatOptions: [
      { type: "Bife Comum", price: 2.0 },
      { type: "Bife de Picanha", price: 4.0 },
      { type: "Bife de Frango", price: 6.0 },
      { type: "Bife Artesanal", price: 8.0 },
    ],
  },
  {
    id: uuidv4(),
    name: "X-Salada Picanha",
    price: "19.00",
    ingredients:
      "Pão, bife de picanha, queijo, presunto, alface, tomate, batata palha e milho verde.",
    meatOptions: [
      { type: "Bife Comum", price: 2.0 },
      { type: "Bife de Picanha", price: 4.0 },
      { type: "Bife de Frango", price: 6.0 },
      { type: "Bife Artesanal", price: 8.0 },
    ],
  },
  {
    id: uuidv4(),
    name: "Egg Picanha",
    price: "18.00",
    ingredients:
      "Pão, bife de picanha, ovo, alface, tomate, batata palha e milho verde.",
    meatOptions: [
      { type: "Bife Comum", price: 2.0 },
      { type: "Bife de Picanha", price: 4.0 },
      { type: "Bife de Frango", price: 6.0 },
      { type: "Bife Artesanal", price: 8.0 },
    ],
  },
  {
    id: uuidv4(),
    name: "X-Egg Picanha",
    price: "22.00",
    ingredients:
      "Pão, bife de picanha, ovo, queijo, alface, tomate, batata palha e milho verde.",
    meatOptions: [
      { type: "Bife Comum", price: 2.0 },
      { type: "Bife de Picanha", price: 4.0 },
      { type: "Bife de Frango", price: 6.0 },
      { type: "Bife Artesanal", price: 8.0 },
    ],
  },
  {
    id: uuidv4(),
    name: "X-Bacon Picanha",
    price: "22.00",
    ingredients:
      "Pão, bife de picanha, bacon, queijo, alface, tomate, batata palha e milho verde.",
    meatOptions: [
      { type: "Bife Comum", price: 2.0 },
      { type: "Bife de Picanha", price: 4.0 },
      { type: "Bife de Frango", price: 6.0 },
      { type: "Bife Artesanal", price: 8.0 },
    ],
  },
  {
    id: uuidv4(),
    name: "Bacon Picanha",
    price: "20.00",
    ingredients:
      "Pão, bife de picanha, bacon, alface, tomate, batata palha e milho verde.",
    meatOptions: [
      { type: "Bife Comum", price: 2.0 },
      { type: "Bife de Picanha", price: 4.0 },
      { type: "Bife de Frango", price: 6.0 },
      { type: "Bife Artesanal", price: 8.0 },
    ],
  },
  {
    id: uuidv4(),
    name: "X-Egg Bacon Picanha",
    price: "25.00",
    ingredients:
      "Pão, bife de picanha, bacon, ovo, queijo, alface, tomate, batata palha e milho verde.",
    meatOptions: [
      { type: "Bife Comum", price: 2.0 },
      { type: "Bife de Picanha", price: 4.0 },
      { type: "Bife de Frango", price: 6.0 },
      { type: "Bife Artesanal", price: 8.0 },
    ],
  },
  {
    id: uuidv4(),
    name: "X-Tudo Picanha",
    price: "28.00",
    ingredients:
      "Pão, bife de picanha, bacon, ovo, queijo, presunto, alface, tomate, batata palha e milho verde.",
    meatOptions: [
      { type: "Bife Comum", price: 2.0 },
      { type: "Bife de Picanha", price: 4.0 },
      { type: "Bife de Frango", price: 6.0 },
      { type: "Bife Artesanal", price: 8.0 },
    ],
  },
  {
    id: uuidv4(),
    name: "Hambúrguer de frango",
    price: "14.00",
    ingredients:
      "Pão, bife frango, alface, tomate, batata palha e milho verde.",
    meatOptions: [
      { type: "Bife Comum", price: 2.0 },
      { type: "Bife de Picanha", price: 4.0 },
      { type: "Bife de Frango", price: 6.0 },
      { type: "Bife Artesanal", price: 8.0 },
    ],
  },
  {
    id: uuidv4(),
    name: "X-Frango",
    price: "16.00",
    ingredients:
      "Pão, bife frango, queijo, alface, tomate, batata palha e milho verde.",
    meatOptions: [
      { type: "Bife Comum", price: 2.0 },
      { type: "Bife de Picanha", price: 4.0 },
      { type: "Bife de Frango", price: 6.0 },
      { type: "Bife Artesanal", price: 8.0 },
    ],
  },
  {
    id: uuidv4(),
    name: "X-Salada Frango",
    price: "18.00",
    ingredients:
      "Pão, bife frango, queijo, presunto, alface, tomate, batata palha e milho verde.",
    meatOptions: [
      { type: "Bife Comum", price: 2.0 },
      { type: "Bife de Picanha", price: 4.0 },
      { type: "Bife de Frango", price: 6.0 },
      { type: "Bife Artesanal", price: 8.0 },
    ],
  },
  {
    id: uuidv4(),
    name: "Egg Frango",
    price: "18.00",
    ingredients:
      "Pão, bife frango, ovo, alface, tomate, batata palha e milho verde.",
    meatOptions: [
      { type: "Bife Comum", price: 2.0 },
      { type: "Bife de Picanha", price: 4.0 },
      { type: "Bife de Frango", price: 6.0 },
      { type: "Bife Artesanal", price: 8.0 },
    ],
  },
  {
    id: uuidv4(),
    name: "X-Egg Frango",
    price: "20.00",
    ingredients:
      "Pão, bife frango, ovo, queijo, alface, tomate, batata palha e milho verde.",
    meatOptions: [
      { type: "Bife Comum", price: 2.0 },
      { type: "Bife de Picanha", price: 4.0 },
      { type: "Bife de Frango", price: 6.0 },
      { type: "Bife Artesanal", price: 8.0 },
    ],
  },
  {
    id: uuidv4(),
    name: "X-Bacon Frango",
    price: "20.00",
    ingredients:
      "Pão, bife frango, bacon, queijo, alface, tomate, batata palha e milho verde.",
    meatOptions: [
      { type: "Bife Comum", price: 2.0 },
      { type: "Bife de Picanha", price: 4.0 },
      { type: "Bife de Frango", price: 6.0 },
      { type: "Bife Artesanal", price: 8.0 },
    ],
  },
  {
    id: uuidv4(),
    name: "Bacon Frango",
    price: "18.00",
    ingredients:
      "Pão, bife frango, alface, tomate, batata palha e milho verde.",
    meatOptions: [
      { type: "Bife Comum", price: 2.0 },
      { type: "Bife de Picanha", price: 4.0 },
      { type: "Bife de Frango", price: 6.0 },
      { type: "Bife Artesanal", price: 8.0 },
    ],
  },
  {
    id: uuidv4(),
    name: "X-Egg Bacon Frango",
    price: "24.00",
    ingredients:
      "Pão, bife frango, bacon, ovo, queijo, alface, tomate, batata palha e milho verde.",
    meatOptions: [
      { type: "Bife Comum", price: 2.0 },
      { type: "Bife de Picanha", price: 4.0 },
      { type: "Bife de Frango", price: 6.0 },
      { type: "Bife Artesanal", price: 8.0 },
    ],
  },
  {
    id: uuidv4(),
    name: "X-Tudo Frango",
    price: "26.00",
    ingredients:
      "Pão, bife frango, bacon, ovo, queijo, presunto, alface, tomate, batata palha e milho verde.",
    meatOptions: [
      { type: "Bife Comum", price: 2.0 },
      { type: "Bife de Picanha", price: 4.0 },
      { type: "Bife de Frango", price: 6.0 },
      { type: "Bife Artesanal", price: 8.0 },
    ],
  },
  {
    id: uuidv4(),
    name: "Hambúrguer Artesanal",
    price: "17.00",
    ingredients:
      "Pão, bife artesanal, alface, tomate, batata palha e milho verde.",
    meatOptions: [
      { type: "Bife Comum", price: 2.0 },
      { type: "Bife de Picanha", price: 4.0 },
      { type: "Bife de Frango", price: 6.0 },
      { type: "Bife Artesanal", price: 8.0 },
    ],
  },
  {
    id: uuidv4(),
    name: "X-Artesanal",
    price: "19.00",
    ingredients:
      "Pão, bife artesanal, queijo, alface, tomate, batata palha e milho verde.",
    meatOptions: [
      { type: "Bife Comum", price: 2.0 },
      { type: "Bife de Picanha", price: 4.0 },
      { type: "Bife de Frango", price: 6.0 },
      { type: "Bife Artesanal", price: 8.0 },
    ],
  },
  {
    id: uuidv4(),
    name: "X-Salada Artesanal",
    price: "20.00",
    ingredients:
      "Pão, bife artesanal, queijo, presunto, alface, tomate, batata palha e milho verde.",
    meatOptions: [
      { type: "Bife Comum", price: 2.0 },
      { type: "Bife de Picanha", price: 4.0 },
      { type: "Bife de Frango", price: 6.0 },
      { type: "Bife Artesanal", price: 8.0 },
    ],
  },
  {
    id: uuidv4(),
    name: "Egg Artesanal",
    price: "19.00",
    ingredients:
      "Pão, bife artesanal, ovo, alface, tomate, batata palha e milho verde.",
    meatOptions: [
      { type: "Bife Comum", price: 2.0 },
      { type: "Bife de Picanha", price: 4.0 },
      { type: "Bife de Frango", price: 6.0 },
      { type: "Bife Artesanal", price: 8.0 },
    ],
  },
  {
    id: uuidv4(),
    name: "X-Egg Artesanal",
    price: "23.00",
    ingredients:
      "Pão, bife artesanal, ovo, queijo alface, tomate, batata palha e milho verde.",
    meatOptions: [
      { type: "Bife Comum", price: 2.0 },
      { type: "Bife de Picanha", price: 4.0 },
      { type: "Bife de Frango", price: 6.0 },
      { type: "Bife Artesanal", price: 8.0 },
    ],
  },
  {
    id: uuidv4(),
    name: "Bacon Artesanal",
    price: "22.00",
    ingredients:
      "Pão, bife artesanal, bacon, queijo, alface, tomate, batata palha e milho verde.",
    meatOptions: [
      { type: "Bife Comum", price: 2.0 },
      { type: "Bife de Picanha", price: 4.0 },
      { type: "Bife de Frango", price: 6.0 },
      { type: "Bife Artesanal", price: 8.0 },
    ],
  },
  {
    id: uuidv4(),
    name: "X-Egg Artesanal",
    price: "25.00",
    ingredients:
      "Pão, bife artesanal, bacon, ovo, queijo, alface, tomate, batata palha e milho verde.",
    meatOptions: [
      { type: "Bife Comum", price: 2.0 },
      { type: "Bife de Picanha", price: 4.0 },
      { type: "Bife de Frango", price: 6.0 },
      { type: "Bife Artesanal", price: 8.0 },
    ],
  },
  {
    id: uuidv4(),
    name: "X-Tudo Artesanal",
    price: "29.00",
    ingredients:
      "Pão, bife artesanal, bacon, ovo, queijo, presunto, alface, tomate, batata palha e milho verde.",
  },
]
