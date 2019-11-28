import axios from 'axios'

const api = axios.create(
    {
        baseURL: 'https://horoscope.suaradionanet.net/api/horoscope',
        headers: {
            'x-api-key':'OiU(!kh4Fj8!dZP(u)9Fr'
        }
    }
)

export default api