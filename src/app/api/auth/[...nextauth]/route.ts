import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  pages: {
    signIn: "/Login",
    error: "/Login",
  },
  callbacks: {
    async signIn({ profile }) {
      if (profile?.email?.endsWith("@me.bergen.edu")) {
        return true;
      }
      return false;
    },
    async session({ session, token }) {
      session.user = {
        ...session.user,
        id: token.id as string,
      };
      return session;
    },
    async jwt({ token, account }) {
      if (account) {
        token.id = account.providerAccountId;
      }
      return token;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: true,
});

// Correct way to export API handlers in Next.js 13+
export { handler as GET, handler as POST };
