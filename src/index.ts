import * as express from 'express'
import '@/plugins/env'
import '@/entity/orm_connect'
import MoneyController from './controller/money'

const app = express()

app.use('/api/money', MoneyController)

app.listen(process.env.ENV_PORT, () => {
  // console.log('server started at ' + process.env.ENV_PORT)
})
