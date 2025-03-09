import express from 'express'
import cors from 'cors'
import { connectDB } from './config/db.js'
import foodRouter from './routes/foodRoute.js'
import userRouter from './routes/userRoute.js';
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';
import dotenv from "dotenv";
import 'dotenv/config';
dotenv.config();

//app config
const app = express()
const port = 5000

// middleware
app.use(express.json())
app.use(cors({
    origin: ["https://tomato-admin-vert.vercel.app"], // Allow only your frontend
    methods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
    allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
    credentials: true // Allow cookies if needed
}));


//db connection
connectDB();

// api endpoints
app.use("/api/food", foodRouter)
app.use("/images", express.static('uploads'))
app.use('/api/user', userRouter)
app.use('/api/cart', cartRouter)
app.use('/api/order', orderRouter)

app.get("/", (req, res) => {
    res.send("API working")
})

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`)
})