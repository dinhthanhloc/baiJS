function check(){
    var email = document.getElementById("email").value;
    var com = document.getElementById("com").value;
    var rate = document.getElementById("rate").value;

    var emailvalid =  /^[^\s@]+@[^\s]+\.[^\s]/;
    if (email == "" || com == "" || rate == "") {
        alert("Vui long dien day du thong tin ");
        return false;
    }
    if(!emailvalid.test(email)){
        alert('email khong dung dinh dang. Vui long nhap lai');
        return false;
    }
    if (isNaN(rate) || rate < 1 || rate > 10) {
        alert("so tu 1-9");
        return false;
    }
    alert("ban da dang nhap thang cong");
    return true;
}
