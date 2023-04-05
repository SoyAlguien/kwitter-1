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
    var sala=localStorage.getItem("zzz")
    var user=localStorage.getItem("User")
function getData() {
      firebase.database().ref("/" + sala).on('value', function (snapshot) {
            document.getElementById("plato").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key; childData = childSnapshot.val();
                  if (childKey != "Hola") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Inicia código
                        var user=message_data["user"]
                        var mensaje=message_data["mensaje"]
                        var likes=message_data["likes"]
                        var Renglon='<h4>'+user+'<sup><img src="tick.png" class="user_tick" alt=""></sup></h4><h4 class="message_h4 text-wrap">'+mensaje+'</h4> <button class="btn btn-warning" id="'+firebase_message_id+'" value="'+likes+'" onclick="updateLike(this.id)">👍'+likes+'</button>'
                        document.getElementById("plato").innerHTML+=Renglon
                        //Termina código
                  }
            });
      });
}
getData();
function enviar(){
      var mensaje=document.getElementById("Mensaje").value
      firebase.database().ref(sala).push({
            user:user,
            mensaje:mensaje,
            likes:0
      })
}
function updateLike(id){
      dia=document.getElementById(id).value;
      dia++;
      firebase.database().ref(sala).child(id).update({
            likes:dia
      })
}
function Salir(){
      localStorage.removeItem("User")
      localStorage.removeItem("zzz")
      window.location="index.html"
}