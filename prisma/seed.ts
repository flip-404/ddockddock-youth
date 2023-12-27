import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function seed() {
  // Delete data from dependent tables first

  await prisma.comment.deleteMany({})
  await prisma.bookmark.deleteMany({})
  await prisma.problem.deleteMany({})
  await prisma.workbook.deleteMany({})
  await prisma.token.deleteMany({})

  // Delete data from independent tables
  await prisma.category.deleteMany({})
  await prisma.user.deleteMany({})
}

seed()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
