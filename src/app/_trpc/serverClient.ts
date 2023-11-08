import { appRouter } from "@/server";
import { httpBatchLink } from "@trpc/client";

export const serverClient = appRouter.createCaller({ //call the procedures directly from the server they're hosted in
    links: [
        httpBatchLink({
            url: "http://localhost:3000/api/trpc"
        })
    ]
})

/* getTodos is now rendered in the client, therefore every refresh we would see a blank page before the content is rendered. To fix this we could render them in the server */