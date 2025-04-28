const wallet = {
    "/api/v1/wallet/challenge":{
        POST: {
            description: "wallet challenge 생성할 수 있게 parameter 입력 요청",
            params :{
                auth_type: {
                    type: 'string',
                    description: '지갑 인증방식',
                    required: true
                },
                callback_url: {
                    type: 'string',
                    description: '지갑 생성 후 응답 받을 url',
                    required: false
                },
                mng_public_key: {
                    type: 'string',
                    description: '관리자 인증에 사용될 public key',
                    required: true,
                },
                network_chain_id: {
                    type: 'integer',
                    description: '네트워크 아이디 (ex. 12: Metadium testnet)',
                    required: true
                },
                sig_public_key:{
                    type: 'string',
                    description: '지갑 인증에 사용될 public key',
                    required: true
                },
                wallet_name:{
                    type: 'string',
                    description: '지갑 이름',
                    required: true
                }
            },
        }
    },
    "/api/v1/wallet":{
        POST:{
            description: "지갑 생성",
            params:{
                referrer_token:{
                    type: 'string',
                    description: 'referrer token',
                    required: true
                },
                credential_data: {
                    type: {
                        signature: {
                            type: 'string',
                            required: true
                        },
                        authenticator_data: {
                            type: 'string',
                            description: '패스키 서명 결과 데이터'
                        },
                        client_data_json: {
                            type: 'string',
                            description: '패스키 서명 결과 데이터'
                        }
                    },
                    description: '서명 데이터',
                    required: true
                }
            }
        },
        GET:{
            description: '지갑 조회',
            params: {
                wallet_id: {
                    type:'string',
                    description: '지갑 아이디',
                    required: true,
                }
            }
        }
    },
    "/api/v1/wallet/list":{
        GET: {
            description: '지갑 리스트 조회',
            params: {
                network_chain_id: {
                    type: 'integer',
                    description: '네트워크 체인 아이디',
                    required: true,
                }
            }
        }
    },
    "/api/v1/wallet/pubkey/challenge":{
        POST: {
            description: '지갑 공개키 변경 챌린지 생성',
            params:{
                key_useage:{
                    type: 'string',
                    description: '변경할 키 선택 (서명키 or 관리키)',
                    required: true
                },
                new_public_key: {
                    type: 'string',
                    description: '변경될 public key',
                    required: true
                },
                old_public_key: {
                    type: 'string',
                    description: '변경할 public key',
                    required: true
                },
                wallet_id: {
                    type: 'string',
                    description: '지갑 아이디',
                    required: true
                }
            }
        }
    },
    "/api/v1/wallet/pubkey":{
        POST: {
            description: '지갑 공개키 변경',
            params: {
                referrer_token:{
                    type: 'string',
                    required: true
                },
                credential_data: {
                    type: {
                        signature: {
                            type: 'string',
                            required: true
                        },
                        authenticator_data: {
                            type: 'string',
                            description: '패스키 서명 결과 데이터'
                        },
                        client_data_json: {
                            type: 'string',
                            description: '패스키 서명 결과 데이터'
                        }
                    },
                    description: '서명 데이터',
                    required: true
                }
            }
        }
    }
}


export const apiInfo = {
    "wallet": wallet
}

// function extractApiList(info: Record<string,any>): Array<string>{
//     return Object.keys(info)
// }

// export const apiList = {
//     wallet: extractApiList(wallet)
// }