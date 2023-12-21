import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function seed() {
  // Step 1: Create 5 users
  const users = []
  for (let i = 0; i < 5; i++) {
    const user = await prisma.user.create({
      data: {
        email: `user${i + 1}@example.com`,
        password: 'password123', // You should handle password securely in a real application
        nickname: `user${i + 1}`,
        description: `Description for user ${i + 1}`,
      },
    })
    users.push(user)
  }

  // Step 2: Create 10 workbooks for each user
  for (const user of users) {
    for (let i = 0; i < 10; i++) {
      const workbook = await prisma.workbook.create({
        data: {
          title: `Workbook ${i + 1} for ${user.nickname}`,
          description: `Description for Workbook ${i + 1}`,
          authorId: user.id,
        },
      })

      // Step 3: Create 10 problems for each workbook
      for (let j = 0; j < 10; j++) {
        await prisma.problem.create({
          data: {
            question: `Question ${j + 1} in Workbook ${i + 1}`,
            answer: `Answer ${j + 1}`,
            workbookId: workbook.id,
          },
        })
      }
    }
  }

  console.log('Seed completed')
}

seed()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
