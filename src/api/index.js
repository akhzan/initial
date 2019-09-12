import { DEFAULT_CURRENCY } from '../config/constant'

const api = (base = DEFAULT_CURRENCY) => fetch(`https://api.exchangeratesapi.io/latest?base=${base}`)

export default api
