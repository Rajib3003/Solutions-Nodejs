
const http = require('http');
const fs = require('fs');

const path = require('path');

const filepath = path.join(__dirname, './db/todos.json');




const server = http.createServer((req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`);
    const pathname = url.pathname;
   
   
    if(pathname === "/todos" && req.method === "GET"){
        fs.readFile(filepath, { encoding: 'utf-8' }, (err, data) => {
            if (err) {
                res.writeHead(500, { "Content-Type": "application/json" });
                res.end(JSON.stringify({ error: "Failed to read todos file" }));
                return;
            }
            res.writeHead(200, { 
                "Content-Type": "application/json",
            });
            res.end(data);
        });
    }else if (pathname === "/todos/create-todo" && req.method === "POST"){
        let data = "";
        req.on("data", (chunk)=> {
            data = data + chunk;
        })
        req.on("end", () => {
            
            const {title, completed} = JSON.parse(data);
           
            const createdAt = new Date().toLocaleString();

            const alltodos = fs.readFileSync(filepath, { encoding: 'utf-8' });

            const parseAllTodos = JSON.parse(alltodos);

            parseAllTodos.push({title, completed, createdAt});

            fs.writeFileSync(filepath, JSON.stringify(parseAllTodos, null, 2), { encoding: 'utf-8' });

            res.end(JSON.stringify({
                title, completed, createdAt
            },null , 2));

        })
        
    }else if(pathname === "/todo" && req.method === "GET"){
        const title = url.searchParams.get("title");
        console.log(title);
        const data = fs.readFileSync(filepath, { encoding: 'utf-8' });

        const parseAllData = JSON.parse(data);
        const todo = parseAllData.find((todo) => todo.title === title);
        const stringifiedTodo = JSON.stringify(todo, null, 2);
        res.writeHead(200, { 
            "Content-Type": "application/json",
        });
        res.end(stringifiedTodo);
    }else if (pathname === "/todos/update-todo" && req.method === "PATCH"){
        const title = url.searchParams.get("title");
        let data = "";
        req.on("data", (chunk)=> {
            data = data + chunk;
        })
        req.on("end", () => {
            
            const {completed} = JSON.parse(data);
           
           

            const alltodos = fs.readFileSync(filepath, { encoding: 'utf-8' });

            const parseAllTodos = JSON.parse(alltodos);

            const todoIndex = parseAllTodos.findIndex((todo) => todo.title === title);
            
            parseAllTodos[todoIndex].completed = completed;

            const createdAt = parseAllTodos[todoIndex].createdAt || new Date().toLocaleString();

            fs.writeFileSync(filepath, JSON.stringify(parseAllTodos, null, 2), { encoding: 'utf-8' });

            res.end(JSON.stringify({
                title, completed, createdAt
            },null , 2));

        })
        
    }else if (pathname === "/todos/delete-todo" && req.method === "DELETE"){
        const title = url.searchParams.get("title");
         const alltodos = fs.readFileSync(filepath, { encoding: 'utf-8' });
         const parseAllTodos = JSON.parse(alltodos);
         const todoIndex = parseAllTodos.findIndex((todo) => todo.title === title);
         const deletedTodo = parseAllTodos.splice(todoIndex, 1)[0];
        fs.writeFileSync(filepath, JSON.stringify(parseAllTodos, null, 2), { encoding: 'utf-8' });

            res.end(JSON.stringify({
                deletedTodo, message: "Todo deleted successfully"
            },null , 2));
       
        
        
    }else{
        console.log("Route not found");
        res.end("Route not found");
    }
});

server.listen( 5000, "127.0.0.1", () => {
    console.log("Server is listening on port 5000");
})
