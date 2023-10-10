const login = document.getElementById("login");
const password = document.getElementById("password");
const continueBtn = document.getElementById("continue");

const Login = "qwerty";
const Password = 123;

function isValid(){
    if (login === Login || password === Password){
        continueBtn.addEventListener('click', () => {
            window.location.href = 'adminPanel.html'
        })
    }
}
isValid()