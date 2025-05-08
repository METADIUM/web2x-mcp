import {z} from 'zod';
import { zodToJsonSchema } from 'zod-to-json-schema';
import {ethers} from 'ethers'

const schema = z.object({
    private_key: z.string().describe("private key"),
    challenge: z.string().describe("challenge"),
});
const inputSchema = zodToJsonSchema(schema)

async function handler(args: z.infer<typeof schema>): Promise<Record<string,string>> {
    const private_key = args.private_key;
    const challenge = args.challenge;
    const wallet = new ethers.Wallet(private_key)
    // 16진수 문자열이 0x로 시작하는지 확인하고, 그렇지 않으면 추가
    const messageToSign = challenge.startsWith('0x') ? challenge : `0x${challenge}`;
    const signature = await wallet.signMessage(ethers.getBytes(messageToSign));
    return {signature};
}

export const signTool = {
    definition:{
        name:'sign',
        description: "sign on the challenge",
        inputSchema:inputSchema
    },
    handler: handler
}
