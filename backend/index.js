import express from 'express'
import mongoose from 'mongoose'
import bodyparser from 'body-parser'
import cors from 'cors'
import routes from './routes/cricketRoutes'

const app = express();
const PORT = 4000;

// mongo connection
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/cricketDB')

//bodyparser
app.use(bodyparser.urlencoded({ extended: true}))
app.use(bodyparser.json())

//cors
app.use(cors())

routes(app)

app.get('/', (req, res) => 
  res.send(`Our application is running on port ${PORT}`)
)

app.listen(PORT, ()=>
console.log(`Your cricket server is running on port${PORT}`))