
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

