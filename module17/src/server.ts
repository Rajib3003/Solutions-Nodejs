
import { Server} from 'http';

import app from './app';
import mongoose from 'mongoose';
let server: Server;

const PORT = 5000;
async function main() {
    try {
        await mongoose.connect('mongodb+srv://mongodb:mongodb@cluster0.qgah9aq.mongodb.net/mongoosedatabase?retryWrites=true&w=majority&appName=Cluster0');
        // console.log('Connected to MongoDB');
        server = app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.log(error);
    }
}

main();