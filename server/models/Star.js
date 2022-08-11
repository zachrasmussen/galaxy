import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const StarSchema = new Schema(
    {
        name: String
    },
    { timestamps: true, toJSON: { virtuals: true } }
)