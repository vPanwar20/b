import mongoose from "mongoose";

const schema=mongoose.Schema({
    name:String,
    price:Number,
    category:String,
    image:String,
    title:String,
});

const book=mongoose.model("book",schema)
export default book;