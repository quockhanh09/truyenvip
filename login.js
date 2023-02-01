const inputMail = document.getElementById("mail");
const inputPass = document.getElementById("password");
const btnLogin = document.getElementById("login")

let listUser;
const dataLocalStorage = localStorage.getItem("listUser")

//Check listUser
if(dataLocalStorage === null){
    listUser = [] 
}else {
    listUser = dataLocalStorage;
    listUser = JSON.parse(listUser);
}
console.log(listUser)

btnLogin.addEventListener("click", () =>{
    let isCheckAccount;
    for(let user of listUser){
        if((inputMail.value === user.mail)&& (inputPass.value == user.password )){
            isCheckAccount = true
            break;
        }
    }
    console.log(isCheckAccount)
    if(isCheckAccount === true){
        alert("Đăng nhập thành công");
        window.location.href = "./mainpage.html"
        inputMail.value ="";
        inputPass.value ="";
    }else{
        alert("Mật khẩu hoặc tài khoản không đúng")
        inputMail.value ="";
        inputPass.value ="";
    }

})

