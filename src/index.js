import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import productRouter from "./routes/productRouter.js";

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(cors());


app.listen(8080);


app.use("/product",productRouter);


app.get("/",(req,res)=>{

    res.send("hello putita")    
        

})



