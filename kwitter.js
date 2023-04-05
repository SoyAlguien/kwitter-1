function add_user(){
    User=document.getElementById("user").value
    localStorage.setItem("User",User)
    window.location="kwitter_room.html"
}