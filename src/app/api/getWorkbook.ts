import client from '@/app/libs/server/client'

export async function getWorkbookById(id: number) {
  return await client.workbook.findUnique({
    where: { id },
    include: {
      problems: true,
    },
  })
}
