import { Model } from "mongoose";

export interface IAddress {
    street: string;
    city: string;
    zip: number;
}

export interface IUser{
    firstName: string;
    lastName: string;
    age: number;
    email: string; 
    password: string;
    role: 'ADMIN' | 'USER' | 'SUPERADMIN';
    address: IAddress; 
}

export interface UserIntenceMethods {
    hashPassword(password: string): string;
}
export interface UserStaticMethods extends Model<IUser> {
    hashPassword(password: string): string;
}