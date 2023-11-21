import { api } from "@/lib/api"
import NextAuth, { NextAuthOptions } from "next-auth"
import Credentials from "next-auth/providers/credentials"

export const nextAuthOptions: NextAuthOptions = {
  providers: [
    Credentials({
      name: 'credentials',
      credentials: {
        email: { label: 'email', type: 'email' },
        password: { label: 'password', type: 'password' }
      },
      async authorize(credentials, req) {
        const response = await api.post('/user/login', {
          email: credentials?.email,
          password: credentials?.password
        })
        if (response.data.user) {
          return response.data
        }
        return null
      }
    })
  ],
  pages: {
    signIn: '/entrar'
  },
  callbacks: {
    async jwt({ token, user }) {
      user && (token.user = user)
      return token
    },
    async session({ session, token }) {
      session = token.user as any
      return session
    },
  }
}

const handler = NextAuth(nextAuthOptions)

export { handler as GET, handler as POST }