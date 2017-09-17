import Survey from '../models/surveys'

const Surveys = {
  index: async (req, res) => {
    const surveys = await Survey.find()
    res.json({ surveys })
  },
  create: async (req, res) => {
    const newSurvey = await Survey.create(req.body.params)
    res.json({ survey: newSurvey })
  }
}

export default Surveys
