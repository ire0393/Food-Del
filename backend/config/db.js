import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://iremide:september1993@cluster0.czumlpi.mongodb.net/food-del').then(()=>console.log("DB Connected"));

}