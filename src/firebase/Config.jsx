import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getFirestore , serverTimestamp } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwhIu12ZumXvb56yGRVSxXkA2ce402sm8",
  authDomain: "pixelgram-shh.firebaseapp.com",
  projectId: "pixelgram-shh",
  storageBucket: "pixelgram-shh.appspot.com",
  messagingSenderId: "984919846854",
  appId: "1:984919846854:web:f50c2119680ce89dfe8cc7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const projectStorage = getStorage(app);
const projectFirestore = getFirestore(app);
const timeStamp = serverTimestamp();


export { projectStorage, projectFirestore , timeStamp};
