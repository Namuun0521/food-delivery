import express from 'express'
import { connectToDatabase } from './database/index.js';
import { FoodRouter } from './routes/food.routes.js';

await connectToDatabase();
const app = express()

app.use(express.json());

app.use('/foods', FoodRouter);

// let arr:string[] =[]

// app.get("/", (req,res) => {
//     res.send(arr)})

// app.post("/", (req,res) => {
//     const data = req.body;
//     arr.push(data.value)
//     res.send("Success")
// })

// app.put("/", (req,res) => {
//     const data = req.body;
//     arr= arr.filter(item => item !==data.value)
//     res.send("Success")
// })

app.listen(4003, () => {
    console.log(`Example app listening on port 4003`)
})