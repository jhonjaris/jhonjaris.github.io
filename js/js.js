let submit = document.getElementById("submitEmail");
let email = document.getElementById("email");
// let root = "localhost/portfolio";
let root = "";
function filterChar(text) {
    let response; 
    response = text.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '')
    return response;
}

submit.addEventListener("click", function (e) {
    e.preventDefault();
    let form = new FormData(email);
    form.set("nombre", filterChar(form.get("nombre")));
    form.set("contacto", filterChar(form.get("contacto")));
    form.set("mensaje", filterChar(form.get("mensaje")));

    const http = new XMLHttpRequest("");
    const url = root + "/core/email.php";
    
    http.open("POST", url);
    http.send(form);
    http.onreadystatechange = function() {
        if (http.readyState === 4) {
                    // alert(http.responseText)
            switch (http.status) {
                case 200:
                    email.reset();
                    alert("Email enviado de manera satisfactoria");

                    break;
                case 400:
                    alert("Algo salió mal. Por favor intenta más tarde");
                    break;
            }
        }
    }
}) 