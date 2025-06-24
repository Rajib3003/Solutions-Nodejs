
import express, { Application, Request, Response } from 'express'
import fs from 'fs'
import path from 'path'

const filepath = path.join(__dirname, '../../../db/todos.json');
const todosRoute = express.Router();

todosRoute.get('/', (req : Request, res : Response) => {
  const data = fs.readFileSync(filepath, { encoding: 'utf-8' });
    
     console.log("Fetching todos from file");
      res.json({
        message: 'Todos fetched successfully',
        data
      })

})