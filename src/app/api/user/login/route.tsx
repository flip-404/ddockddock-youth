import client from "@/libs/server/client"
import { NextApiRequest } from 'next'
export async function GET() {
  const data = {}
  return NextResponse.json({ data })
}

export async function POST(request: NextApiRequest) {
  const { email } = request.body
  if(email){
    const user = await client.user.findUnique({
      where:{
        email
      }
    })
  }


  const res = await req uest.json()
  return NextResponse.json({ res })
}
