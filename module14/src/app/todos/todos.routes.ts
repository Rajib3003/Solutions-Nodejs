
import express, { Application, Request, Response } from 'express'
import fs from 'fs'
import path from 'path'

const filepath = path.join(__dirname, '../../../db/todos.json');
export const todosRoute = express.Router();

todosRoute.get('/', (req : Request, res : Response) => {
  const data = fs.readFileSync(filepath, { encoding: 'utf-8' });
    
     console.log("Fetching todos from file");
      res.json({
        message: 'Todos fetched successfully',
        data
      })

})
todosRoute.post('/create-todo', (req : Request, res : Response) => {
  const {title,completed} = req.body;
  console.log(title,completed);
  res.send('wellcome to my app todos create-todo')
})
todosRoute.get('/:title',(req : Request, res : Response) => {
  const {title,completed} = req.body;
  console.log(title,completed);
  res.send('wellcome to my app todos create-todo')
});
todosRoute.put('update-todo/:title',(req : Request, res : Response) => {
  const {title,completed} = req.body;
  console.log(title,completed);
  res.send('wellcome to my app todos create-todo')
});
todosRoute.delete('delete-todo/:title',(req : Request, res : Response) => {
  const {title,completed} = req.body;
  console.log(title,completed);
  res.send('wellcome to my app todos create-todo')
});

