
import express, { Request, Response } from "express";
import { User } from "../models/users.models";
import { IUser } from "../interfaces/users.interface";

export const userRouters = express.Router();

userRouters.post('/create',async(req : Request, res : Response) => {

    const body:IUser = req.body;
    const user = await User.create(body)    
    res.status(201).json({
      success: true,
      message: 'user created successfully',
      user
    })  
})
userRouters.get('/',async(req : Request, res : Response) => {    
    const users = await User.find()  
    res.status(201).json({
      success: true,
      message: 'all users find successfully',
      users
    })  
})
userRouters.get('/:userId',async(req : Request, res : Response) => {    
    const userId = req.params.userId;
    const user = await User.findById(userId);    
    res.status(201).json({
      success: true,
      message: 'single user find successfully',
      user
    })  
})
userRouters.patch('/:userId',async(req : Request, res : Response) => {    
    const userId = req.params.userId;
    const body:IUser = req.body;
    const user = await User.findByIdAndUpdate(userId, body, { new: true});     
    res.status(201).json({
      success: true,
      message: 'single user update successfully',
      user
    })  
})
userRouters.delete('/:userId',async(req : Request, res : Response) => {    
    const userId = req.params.userId;    
    const user = await User.findByIdAndDelete(userId);   
    res.status(201).json({
      success: true,
      message: 'single user delete successfully',
      user
    })  
})