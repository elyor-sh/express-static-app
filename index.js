import express from 'express';
import main from './routes/main.routes.js'

const app = express()

const PORT = process.env.PORT || 5000

app.use('', main)

const start = async () => {
    app.listen(PORT, () => {
        console.log(`Server has been started in PORT ${PORT}`)
    })
}

start()