import express, { Router } from 'express'
var cors = require('cors')

// Routes
import indexRoute from './src/api/routes'
import flickrRoutes from './src/api/routes/flickrRoutes'

const app = express()
app.use(cors())

const PORT = 9000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.use('/', indexRoute)
app.use('/flickr', flickrRoutes)

app.listen(PORT, () => { 
	console.log(`Server is running on port : ${PORT}`)
})