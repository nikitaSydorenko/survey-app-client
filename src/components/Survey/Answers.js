import React, { useState, useEffect, useCallback } from 'react';
import { getAnswers as apiGetAnswers, fetchDbToGetQuestin } from '../../utils/api/fetchToDB';
import './Answer.css'

const Answers = () => {
    const [percentageCivilWar, setPercentageCivilWar] = useState(null); 
    const [percentageLibertyordeath, setPercentageLibertyordeath] = useState(null)
    let answersMap = {};
   
    const getAnswers = useCallback( async () => {
        const apiAnswers = await apiGetAnswers();
        const apiServey = await fetchDbToGetQuestin();
        const formattedApiSurvey = JSON.parse(apiServey.data[2].surveyy);
        console.log(apiAnswers.data)
        let correctAnswers = {};
        formattedApiSurvey.pages.forEach(({ elements }) => {
            elements.forEach((el) => {
                correctAnswers[el.name] = el.correctAnswer;
            });
        });
       
        apiAnswers.data.forEach(({ answer: a }) => {
            Object.keys(a).forEach(key => {
                const isCorrect = correctAnswers[key] === a[key];
                if (!isCorrect) {
                    return;
                }
                answersMap[key] = answersMap[key] ? answersMap[key] + 1 : 1;
            });
        });

    setPercentageCivilWar((100 / apiAnswers.data.length) * answersMap.civilwar + '%');
    setPercentageLibertyordeath((100 / apiAnswers.data.length) * answersMap.libertyordeath + '%');
        
    }, [percentageCivilWar, percentageLibertyordeath]);
    
    useEffect(() => {
        getAnswers()
    }, [])
    console.log(percentageCivilWar, percentageLibertyordeath)
    return (
        <div> 
            <h3>CivilWar: {percentageCivilWar}</h3>
            <h3>Libertyordeath: {percentageLibertyordeath}</h3>
        </div>
    )
}

export default Answers;