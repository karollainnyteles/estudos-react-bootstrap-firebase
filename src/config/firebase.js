import firebase from "firebase";


    const firebaseConfig = {
        apiKey: "AIzaSyAj8uqnUToiRl9cYlzoxHut_OJqeRqw5Ro",
        authDomain: "eventos-23db7.firebaseapp.com",
        projectId: "eventos-23db7",
        storageBucket: "eventos-23db7.appspot.com",
        messagingSenderId: "312032988337",
        appId: "1:312032988337:web:0e85ac38b87a0e2b24a690"
      };
    
  // Initialize Firebase
  var ProjetoFirebase = firebase.initializeApp(firebaseConfig);
  export default ProjetoFirebase;
