import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

import bcrypt from 'bcrypt'
import { faker } from '@faker-js/faker'

async function main() {
  const password = await bcrypt.hash('123456', 12)
  await prisma.user.create({
    data: {
      name: faker.person.fullName(),
      address: faker.location.streetAddress(),
      email: 'email@email.com',
      phoneNumber: faker.phone.number(),
      password,
      points: {
        create: {
          amount: 0
        }
      }
    }
  })


  const users = Array.from({ length: 15 }, () => {
    return prisma.user.create({
      data: {
        name: faker.person.fullName(),
        address: faker.location.streetAddress(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number(),
        password,
        points: {
          create: {
            amount: faker.number.int({
              min: 230,
              max: 1300
            })
          }
        }
      }
    })
  })

  await prisma.$transaction(users)


  const benefits = [
    ['Copo Sustentável para Viagem', 100],
    ['Kit de Talheres Eco-Friendly', 150],
    ['Sachês de Sementes para Plantio', 80],
    ['Bolsa de Compras Sustentável', 120],
    ['Voucher de Desconto em Produtos Parceiros', 200],
    ['Acesso a Webinars sobre Sustentabilidade', 50],
    ['E-book sobre Estilo de Vida Sustentável', 70],
    ['Adoção Simbólica de uma Árvore', 180],
    ['Camiseta Ecológica Personalizada', 250],
    ['Consultoria Online de Sustentabilidade', 300],
  ]
  const products = [
    ['Lâmpadas LED de Baixo Consumo', 50],
    ['Detergente Biodegradável', 30],
    ['Creme Dental Natural', 40],
    ['Garrafa de Água Reutilizável', 60],
    ['Sacolas Reutilizáveis para Frutas e Vegetais', 20],
    ['Papel Higiênico Reciclado', 35],
    ['Barra de Shampoo Sólido', 45],
    ['Canudos de Bambu', 15],
    ['Esponja de Banho Biodegradável', 25],
    ['Almofadas de Algodão Orgânico', 55],
  ]
  const createBenefits = benefits.map(([name, points]) => {
    return prisma.benefit.create({
      data: {
        name: name as string,
        points: points as number
      }
    })
  })
  const createProducts = products.map(([name, points]) => {
    return prisma.product.create({
      data: {
        name: name as string,
        points: points as number
      }
    })
  })
  await prisma.$transaction(createBenefits)
  await prisma.$transaction(createProducts)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })