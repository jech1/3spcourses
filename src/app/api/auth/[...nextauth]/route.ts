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
          "lnunez142640@me.bergen.edu",
          "jerimiahbusiness100k@gmail.com",
          "hkachooee156171@me.bergen.edu",
              "lmarcovitz@me.bergen.edu",
              "earaya137983@me.bergen.edu",
              "Stasci@me.bergen.edu",
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
              "jperalta162934@me.bergen.edu",
              "tshahid@me.bergen.edu",
              "msolowiej@me.bergen.edu",
              "ksolowiej@me.bergen.edu",
              "akaplan152963@me.bergen.edu",
              "ynaveh@me.bergen.edu",
              "ynaveh@me.bergen.edu",
              "ilee166321@me.bergen.edu",
              "gbaez165228@me.bergen.edu",
              "adamjoudeh61@gmail.com",
              "ajoudeh@me.bergen.edu",
              "rdiaz148772@me.bergen.edu",
              "smunoz144849@me.bergen.edu",
              "iyuce@me.bergen.edu",
              "mluciani@me.bergen.edu",
              "edorta@me.bergen.edu",
              "sgrabbe@me.bergen.edu",
              "Salam10@me.Bergen.edu",
              "jsepulveda@me.bergen.edu",
              "mpham@me.bergen.edu",
              "sparajuli@me.bergen.edu",
              "sgrabbe@me.bergen.edu",
              "rkozlowski@me.bergen.edu",
              "mpham@me.bergen.edu",
              "lramirez170312@me.bergen.edu",
              "jseo164585@me.bergen.edu",
              "llapitan158805@me.bergen.edu",
              "lnunez142640@me.bergen.edu",
              "agonzalez162654@me.bergen.edu",
              "agonzalez162654@me.bergen.edu",
              "iertan@me.bergen.edu",
              "gmetohu@me.bergen.edu",
              "abhaskarsharma@me.bergen.edu",
              "econcha146191@me.bergen.edu",
              "dchiniaev@me.bergen.edu",
              "acozma@me.bergen.edu",
              "akarakus@me.bergen.edu",
              "vcielepak@me.bergen.edu",
              "zmenguverdi@me.bergen.edu",
              "sparajuli@me.bergen.edu",
              "rlee150857@me.bergen.edu",
              "eluna152251@me.bergen.edu",
              "haumack@me.bergen.edu",
              "jribaudo164592@me.bergen.edu",
              "lhahn148555@me.bergen.edu",
              "mflores149134@me.bergen.edu",
              "pcarlton@me.bergen.edu",

              


              
              
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
