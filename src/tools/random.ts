

import {requestApi} from '../utils/api-request.js'
import {z} from 'zod';
import { zodToJsonSchema } from 'zod-to-json-schema';


const schema = z.object({});

const inputSchema = zodToJsonSchema(schema)

async function handler(args: z.infer<typeof schema>): Promise<Response> {
    const url = '/api/v1/vrf/drand';
    return requestApi(url,'GET',args);
}


export const randomTool = {
    definition:{
        name:'get_random',
        description: "get verifiable random number",
        inputSchema:inputSchema
    },
    handler: handler
}