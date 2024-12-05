// eslint-disable-next-line @typescript-eslint/no-unused-vars
import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string; // Add the custom `id` property
      name?: string | null;
      email?: string | null;
      image?: string | null;
    };
  }

  interface JWT {
    id?: string; // Add `id` to JWT for storing user ID
    sub?: string; // `sub` is provided by the provider (Google)
  }
}
