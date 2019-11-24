function checkPass()
{
    var password = document.getElementById('password');
    var username  = document.getElementById('username');
    var newUrl='./logined.html';

    if(password.value == 'debovao'&&username.value=='tencc'){
        history.pushState({}, null, newUrl);
    }else{
        alert('sai r cho');
    }
}  