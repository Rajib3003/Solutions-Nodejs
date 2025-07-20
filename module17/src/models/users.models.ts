import bcrypt  from 'bcrypt';
import { Model, model, Schema } from "mongoose";
import { IAddress, IUser, UserIntenceMethods, UserStaticMethods } from "../interfaces/users.interface";
import validator from "validator";
import { Note } from './notes.models';
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

const userSchema = new Schema<IUser, UserStaticMethods, UserIntenceMethods>(
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
        // unique: true,
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
    versionKey: false,
    toJSON : {virtuals: true},
    toObject : {virtuals: true}

}
);

userSchema.method("hashPassword", async function(plainPassword:string){
    const password = await bcrypt.hash(plainPassword, 10)    
    return password;
});
userSchema.static("hashPassword", async function(plainPassword:string){
    const password = await bcrypt.hash(plainPassword, 10)    
    return password;
});

userSchema.pre("find", async function(next){
    console.log("doc output");
    next();
});

userSchema.pre("save",async function(next){
  this.password =  await bcrypt.hash(this.password, 10);
    next();
})

userSchema.post("save",async function(doc,next){
  console.log('%s has been saved', doc._id);
    next();
})
userSchema.post("findOneAndDelete",async function(doc,next){
    if(doc){
        console.log("Deleting notes for user:", doc._id);
        await Note.deleteMany({ user: doc._id });
    }    
    next();
})
userSchema.virtual('fullName').get(function(){
    return `${this.firstName} ${this.lastName}`;
})

export const User = model<IUser, UserStaticMethods>('User', userSchema);