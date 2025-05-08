
import {
    referrer_token,
    callback_url,
    wallet_id,
    recipient_wallet_id,
    contract_id,
    credential_data,
    
} from './common.js'


export const nft = {
    '/api/v1/nft/deploy/challenge': {
        POST: {
            description: 'NFT 컨트랙트 배포 챌린지 생성',
            params: {
                callback_url,
                contract: {
                    default_data: {
                        type: 'string',
                        description: '토큰 발행시 데이터 기본값'
                    },
                    is_burnable: {
                        type: 'boolean',
                        required: true
                    },
                    name: {
                        type: 'string',
                        required: true
                    },
                    owner_wallet_id:{
                        type: 'string',
                        description: '배포된 컨트랙트 소유자가 될 wallet_id',
                        required: true
                    },
                    symbol: {
                        type: 'string',
                        description: '배포할 컨트랙트 심볼',
                        required: true
                    }
                },
                wallet_id
            }
        }
    },
    '/api/v1/nft/deploy':{
        POST: {
            description: 'NFT 컨트랙트 배포',
            params: {
                referrer_token,
                credential_data,
            }
        }
    },
    '/api/v1/nft/mint/challenge':{
        POST: {
            description: 'NFT 발행 챌린지 생성',
            params: {
                callback_url,
                contract_id,
                recipient_wallet_id,
                token_data: {
                    type: 'string'
                },
                token_id: {
                    type: 'int64',
                    description: '토큰 식별자 (min: 0, max: 1.157920892373162e+77)'
                },
                wallet_id,
            }
        }
    },
    '/api/v1/nft/mint':{
        POST: {
            description: 'NFT 발행',
            params: {
                referrer_token,
                credential_data,
            }
        }
    },
    '/api/v1/nft/mint-batch/challenge':{
        POST: {
            description: 'NFT 대량발행 챌린지 생성​',
            params: {
                callback_url,
                contract_id,
                quantity: {
                    type: 'int64',
                    description: '발행 토큰 수량(min:0, max:10000)',
                },
                recipient_wallet_id,
                wallet_id
            }
        }
    },
    '/api/v1/nft/mint-batch':{
        POST: {
            description: 'NFT 대량 발행',
            params: {
                referrer_token,
                credential_data,
            }
        }
    },
    '/api/v1/nft/transfer/challenge':{
        POST: {
            description: 'NFT 전송 챌린지 생성',
            params: {
                callback_url,
                contract_id,
                recipient_wallet_id,
                token_id: {
                    type: 'int64',
                    required: true
                },
                wallet_id
            }
        }
    },
    '/api/v1/nft/transfer':{
        POST: {
            description: 'NFT 전송',
            params: {
                referrer_token,
                credential_data
            }
        }
    },
    '/api/v1/nft/transfer-from/challenge':{
        POST: {
            description: 'NFT 대리 전송 챌린지 생성',
            params: {
                callback_url,
                contract_id,
                recipient_wallet_id,
                sender_wallet_id: {
                    type: 'string',
                    description: '토큰을 보낼 지갑 식별자',
                    required: true
                },
                token_id: {
                    type: 'int64'
                },
                wallet_id
            }
        }
    },
    '/api/v1/nft/transfer-from':{
        POST: {
            description: 'NFT 대리전송',
            params: {referrer_token, credential_data}
        }
    },
    '/api/v1/nft/burn/challenge':{
        POST: {
            description: 'NFT 소각 챌린지 생성',
            params: {
                callback_url,
                contract_id,
                token_id: {
                    type: ' int64',
                    required: true
                },
                wallet_id
            }
        }
    },
    '/api/v1/nft/burn':{
        POST: {
            description: 'NFT 소각',
            params: {referrer_token, credential_data}
        }
    },
    '/api/v1/nft/approve/challenge':{
        POST: {
            description: 'NFT 위임 챌린지 생성',
            params: {
                callback_url,
                contract_id,
                spender_wallet_id: {
                    type: 'string',
                    description: '위임할 지갑 식별자',
                    required: true
                },
                token_id: {
                    type: 'int64',
                    required: true,
                },
                wallet_id
            }
        }
    },
    '/api/v1/nft/approve':{
        POST: {
            description: 'NFT 위임',
            params: {referrer_token, credential_data}
        }
    },
    '/api/v1/nft/approve-all/challenge':{
        POST: {
            description: 'NFT 전체 위임 챌린지 생성',
            params: {
                callback_url,
                contract_id,
                operator_wallet_id: {
                    type: 'string',
                    description: '전체 위임 부여 대상 지갑 식별자',
                    required: true
                },
                wallet_id
            }
        }
    },
    '/api/v1/nft/approve-all':{
        POST: {
            description: 'NFT 전체 위임 부여',
            params: {referrer_token, credential_data}
        }
    },
    '/api/v1/nft/approve-all/revoke/challenge':{
        POST: {
            description: 'NFT 전체 위임 해제 챌린지 생성',
            params: {
                callback_url,
                contract_id,
                operator_wallet_id: {
                    type: 'string',
                    description: '전체 위임 부여 대상 지갑 식별자',
                    required: true
                },
                wallet_id
            }
        }
    },
    '/api/v1/nft/approve-all/revoke':{
        POST: {
            description: 'NFT 전체 위임 해제',
            params: {referrer_token, credential_data}
        }
    },

    '/api/v1/nft/contract':{
        GET: {
            description: 'NFT 컨트랙트 정보 조회',
            params: {contract_id}
        }
    },
    '/api/v1/nft/contract/list':{
        GET: {
            description: 'NFT 컨트랙트 리스트 조회',
            params: {wallet_id}
        }
    },
    '/api/v1/nft/contract/token':{
        GET: {
            description: 'NFT 컨트랙트 토큰 정보 조회',
            params: {
                contract_id, 
                token_id: {
                    required: true
                }
            }
        }
    },
    '/api/v1/nft/contract/token/list':{
        GET: {
            description: 'NFT 컨트랙트 토큰 리스트 조회',
            params: {contract_id, wallet_id}
        }
    },
}