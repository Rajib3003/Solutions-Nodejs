
import express, { Application, Request, Response } from 'express'
import { model, Schema } from 'mongoose';
import { Note } from './models/notes.models';
import { noteRouters } from './controllers/notes.controllers';
import { userRouters } from './controllers/users.controllers';

const app : Application = express();
app.use(express.json());

app.use('/notes', noteRouters);
app.use('/users', userRouters);



app.get('/',
  
  (req : Request, res : Response) => {
  
    res.send('Welcome to my app start');
  
})

export default app;