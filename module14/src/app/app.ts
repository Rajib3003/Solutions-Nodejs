
import express, { Application, Request, Response } from 'express'
import fs from 'fs'
import path from 'path'
import { todosRoute } from './todos/todos.routes'


const app : Application = express()
app.use(express.json())

app.use('/todos', todosRoute );


app.get('/', (req : Request, res : Response) => {
  res.send('wellcome to my app start')
})


export default app;
