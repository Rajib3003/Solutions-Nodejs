"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const filepath = path_1.default.join(__dirname, '../../db/todos.json');
app.use(express_1.default.json());
const todosRoute = express_1.default.Router();
app.use('/todos', todosRoute);
todosRoute.get('/todos', (req, res) => {
    const data = fs_1.default.readFileSync(filepath, { encoding: 'utf-8' });
    console.log("Fetching todos from file");
    res.json({
        message: 'Todos fetched successfully',
        data
    });
});
app.get('/', (req, res) => {
    res.send('wellcome to my app start');
});
app.get('/todos', (req, res) => {
    const data = fs_1.default.readFileSync(filepath, { encoding: 'utf-8' });
    console.log("app todos route");
    res.json(data);
});
app.post('/todos/create-todo', (req, res) => {
    const { title, completed } = req.body;
    console.log(title, completed);
    res.send('wellcome to my app todos create-todo');
});
exports.default = app;
