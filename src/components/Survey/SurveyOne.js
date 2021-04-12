// import React, { useState, useCallback } from 'react';
// import MySurvey from './MySurvey';

// const SurveyOne = () => {
//   const [showPage, setShowPage] = useState(true);
//   const [answers, setAnswers] = useState([])
//   const onCompletePage = useCallback((data) => {
//     console.log(data)
//     setAnswers([...answers, data])
//     setShowPage(!showPage);
//   }, [showPage, answers]);
  
//   console.log(answers)
//   return (
//     <div>
//      <MySurvey showCompletedPage={(data) => onCompletePage(data)} />
  
//     </div>

//   );
// };

// export default SurveyOne;