import express from "express"
import { addFood } from "../controllers/foodController"
import multer from "multer"

const foodRouter = express.Router();

// Image Storage engine 

// const storage = multer.diskStorage({
//     destination: "uploads",
//     filename: (req, file, cb) => {
//         return cb(null, `${Date.now()} ${file.originalname}`)
//     }
// })


foodRouter.post("/add", addFood)

export default foodRouter;
