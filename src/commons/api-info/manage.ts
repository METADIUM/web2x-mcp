
import {
    referrer_token,
    credential_data,
    
} from './common.js'


export const manage = {
    '/api/v1/manage/request': {
        GET: {
            description: 'API 요청 결과 조회',
            params: {
                request_id: {
                    type: 'string',
                    required: true
                }
            }
        }
    },
    '/api/v1/manage/request/list': {
        GET: {
            description: '특정 네트워크에 전송한 최근 50개 의 요청 목록 조회',
            params: {
                network_id:{
                    type: 'number',
                    required: true
                }
            }
        }
    },
    '/api/v1/manage/fee-balance': {
        GET: {
            description: '특정 네트워크에 대한 요청가능 수수료 잔고정보를 조회',
            params: {
                network_id:{
                    type: 'number',
                    required: true
                }
            }
        }
    },
    '/api/v1/manage/verification/challenge': {
        POST: {
            description: '지갑의 키 서명 검증을 위해 챌린지를 생성하고, 응답값으로 참조 토큰을 받습니다',
            params: {
                auth_type: {
                    type: 'string',
                    description: '지갑인증방식(eoakey/passkey)',
                    required: true,
                },
                sig_public_key: {
                    type: 'string',
                    description: '지갑 인증에 사용될 public key',
                    required: true
                }
            }
        }
    },
    '/api/v1/manage/verification': {
        POST: {
            description: '서명 검증 챌린지 API에서 받은 챌린지에 서명하고, 서명값을 검증하여 키 서명의 결과를 확인',
            params: {referrer_token, credential_data}
        }
    },
    '/api/v1/manage/network/list': {
        GET: {
            description: '현재 WEB2X API에서 지원하는 네트워크의 종류와 네트워크 ID 및 상태를 조회',
        }
    },
}