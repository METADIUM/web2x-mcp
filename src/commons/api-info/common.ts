
export const referrer_token = {
    type: 'string',
    required: true
}

export const callback_url = {
    type: 'string',
    description: '처리 결과를 전달받을 url',
    required: false
}

export const wallet_id = {
    type: 'string',
    required: true
}

export const recipient_wallet_id = {
    type: 'string',
    description: '발행된 토큰을 받을 지갑 식별자',
    required: true
}

export const contract_id = {
    type: 'string',
    required: true
}

export const credential_data = {
    authenticator_data: {
        type: 'string',
        description: '패스키 서명 결과 데이터'
    },
    client_data_json: {
        type: 'string',
        description: '패스키 서명 결과 데이터'
    },
    signature: {
        type: 'string',
        required: true
    }
}