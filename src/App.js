import './App.css';
import { useEffect, useState } from 'react';
import QuestionOne from './pages/survey1/SurveyQuestionOne';
import QuestionTwo from './pages/survey2/';
import QuestionThree from './pages/survey3/';
import QuestionFour from './pages/survey4/';
import QuestionFive from './pages/survey5/';
import useSurvey from './hooks/useSurvey';
import Welcome from './pages/surveyWelcome';

const App = () => {
  // const [question, setQuestion] = useState(1);
  // const surveyPage = useSurvey();
  const [surveyPage, setSurveyPage] = useState(0);
  useEffect(() => {
  }, []);

  const openNextPage = (id) => {
    // setSurveyPage(id);
  }

  if (surveyPage === 1) {
    return <QuestionOne next={() => openNextPage(2)} />
  }
  if (surveyPage === 2) {
    return <QuestionTwo next={() => openNextPage(3)} />
  }
  if (surveyPage === 3) {
    return <QuestionThree next={() => openNextPage(4)} />
  }
  if (surveyPage === 4) {
    return <QuestionFour next={() => openNextPage(5)} />
  }
  if (surveyPage === 5) {
    return <QuestionFive next={() => openNextPage(0)} />
  }
  return <Welcome next={() => openNextPage(1)} />
}

export default App;
