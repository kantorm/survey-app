import Survey from '../models/surveys'

const Surveys = {
  index: async (req, res) => {
    const surveys = await Survey.find()
    res.json({ surveys })
  },
  create: async (req, res) => {
    const newSurvey = await Survey.create(req.body.params)
    res.json({ survey: newSurvey })
  },
  delete: async (req, res) => {
    try {
      const query = await Survey.deleteOne({ _id: req.params.surveyId });
      res.json({ status: 200 })
    } catch(error) {
      res.json({ status: error.status })
    }
  }
}

export default Surveys
