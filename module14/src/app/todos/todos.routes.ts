
import express, { Application, Request, Response } from 'express'
import fs from 'fs'
import path from 'path'
import { client } from '../../config/mongodb';
import { ObjectId } from 'mongodb';

const filepath = path.join(__dirname, '../../../db/todos.json');
export const todosRoute = express.Router();

todosRoute.get('/', async (req : Request, res : Response) => {
   
  const db = await client.db("todosDB");
  const collection =await db.collection("todos");
  const cursor = collection.find({})
  const todos = await cursor.toArray();
  res.json(todos)

})
todosRoute.post('/create-todo',async (req : Request, res : Response) => {
  const { title, description, priority } = req.body;
  const db = await client.db("todosDB");
  const collection =await db.collection("todos");
   await collection.insertOne({
    title: title,
    description: description,
    priority: priority,
    isCompleted: false,
  });
  const cursor = collection.find({})
  const todos = await cursor.toArray();
  res.json(todos)
})
todosRoute.get('/:id', async (req : Request, res : Response) => {
  const id = req.params.id; 
  const db = await client.db("todosDB");
  const collection =await db.collection("todos");

  const todo = await collection.findOne({ _id: new ObjectId(id) });
  res.json(todo);
});
todosRoute.put('/update-todo/:id', async (req : Request, res : Response) => {
  const id = req.params.id;
  const db = await client.db("todosDB");
  const collection =await db.collection("todos");

  const { title, description, priority, isCompleted } = req.body;
  const filter = { _id: new ObjectId(id) };

  const updateTodo = await collection.updateOne(filter, {$set: {title, description, priority, isCompleted }}, {upsert: true});
  res.json(updateTodo);

});
todosRoute.delete('/delete-todo/:id', async (req : Request, res : Response) => {
  const id = req.params.id; 
  const db = await client.db("todosDB");
  const collection =await db.collection("todos");
  await collection.deleteOne({_id: new ObjectId(id)});  
  res.json({
    message: 'Todo deleted successfully'
  });
});

