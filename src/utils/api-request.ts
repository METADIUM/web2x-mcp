export async function requestApi(url: string, method: string, payload?:Record<string,any> ): Promise<any> {
    const apiKey = process.env.API_KEY;
    if(apiKey == undefined) throw new Error(`apiKey is not defined`)
  
    try {
      let query = '';
      if(payload && Object.keys(payload).length != 0){
        query = method === 'GET' ? `?${new URLSearchParams(payload).toString()}` : '';
      }
      const baseUrl = 'https://api.web2x.io'
      const fetchUrl = `${baseUrl}${url}${query}`
      const response = await fetch(fetchUrl, {
        method: method,
        headers: {
          'Api-Key': apiKey,
          'Content-Type': 'application/json',
        },
        ...(method === 'POST' ? { body: JSON.stringify(payload) } : {})
      });
  
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`HTTP ${response.status} 오류: ${errorText}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('API 요청 실패:', error);
      throw error;
    }
}
  
