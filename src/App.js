import React, { useEffect, useState, useCallback } from 'react';
import { Route, Switch, useHistory } from 'react-router';
import Header from './components/Header/Header';
import Registration from './components/Registration/Registration';
import Login from './components/Registration/Login';
import './styles.css';
import { CreatorPage } from './components/Survey/Creator';
import { getToken } from './utils/api/fetchToDB'
import SurveyCreator from './components/Survey/ SurveyCreator';
import MySurvey from './components/Survey/MySurvey';
import Answers from './components/Survey/Answers';

const App = () => {
  let history = useHistory()
  const [isApploading, setIsAppLoading] = useState(true);
  const [user, setUser] = useState({});
  
const checkIsLogin = useCallback( async () => {
  let token = localStorage.getItem("SavedToken");
  try {
    
    const res = await getToken(token);
    const {userToken = ''} = res.data.tmp[0] || {};
    const { user = {} } = res.data.tmp[0];
    setUser(user);

    if(userToken){
      setIsAppLoading(false);
      
    }else if(!userToken){
      setIsAppLoading(true)
    }
  } catch (err) {
      console.log(err)
  }
  if(!token) {
    history.push('/login')
  }
  
}, [isApploading, user]);


  
  useEffect(() => {
    checkIsLogin();
  }, []);
  

  return (
    <div>
      
      
        <Header isApploading={isApploading} user={user}/>

        <Switch>
          <Route path="/registration" component={Registration} />
          <Route path="/login" component={Login}/>
          <>
          <Route path="/creator" component={SurveyCreator}/>
          <Route path="/survey" component={MySurvey} />
          <Route path="/creator" component={CreatorPage}/>
          <Route path="/get-answers" component={Answers} />
          </>
         
        </Switch>
    </div>
  );
};

export default App;
