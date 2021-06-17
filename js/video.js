var zan = document.getElementById('zan');
var bi = document.getElementById('bi');
var shou = document.getElementById('shou');
var num1 = document.getElementById('num1');
var num2 = document.getElementById('num2');
var num3 = document.getElementById('num3');
var flag1 = 0;
var flag2 = 0;
var flag3 = 0;
zan.onclick = function() {
    if (flag1 == 0) {
        num1.innerHTML++;
    }
    if (flag1 == 1) {
        num1.innerHTML--;
    }
    if (flag1 == 2) {
        num1.innerHTML++;
        flag1 = 0;
    }
    flag1++;
}
bi.onclick = function() {
    if (flag2 == 0) {
        num2.innerHTML++;
    }
    if (flag2 == 1) {
        num2.innerHTML--;
    }
    if (flag2 == 2) {
        num2.innerHTML++;
        flag2 = 0;
    }
    flag2++;
}
shou.onclick = function() {
    if (flag3 == 0) {
        num3.innerHTML++;
    }
    if (flag3 == 1) {
        num3.innerHTML--;
    }
    if (flag3 == 2) {
        num2.innerHTML++;
        flag3 = 0;
    }
    flag3++;
}
function changeImage()
{
    element=document.getElementById('myimage')
    if (element.src.match("bulbon"))
    {
        element.src="/images/good_bulboff.png";
    }
    else
    {
        element.src="/images/good_bulbon.png";
    }
}
function changeImage1()
{
    element=document.getElementById('myimage1')
    if (element.src.match("bulbon"))
    {
        element.src="/images/bi_bulboff.png";
    }
    else
    {
        element.src="/images/bi_bulbon.png";
    }
}
function changeImage2()
{
    element=document.getElementById('myimage2')
    if (element.src.match("bulbon"))
    {
        element.src="/images/shou_bulboff.png";
    }
    else
    {
        element.src="/images/shou_bulbon.png";
    }
}