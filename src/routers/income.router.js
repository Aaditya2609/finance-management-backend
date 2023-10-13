import express from 'express';
import { getIncome, postIncome } from '../controllers/income.controller';

const router=express.Router()
router.route("/").get(getIncome);
router.route("/").post(postIncome);


export {router};