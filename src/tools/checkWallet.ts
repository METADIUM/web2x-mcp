

import {requestApi} from '../utils/api-request.js'
import {z} from 'zod';
import { zodToJsonSchema } from 'zod-to-json-schema';


const schema = z.object({
    wallet_id: z.string().describe('wallet id')
});

const inputSchema = zodToJsonSchema(schema)

async function handler(args: z.infer<typeof schema>): Promise<Response> {
    const url = `/v1/wallet`;
    return requestApi(url,'GET',args);
}


export const checkWallet = {
    definition:{
        name:'check_wallet',
        description: "get wallet from wallet_id",
        inputSchema:inputSchema
    },
    handler: handler
}