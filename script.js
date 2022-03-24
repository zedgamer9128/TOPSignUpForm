let formDiv = document.querySelector("#form-div")
let pass = document.querySelector("#password")
let confirmPass = document.querySelector('#confirm');

confirmPass.addEventListener("focusout", function() { 
    if (pass.value !== confirmPass.value) {
            document.querySelector("#message").style.visibility = "visible"
            pass.classList = "error";
            confirmPass.classList = "error";
    } else if (document.querySelector("#message")) {
        document.querySelector("#message").style.visibility = "hidden"
        pass.classList.remove("error")
        confirmPass.classList.remove("error")
    }
})