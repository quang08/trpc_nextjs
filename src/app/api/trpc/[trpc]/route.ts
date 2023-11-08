import { fetchRequestHandler } from "@trpc/server/adapters/fetch"; //provides a request handler for handling HTTP requests and routing them to your tRPC API.

import { appRouter } from "@/server";

const handler = (req: Request) => {
    fetchRequestHandler({
        endpoint: "/api/trpc/", //specifies the endpoint where your tRPC API is hosted. 
        req,
        router: appRouter, //router to be used for routing and processing the request.
        createContext: () => ({}) //provides a way to pass additional data or services to your API procedures and queries.
    })
}

export {handler as GET, handler as POST} //This is a common pattern for handling HTTP methods. The exported functions will be used for processing GET and POST requests, respectively.

/*
It uses the fetchRequestHandler provided by tRPC's fetch adapter to route incoming requests to the appRouter, defined in your server. The handler function is exported for both GET and POST methods, making it suitable for handling HTTP requests via those methods.
*/