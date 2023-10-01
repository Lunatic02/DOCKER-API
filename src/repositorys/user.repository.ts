import { prisma } from "../utils/prisma"

interface UserDataProps {
    name: string,
    email: string   
    password: string
    phone?: string
}

export const createUser = async(data : UserDataProps) =>{
  const user = await prisma.user.create({
    data
  })
  return user
}