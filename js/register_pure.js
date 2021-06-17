var register_btn = document.getElementById("register_btn");
//点击注册触发事件
register_btn.addEventListener("click",function(){
    var user_name = document.getElementById("reg_name").value;
    var user_password = document.getElementById("reg_password").value;
    if(user_name.length == 0||user_password.length ==0){
        alert("请输入需要注册的用户名或密码！");
    }
    //注册成功存入localStorage,并且弹回登录界面
    else{
        localStorage.setItem(user_name,user_password);
        //注册完成实现立刻跳转登录 
        setTimeout(function(){
            window.location.href = "login.html";
        });
    }
})