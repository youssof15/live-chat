import { ref } from 'vue'
import { projectfirestore } from '../firebase/config.js'

const getCollection = (collection) => {
    const error = ref(null)
    const documents = ref(null)

    const collectionRef = projectfirestore.collection(collection)
    .orderBy('createdAt')

    collectionRef.onSnapshot((snap)=>{
        let results = []
        snap.docs.forEach((doc)=>{
            doc.data().createdAt &&  // true ==> if true > continue code
            results.push({...doc.data(),id: doc.id})
        })
        documents.value = results
        error.value = null
    })
    return { documents , error }
}    

    export default getCollection