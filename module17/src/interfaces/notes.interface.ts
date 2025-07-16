import { Types } from "mongoose";

export interface INote {
    title: string;
    description: string;
    date: Date;
    user: Types.ObjectId; // userId
}