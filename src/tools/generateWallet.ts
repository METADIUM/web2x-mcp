import {z} from 'zod';
import { zodToJsonSchema } from 'zod-to-json-schema';
import {ethers} from 'ethers'

const schema = z.object({});
const inputSchema = zodToJsonSchema(schema)

// function handler(args: z.infer<typeof schema>): Record<string,string> {
//     const wallet = ethers.Wallet.createRandom();
//     const private_key = wallet.privateKey;
//     const public_key = wallet.publicKey;
//     return {public_key, private_key}
// }


function handler() {
    const wallet = ethers.Wallet.createRandom();
    const uncompressedPublicKey = new ethers.SigningKey(wallet.privateKey);
    
    return {
      privateKey: wallet.privateKey,
      publicKey: uncompressedPublicKey.publicKey
    };
}

export const generateWalletTool = {
    definition:{
        name:'generate_wallet',
        description: "generate private key and public key",
        inputSchema:inputSchema
    },
    handler: handler
}

