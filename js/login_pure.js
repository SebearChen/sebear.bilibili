var login_btn = document.getElementById("login");
var register_btn = document.getElementById("register");
//登陆按钮实现
login_btn.addEventListener("click",function(){
    var user_name = document.getElementById("user_name").value;
    var user_password = document.getElementById("user_password").value;
    var user_nameArr = new Array(localStorage.length);
    //将储存的记录存入数组中
    for(i=0;i<localStorage.length;i++){
        user_nameArr[i] = localStorage.key(i);
    }
    if(user_nameArr.includes(user_name)){
        var store_password = localStorage.getItem(user_name);
        if(user_password == store_password){
            window.location.href = "index.html";
        }else{ 
            alert('密码错误！');
        }
    }
    else{
        alert('用户名不存在！');
        }
    })
    //注册按钮实现
    register_btn.addEventListener("click",function(){
        window.location.href = 'Register.html';
    })
