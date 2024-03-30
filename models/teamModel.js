import { mongoose } from "mongoose";
const teamSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        trim: true
    },
    email: {
        type: String,
        require: true,
        trim: true
    },
    slug: {
        type: String,
        require: true,
    },
    category: {
        type: mongoose.ObjectId,
        ref: "teamCategory"
    },
    subcategory: {
        type: mongoose.ObjectId,
        ref: "teamSubCategory"
    },
    description: {
        type: String,
        require: true,
        trim: true
    },
    socialhandle: {
        type: String,
        require: true,
    },
    image: {
        type: String,
        require: true,
        trim: true
    },
})
const teamModel = mongoose.model("team", teamSchema)
export default teamModel