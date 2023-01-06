import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import Axios  from "axios";

const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: {label: 'Username', type: 'text', placeholder: 'email@site.com'},
        password: {label: 'Password', type: 'password', placeholder: 'password'},
      },
      async authorize({username, password}, _req) {
        try {
          const {data, error} = await fetch("https://api.cryptonaukri.com/api/v1/users/login")
          if (!data?.user || error) {
            return null
          }
          return data.user
        } catch (error) {
          return error
        }
      },
    }),
  ],
  callbacks: {
    jwt: async ({token, user}) => {
      if (user) {
        token.data = user
      }
      return token
    },
    session: async ({session, token}) => {
      if (token.data) {
        session.user = token.data
      }
      return session
    },
  },
}

export default NextAuth(authOptions)


