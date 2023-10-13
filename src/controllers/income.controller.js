import {Income} from "../model/income.model"

const getIncome=async (req, res) => {
    try {
      const income = await Income.find();
      if(income)
      res.status(200).json(income);
        else
        res.status(400).json({message:"income not found"})
    } catch (err) {
      res.status(500).json({ error: 'Error fetching income.' });
    }
  }

  const postIncome=async (req, res) => {
    try {
    const { description, amount,category } = req.body;
    const income = new Income({ description, amount,category });
    const createdExpense=await  income.save();
    if(createdExpense)
    res.status(201).json(createdExpense);
    else
    res.status(400).json({message:"Expense not added"})
    } catch (err) {
      res.status(500).json({ error: 'Error adding expense.' });
    }
  }

  export {getIncome,postIncome}