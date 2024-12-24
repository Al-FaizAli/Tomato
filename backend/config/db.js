// import mongoose from "mongoose";

// export const connectDB = async () =>{
//     await mongoose.connect('mongodb+srv://dulanjalisenarathna93:E2JUb0zfaT2FVp8D@cluster0.exkxkun.mongodb.net/reactjs-food-delivery-app').then(()=>{
//        console.log('DB connected') ;
//     })
// }

import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://AlFaizAli:cg3m9hcGWuKDOOZn@cluster0.smu2cu7.mongodb.net/food-del').then(() => {
        console.log('DB connected');
    })
}