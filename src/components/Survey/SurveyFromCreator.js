import React from 'react';
import * as Survey from 'surveyjs-react';

import 'surveyjs-react/survey.css';

const SurveyFromCreator = ({ showCompletedPage }) => {
  Survey
    .StylesManager
    .applyTheme('default');

  const survey = new Survey.Model(json);


  return (
      <div>
        <Survey.Survey
        showCopletedPage={false}
        onComplete={(data) => showCompletedPage(data.valuesHash)}
        model={survey}
        />
      </div>
    
  );
};
export default SurveyFromCreator;