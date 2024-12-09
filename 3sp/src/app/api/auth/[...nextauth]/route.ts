import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  // passing through the environment variables
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  pages: {
    signIn: "/Login", // redirecting to custom login page
    error: "/Login", // redirecting to custom error page
  },
  // callbacks are used to modify the session object
  callbacks: {
    async signIn({ profile }) {
      // Allow only @bergen.edu emails
      if (profile?.email?.endsWith("@me.bergen.edu")) {
        return true; // allow login
      }
      return false; // reject other emails
    },
    async session({ session, token }) {
      // attach user ID to the session object
      session.user = {
        ...session.user,
        id: token.id as string, // retrieve ID from the token
      };
      return session;
    },
    async jwt({ token, account }) {
      // attach account or profile info to the token if available
      if (account) {
        token.id = account.providerAccountId; // Use providerAccountId as the ID
      }
      return token;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: true,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
