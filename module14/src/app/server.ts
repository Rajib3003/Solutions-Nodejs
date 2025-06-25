import { MongoClient, ServerApiVersion } from "mongodb";
import app from "./app";
import { client } from "../config/mongodb";

let server;

const port = 5000;











const bootstrap = async () => {
  await client.connect();
  // console.log("Connected to MongoDB");
  // const db = await client.db("todosDB");
  // const collection =await db.collection("todos").insertOne({
  //   title: "MongoDB",
  //   body: "MongoDB"
  // });
 
  server = app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
}

bootstrap();