// // import express from 'express'
// // import cors from 'cors'
// // import { connectDB } from './config/db.js'
// // import foodRouter from './routes/foodRoute.js'
// // import userRouter from './routes/userRoute.js';
// // import cartRouter from './routes/cartRoute.js';
// // import orderRouter from './routes/orderRoute.js';
// // import dotenv from "dotenv";
// // import 'dotenv/config';
// // dotenv.config();

// // //app config
// // const app = express()
// // const port = 5000

// // // middleware
// // app.use(express.json())
// // app.use(cors({
// //     origin: process.env.FRONTEND_URL,
// //     credentials: true
// // }));

// // //db connection
// // connectDB();

// // // api endpoints
// // app.use("/api/food", foodRouter)
// // app.use("/images", express.static('uploads'))
// // app.use('/api/user', userRouter)
// // app.use('/api/cart', cartRouter)
// // app.use('/api/order', orderRouter)

// // app.get("/", (req, res) => {
// //     res.send("API working")
// // })

// // app.listen(port, () => {
// //     console.log(`Server started on http://localhost:${port}`)
// // })

// import express from "express";
// import cors from "cors";
// import { connectDB } from "./config/db.js";
// import foodRouter from "./routes/foodRoute.js";
// import userRouter from "./routes/userRoute.js";
// import cartRouter from "./routes/cartRoute.js";
// import orderRouter from "./routes/orderRoute.js";
// import dotenv from "dotenv";
// dotenv.config();

// // Initialize Express
// const app = express();
// const port = process.env.PORT || 5000;

// // Middleware
// app.use(express.json());
// // app.use(cors({
// //     origin: "*"
// //     // credentials: true
// // }));
// // app.use(cors({
// //     origin: [process.env.FRONTEND_URL, process.env.ADMIN_URL].filter(Boolean),
// //     credentials: true
// // }));

// const allowedOrigins = [
//     "https://tomato-admin-vert.vercel.app",
//     "https://tomato-al-faizs-projects.vercel.app",
// ];

// app.use(cors({
//     origin: function (origin, callback) {
//         if (!origin || allowedOrigins.includes(origin)) {
//             callback(null, true);
//         } else {
//             callback(new Error("Not allowed by CORS"));
//         }
//     },
//     credentials: true,
// }));


// // Database Connection
// connectDB();

// // API Routes
// app.use("/api/food", foodRouter);
// app.use("/images", express.static("uploads"));
// app.use("/api/user", userRouter);
// app.use("/api/cart", cartRouter);
// app.use("/api/order", orderRouter);

// // Root Route
// app.get("/", (req, res) => {
//     res.send("API working");
// });

// app.listen(port, () => {
//     console.log(`App listening on port ${port}`)
// })

// export default app;


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

// Allowed Origins
const allowedOrigins = [
    "https://tomato-admin-vert.vercel.app",
    "https://tomato-al-faizs-projects.vercel.app",
];

// CORS Middleware
app.use((req, res, next) => {
    const origin = req.headers.origin;
    if (allowedOrigins.includes(origin)) {
        res.setHeader("Access-Control-Allow-Origin", origin);
        res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
        res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
        res.setHeader("Access-Control-Allow-Credentials", "true");
    }
    
    if (req.method === "OPTIONS") {
        return res.sendStatus(200); // Handle preflight requests
    }

    next();
});

// Body Parsing Middleware
app.use(express.json());

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

// Start Server
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});

export default app;