import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyCDp0pKIXfnPMbMPtVvhx6LNsIUQxQKDuM",
  authDomain: "frontmeni-app.firebaseapp.com",
  databaseURL: "https://frontmeni-app.firebaseio.com",
  projectId: "frontmeni-app",
  storageBucket: "",
  messagingSenderId: "995766035206"
};

export default () => {
  firebase.initializeApp(config);
}