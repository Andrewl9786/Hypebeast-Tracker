import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import router from './router'
import { initMongoose } from './db'
import pollForData from './utility/pollForData';

const PORT = 3000;
const server = express()
const url = 'https://hypebeast.com/tags/weekly-drops'


pollForData(url)

server.use(cors())
server.use(bodyParser.json())
server.use('/', router)

server.listen(PORT, () => {
  console.log('server listening on port: ', PORT)
  initMongoose()
})
