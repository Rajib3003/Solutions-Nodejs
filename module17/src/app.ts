
import express, { Application, Request, Response } from 'express'
import { model, Schema } from 'mongoose';

const app : Application = express();
app.use(express.json());

const noteSchema = new Schema(
  {
  name: {type: String, required: true, trim: true},
  age: { type: Number, default: 18 },
  email: { type: String, required: true, unique: true },
  date: { type: Date, default: Date.now }
}
, {
  timestamps: true,
  versionKey: false
});


const Note = model('Note', noteSchema);

app.post('/notes/create',async(req : Request, res : Response) => {
    // prossess-1
    // const noteValue = new Note({
    //   name: '     Rajib         ',      
    //   email: 'rajib2d@gmail.com'
    // })
    // await noteValue.save();

    // prossess-2
    const body = req.body;
    const note = await Note.create(body)    
    res.status(201).json({
      success: true,
      message: 'note created successfully',
      note
    })
  
})
app.get('/notes',async(req : Request, res : Response) => {   
    const notes = await Note.find()    
    res.status(201).json({
      success: true,
      message: 'note all find successfully',
      notes
    })  
})
app.get('/notes/:noteId',async(req : Request, res : Response) => {
    const noteId = req.params.noteId;
    const note = await Note.findById(noteId);    
    res.status(201).json({
      success: true,
      message: 'note single find successfully',
      note
    })  
})
app.patch('/notes/:noteId',async(req : Request, res : Response) => {
    const noteId = req.params.noteId;
    const updateBody = req.body;
    const note = await Note.findByIdAndUpdate(noteId, updateBody, { new: true});   
    res.status(201).json({
      success: true,
      message: 'note update successfully',
      note
    })  
})
app.delete('/notes/:noteId',async(req : Request, res : Response) => {
    const noteId = req.params.noteId;
    const note = await Note.findByIdAndDelete(noteId);      
    res.status(201).json({
      success: true,
      message: 'note delete successfully',
      note
    })  
})


app.get('/',
  
  (req : Request, res : Response) => {
  
    res.send('Welcome to my app start');
  
})

export default app;