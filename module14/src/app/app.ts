
import express, { Application, NextFunction, Request, Response } from 'express'
import fs from 'fs'
import path from 'path'
import { todosRoute } from './todos/todos.routes'


const app : Application = express()
app.use(express.json())

app.use('/todos', todosRoute );


app.get('/',
  
  (req : Request, res : Response, next: NextFunction) => {
  
    console.log({
      url: req.url,
      method: req.method,
      headers: req.headers,
   } )
  next();
}, 

async (req : Request, res : Response, next: NextFunction) => {
  try {
    console.log(helloworld);
    res.send('wellcome to my app start')
  } catch (error) {
    next(error);
  }
})

app.get('/error',

async (req : Request, res : Response, next: NextFunction) => {
  try {
     console.log(helloworld);
    res.send('wellcome to error er duniya')
  } catch (error) {
    next(error);
  }
})

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({
    message: 'Route not found'
  })});

app.use((error:any,req: Request , res: Response,next: NextFunction)=>{
  if(error){
    console.log("error", error);
    res.status(400).json({
      message: 'Internal Server Error', error})
  }
})


export default app;
