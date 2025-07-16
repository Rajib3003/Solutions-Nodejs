import { model, Schema } from "mongoose";
import { INote } from "../interfaces/notes.interface";


const noteSchema = new Schema<INote>(
  {
  title: {type: String, required: true, trim: true},  
  description: { type: String, required: true },
  date: { type: Date, default: Date.now },
  user: { type: Schema.Types.ObjectId, ref: 'User' } // userId
}
, {
  timestamps: true,
  versionKey: false
});


export const Note = model<INote>('Note', noteSchema);