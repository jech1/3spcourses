"use client";

import { SessionProvider } from "next-auth/react";
// What this file does is wrap the children components with the SessionProvider component from next-auth/react.
//This is necessary to provide the session context to the children components.
//This is a common pattern in Next.js applications that use next-auth for authentication.
//The children components can then access the session context using the useSession hook from next-auth/react.
export default function SessionProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SessionProvider>{children}</SessionProvider>;
}
