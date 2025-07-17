
import express, { Request, Response } from "express";
import {User}  from "../models/users.models";
import { IUser } from "../interfaces/users.interface";
import z from "zod";
import bcrypt from "bcrypt";


export const userRouters = express.Router();
//zod validation 
const createUserZodSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  age: z.number(),
  email: z.string(),
  password: z.string(),
  role: z.enum(['ADMIN','USER','SUPERADMIN']).default('USER')
})

userRouters.post('/create',async(req : Request, res : Response) => {

 try {   
   
    const body = req.body; 
    const user = new User(body);
    const password = await user.hashPassword(body.password);   
    user.password = password;
    await user.save();
    res.status(201).json({
      success: true,
      message: 'user created successfully',
      user
    })  
  
 } catch (error) {
  console.log(error,"zod error");
  return res.status(400).json({
    success: false,
    message: 'zod error',
    error
  })
 }

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