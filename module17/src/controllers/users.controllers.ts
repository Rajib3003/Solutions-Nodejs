
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