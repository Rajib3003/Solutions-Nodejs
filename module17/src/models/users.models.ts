import { model, Schema } from "mongoose";
import { IAddress, IUser } from "../interfaces/users.interface";
import validator from "validator";
const addressSchema = new Schema<IAddress>({
    street: {
        type: String,
        required: true,
        trim: true
    },
    city: {
        type: String,
        required: true,
        trim: true
    },
    zip: {
        type: Number,
        required: true,
    }
},{
    _id: false
})

const userSchema = new Schema<IUser>(
    {
    firstName: {
        type: String, 
        required: true, 
        trim: true,
        minlength: [3, 'First name must be at least 3 characters long {VALUE}'],
        maxlength: 10
    },
    lastName: {
        type: String, 
        required: true, 
        trim: true,
         minlength: 3,
        maxlength: 10
    },
    age: {
        type: Number, 
        required: true,
        min: 18,
        max: 60
    },
    email: {
        type: String, 
        required: true, 
        trim: true,
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, 'Please provide a valid email address {VALUE}'],
    },
    password: {
        type: String, 
        required: true
    },
    role: {
        type: String, 
        uppercase: true,        
        enum: ['ADMIN', 'USER', 'SUPERADMIN'], 
        default: 'USER'
    },
    address: {
        type: addressSchema
    }
},{
    timestamps: true,
    versionKey: false
}
)

export const User = model<IUser>('User', userSchema);