import express, { Router } from "express";

import Surveys from './controllers/surveys'

const router = Router();

router.route('/surveys')
  .post(Surveys.create)
  .get(Surveys.index)

export default router
