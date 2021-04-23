import { saveUserCurrency } from './save'
import { getAccountPrice } from './upbit'

const INTERVAL = 10000

// setInterval(async () => {
//   const accountData = await getAccountPrice()
//   console.log(accountData)
// }, INTERVAL)

if (process.env.NODE_ENV === 'production') {
  setInterval(async () => {
    // const accountData = await getAccountPrice()
  }, INTERVAL)
} else {
  getAccountPrice().then((result) => {
    saveUserCurrency(result)
  })
}
