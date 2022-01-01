import {Router} from 'express'

const router = Router()

router.get('/', (req, res) => {
    res.send('<h1>Main page</h1>')
})

router.get('/about', (req, res) => {
    res.send('<h1>About page</h1>')
})

export default router