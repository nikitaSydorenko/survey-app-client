import React, {useEffect, useState, useMemo} from 'react';
import * as Survey from 'surveyjs-react';
import { json } from '../../utils/api/jsonSurvey';
import {fetchDbToGetQuestin} from '../../utils/api/fetchToDB'
import { postAnswer } from '../../utils/api/fetchToDB'

import 'surveyjs-react/survey.css';

const MySurvey = ({ showCompletedPage }) => {
  const [answers, setAnswers] = useState([])
  const [question, setQuestion] = useState()

  async function fetchGetQue() {
    const responseDB = await fetchDbToGetQuestin()
    
    setQuestion(responseDB.data[2].surveyy)
}
const survey = useMemo(() => new Survey.Model(question), [question]);

useEffect(() => {
  fetchGetQue()
  survey
    .onComplete
    .add((result) => {
      console.log(result)
      postAnswer(result.data)
    });
}, [question]);

  return (
      <div>
        <Survey.Survey
        model = {survey}
        />
      </div>
    
  );
};
export default MySurvey;

