import express, { Router } from 'express'
var cors = require('cors')

// Routes
import indexRoute from './src/api/routes'

const app = express()
app.use(cors())

const PORT = 9000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.use('/', indexRoute)

app.listen(PORT, () => { 
	console.log(`Server is running on port : ${PORT}`)
})