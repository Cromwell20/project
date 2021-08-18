import express from 'express'
import cors from 'cors'
import { apiRouter } from './router.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use('/api', apiRouter)
app.use('/questions', express.static('frontend/questions.html'))
app.use('/game', express.static('frontend/index.html'))

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`App is listening on port ${PORT}`))