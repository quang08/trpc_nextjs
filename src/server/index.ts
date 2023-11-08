import { drizzle } from "drizzle-orm/better-sqlite3"
import { migrate } from "drizzle-orm/better-sqlite3/migrator";
import Database from "better-sqlite3";

import { publicProcedure, router } from "./trpc";

import { todos } from "@/app/db/schema";

const sqlite = Database("sqlite.db")
const db = drizzle(sqlite)

migrate(db, {migrationsFolder: 'drizzle'})

export const appRouter = router({
    getTodos: publicProcedure.query(async () => { //.query() is used for fetching data from the server
        return await db.select().from(todos).all();
    })
})

export type AppRouter = typeof appRouter;