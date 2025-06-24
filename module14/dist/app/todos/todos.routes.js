"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const filepath = path_1.default.join(__dirname, '../../../db/todos.json');
const todosRoute = express_1.default.Router();
todosRoute.get('/', (req, res) => {
    const data = fs_1.default.readFileSync(filepath, { encoding: 'utf-8' });
    console.log("Fetching todos from file");
    res.json({
        message: 'Todos fetched successfully',
        data
    });
});
