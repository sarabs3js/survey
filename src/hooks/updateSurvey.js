import { ref, query, get, set } from 'firebase/database';
import { db } from '../firebase';

const useUpdateSurvey = () => {

    async function getData (dbRef) { 
        const usersSnapshot = await get(query(dbRef))
        return usersSnapshot.val();
    }

    async function getUpdatedData (surveyId, selectedOption) {
        console.log(`/surveyResult/${surveyId}/${selectedOption}`);
        const dbRef = ref(db, `/surveyResult/${surveyId}/${selectedOption}`);
        const count = await getData(dbRef);
        console.log(count, dbRef);
        await set(dbRef, count+1);
    }


    return { getUpdatedData };
};

export default useUpdateSurvey;
