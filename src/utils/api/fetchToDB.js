import axios from 'axios';

const BASE_URL = 'http://localhost:3000/';
const AUTORIZATION = 'auth/'
const REGISTRATION = 'registration';
const LOGIN = 'login';
const SURVEY = 'survey/';
const QUE = 'que';
const QUESTION = 'question';
const CHECK_LOGGED_IN = 'check-logged-in';
const ANSWER = 'answer';
const GET_ANSWERS = 'get-answers'

export const fetchToDBLogin = (username, password) => axios.post(`${BASE_URL}${AUTORIZATION}${LOGIN}`, {username, password})
.then((response) => {
    let token = response.data.token;
    localStorage.setItem("SavedToken", token);    
    console.log(response)
    })
  
export const fetchToDbRegistration = (username, password) => axios.post(`${BASE_URL}${AUTORIZATION}${REGISTRATION}`, {username, password});

export const fetchDbToGetQuestin = () => axios.get(`${BASE_URL}${SURVEY}${QUE}`);

export const fetchDbToPostQuestion = (surveyy) => axios.post(`${BASE_URL}${SURVEY}${QUESTION}`, {surveyy});

export const getToken = (token) => axios.post(`${BASE_URL}${AUTORIZATION}${CHECK_LOGGED_IN}`, {token});

export const postAnswer = (answer) => axios.post(`${BASE_URL}${SURVEY}${ANSWER}`, { answer });

export const getAnswers = () => axios.get(`${BASE_URL}${SURVEY}${GET_ANSWERS}`)