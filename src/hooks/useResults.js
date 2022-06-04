import { ref, onValue, query } from 'firebase/database';
import { useEffect, useState } from 'react';
import { db } from '../firebase';

const useResults = (surveyid) => {
    const [surveyPage, setSurveyPage] = useState();

    useEffect(() => {
        async function getUpdatedData () {
            const dbRef = ref(db, `/surveyResult/${surveyid}`)
            onValue(query(dbRef), (snapshot) => {
                setSurveyPage(snapshot.val())
            });
        }
        getUpdatedData();
    }, [surveyid]);

    return surveyPage;
};

export default useResults;
