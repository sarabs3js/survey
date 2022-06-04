import './App.css';
import { useEffect } from 'react';
import QuestionOne from './pages/survey1/SurveyQuestionOne';
import QuestionTwo from './pages/survey2/';
import QuestionThree from './pages/survey3/';
import QuestionFour from './pages/survey4/';
import QuestionFive from './pages/survey5/';
import useSurvey from './hooks/useSurvey';
import Welcome from './pages/surveyWelcome';

const App = () => {
  // const [question, setQuestion] = useState(1);
  const surveyPage = useSurvey();
  // const [surveyPage, setSurveyPage] = useState(5);
  useEffect(() => {
  }, []);

  // const openNextPage = (id) => {
  //   // setSurveyPage(id);
  // }

  if (surveyPage === 1) {
    return <QuestionOne  /> 
  }
  if (surveyPage === 2) {
    return <QuestionTwo  /> 
  }
  if (surveyPage === 3) {
    return <QuestionThree />
  }
  if (surveyPage === 4) {
    return <QuestionFour />
  }
  if (surveyPage === 5) {
    return <QuestionFive />
  }
  return <Welcome />
}

export default App;
