import { publicProcedure, router } from "./trpc";

export const appRouter = router({
    getTodos: publicProcedure.query(async () => { //.query() is used for fetching data from the server
        return [10, 20, 30]
    })
})

export type AppRouter = typeof appRouter;