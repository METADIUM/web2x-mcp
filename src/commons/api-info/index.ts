import {wallet} from './wallet.js'
import {nft} from './nft.js'
import {manage} from './manage.js'

export const apiInfo = {
    wallet,
    nft,
    manage
}

// function extractApiList(info: Record<string,any>): Array<string>{
//     return Object.keys(info)
// }

// export const apiList = {
//     wallet: extractApiList(wallet)
// }