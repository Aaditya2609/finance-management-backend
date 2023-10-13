import {Savings} from "../model/savings.model"

const getSavings=async (req, res) => {
    try {
      const savings = await Savings.find();
      if(savings)
      res.status(200).json(savings);
        else
        res.status(400).json({message:"savings not found"})
    } catch (err) {
      res.status(500).json({ error: 'Error fetching savings.' });
    }
  }

  const postSavings=async (req, res) => {
    try {
    const { description, amount,category } = req.body;
    const savings = new Savings({ description, amount,category });
    const createdExpense=await  savings.save();
    if(createdExpense)
    res.status(201).json(createdExpense);
    else
    res.status(400).json({message:"Expense not added"})
    } catch (err) {
      res.status(500).json({ error: 'Error adding expense.' });
    }
  }

  export {getSavings,postSavings}