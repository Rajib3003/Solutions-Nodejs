
import express, { Request, Response }  from "express";
import { Note } from "../models/notes.models";

export const noteRouters = express.Router();

noteRouters.post('/create',async(req : Request, res : Response) => {
    // prossess-1
    // const noteValue = new Note({
    //   name: '     Rajib         ',      
    //   email: 'rajib2d@gmail.com'
    // })
    // await noteValue.save();

    // prossess-2
    const body = req.body;
    const note = await (await Note.create(body)).populate('user'); // userId
    res.status(201).json({
      success: true,
      message: 'note created successfully',
      note
    })
  
})
noteRouters.get('/',async(req : Request, res : Response) => {   
    const notes = await Note.find()    
    res.status(201).json({
      success: true,
      message: 'note all find successfully',
      notes
    })  
})
noteRouters.get('/:noteId',async(req : Request, res : Response) => {
    const noteId = req.params.noteId;
    const note = await Note.findById(noteId);    
    res.status(201).json({
      success: true,
      message: 'note single find successfully',
      note
    })  
})
noteRouters.patch('/:noteId',async(req : Request, res : Response) => {
    const noteId = req.params.noteId;
    const updateBody = req.body;
    const note = await Note.findByIdAndUpdate(noteId, updateBody, { new: true});   
    res.status(201).json({
      success: true,
      message: 'note update successfully',
      note
    })  
})
noteRouters.delete('/:noteId',async(req : Request, res : Response) => {
    const noteId = req.params.noteId;
    const note = await Note.findByIdAndDelete(noteId);      
    res.status(201).json({
      success: true,
      message: 'note delete successfully',
      note
    })  
})
