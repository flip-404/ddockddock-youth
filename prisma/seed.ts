import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function seed() {
  const workbooks = await prisma.workbook.findMany()

  await Promise.all(
    workbooks.map(async (workbook) => {
      // 무작위로 생성된 날짜를 사용하여 createdAt을 업데이트
      const randomDate = getRandomDate(
        new Date(2021, 0, 1),
        new Date(2023, 11, 31),
      )
      await prisma.workbook.update({
        where: { id: workbook.id },
        data: { createdAt: randomDate },
      })
    }),
  )
}

// 무작위 날짜를 생성하는 함수
function getRandomDate(startDate: Date, endDate: Date): Date {
  const startMillis = startDate.getTime()
  const endMillis = endDate.getTime()
  const randomMillis = startMillis + Math.random() * (endMillis - startMillis)
  return new Date(randomMillis)
}

seed()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
