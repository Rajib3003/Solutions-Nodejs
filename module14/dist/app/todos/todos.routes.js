"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.todosRoute = void 0;
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const filepath = path_1.default.join(__dirname, '../../../db/todos.json');
exports.todosRoute = express_1.default.Router();
exports.todosRoute.get('/', (req, res) => {
    const data = fs_1.default.readFileSync(filepath, { encoding: 'utf-8' });
    console.log("Fetching todos from file");
    res.json({
        message: 'Todos fetched successfully',
        data
    });
});
exports.todosRoute.post('/create-todo', (req, res) => {
    const { title, completed } = req.body;
    console.log(title, completed);
    res.send('wellcome to my app todos create-todo');
});
exports.todosRoute.get('/:title', (req, res) => {
    const { title, completed } = req.body;
    console.log(title, completed);
    res.send('wellcome to my app todos create-todo');
});
exports.todosRoute.put('update-todo/:title', (req, res) => {
    const { title, completed } = req.body;
    console.log(title, completed);
    res.send('wellcome to my app todos create-todo');
});
exports.todosRoute.delete('delete-todo/:title', (req, res) => {
    const { title, completed } = req.body;
    console.log(title, completed);
    res.send('wellcome to my app todos create-todo');
});
