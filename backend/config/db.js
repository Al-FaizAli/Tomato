import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://AlFaizAli:cg3m9hcGWuKDOOZn@cluster0.smu2cu7.mongodb.net/FoodCorner?retryWrites=true&w=majority').then(() => {
        console.log('DB connected');
    })
}