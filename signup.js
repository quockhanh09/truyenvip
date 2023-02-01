let listUser;
const dataLocalStorage = localStorage.getItem("listUser")

//Check listUser
if(dataLocalStorage === null){
    listUser = [] 
}else {
    listUser = dataLocalStorage;
    listUser = JSON.parse(listUser);
}

const btn = document.getElementById("submit");
const inputName = document.getElementById("name");
const inputMail = document.getElementById("mail");
const inputPass = document.getElementById("password");

                // Check Validate

let isCheckName = false;
let isCheckMail = false;
let isCheckPass = false;

inputName.onchange = () => {
    if(!(inputName.value.length >= 2)){
        document.getElementById("sub-info__name").innerHTML = `<div style ="color:red">Tên phải chứa tối thiểu 2 kí tự</div>`
    }else{
        isCheckName = true;
        document.getElementById("sub-info__name").innerHTML = `<div style ="color:green">Tên hợp lệ</div>`
    }

}


inputMail.onchange = () => {
    if(!(inputMail.value.includes("@gmail.com"))){
        document.getElementById("sub-info__mail").innerHTML = `<div style ="color:red">Định dạng chưa đúng</div>`
    }else{
        isCheckMail = true;
        document.getElementById("sub-info__mail").innerHTML = `<div style ="color:green">Mail hợp lệ</div>`
    }

}

inputPass.onchange = () => {
    if(!(inputPass.value.length >= 6)){
        document.getElementById("sub-info__pass").innerHTML = `<div style ="color:red">Mật khẩu chứa tối thiểu 6 kí tự</div>`
    }else{
        isCheckPass = true;
        document.getElementById("sub-info__pass").innerHTML = `<div style ="color:green">Mật khẩu hợp lệ</div>`
    }

}
const isExistEmail = false;
btn.addEventListener("click",() =>{
    if(isCheckName == true && isCheckMail == true && isCheckPass == true ){
        for(let user of listUser){
            if(user.mail === inputMail.value){
                isExistEmail = true;
            }
        }
        if(isExistEmail === false){
            const newUser = {
                name: inputName.value,
                mail: inputMail.value,
                password: inputPass.value,
            }
            listUser.push(newUser)
            document.getElementById("name").value = "";
            document.getElementById("mail").value = "";
            document.getElementById("password").value = "";
            document.getElementById("sub-info__name").innerHTML = `<div></div>`
            document.getElementById("sub-info__mail").innerHTML = `<div style="font-size: 15px; color:rgb(32, 32, 224)">Mail phải chứa @gmail.com</div>`
            document.getElementById("sub-info__pass").innerHTML = `<div id="sub-info__pass" style="font-size: 15px; color:rgb(32, 32, 224)">Tối thiểu 6 kí tự</div>`

            localStorage.setItem("listUser", JSON.stringify(listUser))
        }else{
            alert("Email đã tồn tại")
        }
    alert("Đăng kí thành công")
    window.location.href = "./login.html"
}else{
    alert("Đăng kí không thành công")
}
})






