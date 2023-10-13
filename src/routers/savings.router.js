import express from 'express';
import { getSavings, postSavings } from '../controllers/savings.controller';

const router=express.Router()
router.route("/").get(getSavings);
router.route("/").post(postSavings);


export {router};