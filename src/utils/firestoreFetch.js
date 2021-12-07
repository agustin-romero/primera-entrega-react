import { query, orderBy, where, collection, getDocs } from "firebase/firestore";
import db from './firebaseConfig.';

const firestoreFetch = async () => {
    const q = query(collection(db, "products"), orderBy('name'), where());
    const querySnapshot = await getDocs(q);
    const dataFromFirestore = querySnapshot.docs.map(document => ({
        id: document.id,
        ...document.data()
    }));
    return dataFromFirestore;

}

export default firestoreFetch;