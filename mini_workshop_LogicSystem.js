// If Else
// let username = prompt("Username : ");
// let user = "guest";
// if (username !== "codecamp"){
//     user = "guest"
//     alert("Welcome : "+ user)
// }
// if (username === "codecamp") {
//     let password = prompt("Password : ");
//     if (password == "123456"){
//         user = "codecamp";
//         alert("Welcome : "+ user)
//     }else{
//         alert("Wrong password");
//     }
// }

let username = prompt("Username : ");
switch (username){
    case "codecamp":
        let password = prompt("Password : ");
        if (password == "123456"){
            let user = "codecamp";
            alert("Welcome : "+ user)
            break;
        }else{
            alert("Wrong password");
        }  
    default:
        let user = "guest"
        alert("Welcome : "+ user)
        break;
}