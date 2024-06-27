import { useState , useEffect } from "react";

import { ref , uploadBytesResumable , getDownloadURL} from 'firebase/storage';
import { getStorage } from "firebase/storage";
import { projectStorage , projectFirestore , timeStamp } from "../firebase/Config";
import { collection , addDoc } from "firebase/firestore";

const useStorage = (file) =>
    {
        const [progress , setProgress] = useState(0);
        const [error , setError] = useState(null);
        const[url , setUrl] = useState(null);
         

  // Initialize Firebase Storage
  const projectStorage = getStorage();

  useEffect(() => {
    if (!file) return;

    // References to the file to be uploaded
    const storageRef = ref(projectStorage, file.name);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on('state_changed', (snapshot) => {
      // Progress function
      const percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      setProgress(percentage);
    }, (err) => {
      // Error function
      setError(err);
    }, async () => {
      // Complete function
      const downloadURL = await getDownloadURL(storageRef);
      const createdAt =timeStamp();
      uploadTask.add({url, createdAt});
      setUrl(downloadURL);

      // adding URL and its timestamp ti Firebase
      const collectionRef = collection(projectFirestore , 'images');
      await addDoc ( collectionRef , {
        url: downloadURL,
        createdAt : timeStamp
      });
    });

  }, [file]);

  return { progress, url, error };
}

    export default useStorage;
