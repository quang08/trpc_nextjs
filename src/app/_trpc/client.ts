import { AppRouter } from "@/server"; //is used to create a tRPC client for React applications using the React Query library.
import { createTRPCReact } from "@trpc/react-query";

export const trpc = createTRPCReact<AppRouter>({});

/*
The trpc object is the tRPC client that you can now use in your React components to make type-safe API requests to your server using the defined AppRouter
*/