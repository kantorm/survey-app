import express, { Router } from "express";

import Surveys from './controllers/surveys'

const router = Router();

router.route('/surveys')
  .post(Surveys.create)
  .get(Surveys.index)

router.route('/surveys/:surveyId')
  .delete(Surveys.delete);

export default router
