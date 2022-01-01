import {Router} from 'express'

const router = Router()

router.get('*', (req, res) => {
    res.render('errorPage')
})


export default router