import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import recipeRouter from "./routes/ReceipeRoute.js"

// app cofig 
const app = express();
const port = process.env.PORT || 4000

// middleware
app.use(express.json())
app.use(cors())

// DB Connection 
connectDB();

// api endpoint 
app.use("/api/food",foodRouter);
app.use("/api/recipe",recipeRouter);

// Route 
app.get("/", (req, res) => {
    res.send("API Working")
})

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`)
})