// import express from 'express'
// import cors from 'cors'
// import { connectDB } from './config/db.js'
// import foodRouter from './routes/foodRoute.js'
// import userRouter from './routes/userRoute.js';
// import cartRouter from './routes/cartRoute.js';
// import orderRouter from './routes/orderRoute.js';
// import dotenv from "dotenv";
// import 'dotenv/config';
// dotenv.config();

// //app config
// const app = express()
// const port = 5000

// // middleware
// app.use(express.json())
// app.use(cors({
//     origin: process.env.FRONTEND_URL,
//     credentials: true
// }));

// //db connection
// connectDB();

// // api endpoints
// app.use("/api/food", foodRouter)
// app.use("/images", express.static('uploads'))
// app.use('/api/user', userRouter)
// app.use('/api/cart', cartRouter)
// app.use('/api/order', orderRouter)

// app.get("/", (req, res) => {
//     res.send("API working")
// })

// app.listen(port, () => {
//     console.log(`Server started on http://localhost:${port}`)
// })

import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";
import dotenv from "dotenv";
dotenv.config();

// Initialize Express
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors({
    origin: "*"
    // credentials: true
}));
// app.use(cors({
//     origin: [process.env.FRONTEND_URL, process.env.ADMIN_URL].filter(Boolean),
//     credentials: true
// }));

// Database Connection
connectDB();

// API Routes
app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

// Root Route
app.get("/", (req, res) => {
    res.send("API working");
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})

export default app;