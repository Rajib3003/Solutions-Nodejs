import { model, Schema } from "mongoose";
import { INote } from "../interfaces/notes.interface";


const noteSchema = new Schema<INote>(
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


export const Note = model<INote>('Note', noteSchema);