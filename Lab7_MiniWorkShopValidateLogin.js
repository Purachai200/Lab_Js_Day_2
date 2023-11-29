let username = prompt("Username :");
let password = prompt("Password :");

if (username == ""){
    alert("username is required")
}else if (password == ""){
    alert("password is require")
}

if (username == "admin" && password == "1234"){
    alert("Hello Admin")
}else{
    alert("invalid Username or Password")
}