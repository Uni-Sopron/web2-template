import { Router } from 'express'
const router = Router()

router.get('/heartbeat', async (req, res) => {
  res.json({ connection: 'true' })
})

export default router
