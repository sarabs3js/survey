import { ref, onValue, query } from 'firebase/database';
import { useEffect, useState } from 'react';
import { db } from '../firebase';

const useSurvey = () => {
    const [survetPage, setSurveyPage] = useState();

    async function getUpdatedData () {
        const dbRef = ref(db, "/surveyPage")
        onValue(query(dbRef), (snapshot) => {
            setSurveyPage(snapshot.val())
        });
    }

    useEffect(() => {
        getUpdatedData();
    }, []);

    return survetPage;
};

export default useSurvey;
