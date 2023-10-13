import express from 'express';
import { getExpenses, postExpenses } from '../controllers/expenses.controller';

const router=express.Router()
router.route("/").get(getExpenses);
router.route("/").post(postExpenses);


export {router};