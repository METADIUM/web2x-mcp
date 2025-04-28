

import {requestApi} from '../utils/api-request.js'
import {z} from 'zod';
import { zodToJsonSchema } from 'zod-to-json-schema';

import {apiInfo} from '../commons/apiInfo.js'

const schema = z.object({});

const inputSchema = zodToJsonSchema(schema)

function handler(args: z.infer<typeof schema>): Record<string,any> {
    return apiInfo;
}

export const apiListTool = {
    definition:{
        name:'web2x_api_list',
        description: "detail information of web2x api",
        inputSchema:inputSchema
    },
    handler: handler
}