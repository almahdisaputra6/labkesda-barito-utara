// firebase.js

const firebaseConfig = {
  apiKey: "AIzaSyAesZs1ytBEiE0_UW1eXwQtM5lXbE_VhJs",
  authDomain: "labkesda-barito-utara.firebaseapp.com",
  projectId: "labkesda-barito-utara",
  storageBucket: "labkesda-barito-utara.appspot.com",
  messagingSenderId: "755322490739",
  appId: "1:755322490739:web:4f9f4b240d630639b87f06"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();
