import { initTRPC } from "@trpc/server";

const t = initTRPC.create();

export const router = t.router; //Express.js router provided by tRPC. It's used to define and handle your API routes.
export const publicProcedure = t.procedure; //called by client to execute specific tasks on the server.

//we will  have routers that have procedures in them.