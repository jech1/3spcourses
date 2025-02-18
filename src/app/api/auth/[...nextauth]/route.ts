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
      const email = profile?.email;

      // Ensure email is not undefined and is a string
      if (typeof email === 'string') {
        // Only allow specific email addresses
        const allowedEmails = [
          "ctully1@bergen.edu",
          "jrodriguez154929@me.bergen.edu",
          "tsnyder@bergen.edu",
          "avillaroman150069@me.bergen.edu",
          "aolarte154477@me.bergen.edu",
          "jecheverry130109@me.bergen.edu",
          "jerimiahbusiness100k@gmail.com",
              "lmarcovitz@me.bergen.edu",
              "jmena146417@me.bergen.edu",
              "amonaco148545@me.bergen.edu",
              "arech@me.bergen.edu",
              "rlacap@me.bergen.edu",
              "akim149763@me.bergen.edu",
              "okilic@me.bergen.edu",
              "aabshukur@me.bergen.edu",
              "ddiaz-pena@me.bergen.edu",
              "hkachooee@me.bergen.edu",
              "lramirez170312@me.bergen.edu",
              "pshajibaby@me.bergen.edu",
        ];

        // Check if email is in the list of allowed emails
        if (allowedEmails.includes(email)) {
          return true;
        }
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
