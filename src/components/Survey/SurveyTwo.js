import React, { useState, useCallback } from 'react';
import SurveyFromCreator from './SurveyFromCreator'

const SurveyOne = () => {
  const [showPage, setShowPage] = useState(true);
  const onCompletePage = useCallback((data) => {
    console.log(data);
    setShowPage(!showPage);
  }, [showPage]);
  const setFinalPage = () => (
    <main>
      <h1>Thank u for talking survey one</h1>
    </main>
  );
  return (
    <div>
      {
              showPage
                ? <SurveyFromCreator showCompletedPage={(data) => onCompletePage(data)} />
                : setFinalPage()
          }
    </div>

  );
};

export default SurveyOne;