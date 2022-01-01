import express from 'express';
import main from './routes/main.routes.js'
import * as path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express()

app.use('/public', express.static('public'));

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

const PORT = process.env.PORT || 5000

app.use('/', main)

const start = async () => {
    app.listen(PORT, () => {
        console.log(`Server has been started in PORT ${PORT}`)
    })
}

start()