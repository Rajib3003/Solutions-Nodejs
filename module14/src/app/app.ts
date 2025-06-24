
import express, { Application, Request, Response } from 'express'
import fs from 'fs'
import path from 'path'




const app : Application = express()
const filepath = path.join(__dirname, '../../db/todos.json');

app.use(express.json())

const todosRoute = express.Router();
app.use('/todos', todosRoute);

todosRoute.get('/todos', (req : Request, res : Response) => {
  const data = fs.readFileSync(filepath, { encoding: 'utf-8' });
    
     console.log("Fetching todos from file");
      res.json({
        message: 'Todos fetched successfully',
        data
      })

})


app.get('/', (req : Request, res : Response) => {
  res.send('wellcome to my app start')
})
app.get('/todos', (req : Request, res : Response) => {
  const data = fs.readFileSync(filepath, { encoding: 'utf-8' });
    
     console.log("app todos route");
      res.json(data)
  
})
app.post('/todos/create-todo', (req : Request, res : Response) => {
  const {title,completed} = req.body;
  console.log(title,completed);
  res.send('wellcome to my app todos create-todo')
})



export default app;
