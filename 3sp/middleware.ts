import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/login", // Redirect to this page if the user is not authenticated
  },
  callbacks: {
    authorized({ req, token }) {
      console.log("Middleware hit");
      console.log("Token:", token); // Logs the token
      console.log("Path:", req.nextUrl.pathname); // Logs the requested path
      return !!token; // Allow access only if a token exists
    },
  },
});

export const config = {
  matcher: ["/User/:path*"], // Protect all routes under /User
  // test: /\/User\/.*/,
};
