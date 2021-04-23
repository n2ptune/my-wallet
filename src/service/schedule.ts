import { saveUserCurrency } from './save'
import { getAccountPrice } from './upbit'

const INTERVAL = 10000

if (process.env.NODE_ENV === 'production') {
  setInterval(async () => {
    const accountData = await getAccountPrice()
    saveUserCurrency(accountData)
  }, INTERVAL)
} else {
  getAccountPrice().then((result) => {
    saveUserCurrency(result)
  })
}
