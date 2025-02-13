import { Router } from 'express'
const router = Router()

router.get('/heartbeat', async (req, res) => {
  res.json({ connection: 'ok' })
})

export default router
