var firebaseConfig = {
      apiKey: "AIzaSyD-ArE8xEPjd56u-vMk_EV-erCKy76Lj9g",
      authDomain: "kwitter-fb78e.firebaseapp.com",
      databaseURL: "https://kwitter-fb78e-default-rtdb.firebaseio.com",
      projectId: "kwitter-fb78e",
      storageBucket: "kwitter-fb78e.appspot.com",
      messagingSenderId: "54237870709",
      appId: "1:54237870709:web:5a23a84edf84e609b3d63c"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//AGREGA TUS ENLACES DE FIREBASE AQUÍ
var user=localStorage.getItem("User");
document.getElementById("Hola").innerHTML="Hola "+user;
function Nueva_Sala(){
      sala=document.getElementById("Sala").value;
      firebase.database().ref().child(sala).update({Hola:"😎"})
}
function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("adios").innerHTML = ""; 
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Inicia el código
                  renglon='<div class="room_name" id= '+Room_names+' onclick="redirectToRoomName(this.id)" >'+Room_names+'</div><hr>'
                  document.getElementById("adios").innerHTML+=renglon
                  //Finaliza el código
            });
      });
}
getData();
function redirectToRoomName(id){
      localStorage.setItem("zzz",id)
      window.location="kwitter_page.html"
}
function cr(){
      localStorage.removeItem("User")
      localStorage.removeItem("zzz")
      window.location="index.html"
}