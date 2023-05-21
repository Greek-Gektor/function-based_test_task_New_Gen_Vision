
<form>
    <input type="username" id="username" value = "">
    <input type="password" id="password" value = "">
    <span id = "message" style="color:red">
    <input type="button" value="Авторизоваться" onClick="authorization()">
</form>


function authorization() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://examples.com/api/user/authenticate?username=' +
        username + '&password=' + password, true);
    xhr.responseType = 'json';
    xhr.send();
    xhr.onload = function () {
        if (xhr.status === 200) {
            document.location.href = '/home';
            document.getElementById("message").innerHTML = "";
        } else {
            document.getElementById("message").innerHTML = `Ошибка ${xhr.status}: ${xhr.statusText},неверный логин или пароль!`;
        }
    };
}
