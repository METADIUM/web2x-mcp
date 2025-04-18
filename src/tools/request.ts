

import {requestApi} from '../utils/api-request.js'
import {z} from 'zod';
import { zodToJsonSchema } from 'zod-to-json-schema';


const schema = z.object({
    url: z.string().describe("api url"),
    method: z.string().describe("api method"),
    args: z.record(z.any()).describe("api arguments")
});

const inputSchema = zodToJsonSchema(schema)

async function handler(args: z.infer<typeof schema>): Promise<Response> {
    const url = args.url
    const method = args.method
    return requestApi(url,method,args);
}


export const requestTool = {
    definition:{
        name:'request',
        description: "request web2x api",
        inputSchema:inputSchema
    },
    handler: handler
}