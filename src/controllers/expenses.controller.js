import {Expenses} from "../model/expenses.model"

const getExpenses=async (req, res) => {
    try {
      const expenses = await Expenses.find();
      if(expenses)
      res.status(200).json(expenses);
        else
        res.status(400).json({message:"expenses not found"})
    } catch (err) {
      res.status(500).json({ error: 'Error fetching expenses.' });
    }
  }

  const postExpenses=async (req, res) => {
    try {
    const { description, amount, category } = req.body;
    const expenses = new Expenses({ description, amount, category });
    const createdExpense=await  expenses.save();
    if(createdExpense)
    res.status(201).json(createdExpense);
    else
    res.status(400).json({message:"Expense not added"})
    } catch (err) {
      res.status(500).json({ error: 'Error adding expense.' });
    }
  }

  export {getExpenses,postExpenses}