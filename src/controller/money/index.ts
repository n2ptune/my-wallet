import { Router } from 'express'
// import routine from '@/service/schedule'

// const router = Router()

// router.use((req, res, next) => {
//   res.setHeader('Content-Type', 'text/html')
//   next()
// })

// router.get('/', (req, res) => {
//   // getConnection().then((conn) => {
//   //   res.status(200).send(`${routine.value.length}, ${conn.name}`)
//   // })
//   res.status(200).send(`afqfq ${routine.value.length}`)
// })

const router = Router()

router.get('/', (req, res) => {
  res.status(200).end()
})

export default router
