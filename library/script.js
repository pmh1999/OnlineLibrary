function checkPass()
{
    var password = document.getElementById('password');
    var username  = document.getElementById('username');
    var newUrl='./logined.html';

    if(password.value == 'admin'&&username.value=='admin'){
        history.pushState({}, null, newUrl);
    }else{
        alert('Sai tai khoan hoac mat khau');
    }
} 
