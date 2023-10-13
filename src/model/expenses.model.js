import mongoose from "mongoose"

const expenseSchema = new mongoose.Schema({
  description: String,
  amount: Number,
  category:String,
}, { timestamps: true });

const Expenses = mongoose.model('Expenses', expenseSchema);

export {Expenses};