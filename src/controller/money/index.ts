import { Router } from 'express'
import routine from '@/service/schedule'

const router = Router()

router.use((req, res, next) => {
  res.setHeader('Content-Type', 'text/html')
  next()
})

router.get('/', (req, res) => {
  res.status(200).send(`afqfq ${routine.value.length}`)
})

export default router
