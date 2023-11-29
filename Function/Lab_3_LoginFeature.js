function login(){
    let username = prompt("Username : ");
    let password = prompt("Password : ");
    if(username == "admin" && password == "P@ssw0rd"){
        alert("Login สำเร็จ");
    }else{
        alert("Username หรือ Password ผิดพลาด");
    }
}
login();