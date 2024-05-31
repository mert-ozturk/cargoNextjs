import NextAuth, { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/lib/prismadb";
import CredentialsProvider from 'next-auth/providers/credentials'
import bcrypt from 'bcrypt'
export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
 
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),

    CredentialsProvider({
      name:"credentials",
      credentials: {
        username: {label:"Username", type:"text", placeholder: "jsmith"},
        password:{labe:"Password",type:"password"},
        email:{label:"Email",type:"email"}
      },
      async authorize(credentials){
        if(!credentials.email || !credentials.password){
          return null
        }
      const user = await prisma.user.findUnique({
        where:{
          email:credentials.email
        }
      });
      if(!user){
        return null
      }
      const passwordsMatch = await bcrypt.compare(credentials.password,user.hashedPassword)
      if(!passwordsMatch){
        return null
      }
      return user
      }
    })
  ],
  session:{
    strategy: "jwt"
  },
 
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === 'development'
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };